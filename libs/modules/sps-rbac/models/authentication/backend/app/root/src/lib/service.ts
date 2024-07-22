import "reflect-metadata";
import { inject, injectable } from "inversify";
import { CRUDService, DI, type IRepository } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-rbac/models/authentication/backend/schema/table";
import { HTTPException } from "hono/http-exception";
import { api as identityApi } from "@sps/sps-rbac/models/identity/sdk/server";
import { api as subjectApi } from "@sps/sps-rbac/models/subject/sdk/server";
import { api as permissionApi } from "@sps/sps-rbac/models/permission/sdk/server";
import { api as subjectsToRolesApi } from "@sps/sps-rbac/relations/subjects-to-roles/sdk/server";
import { api as subjectsToIdentitiesApi } from "@sps/sps-rbac/relations/subjects-to-identities/sdk/server";
import { api as rolesToPermissionsApi } from "@sps/sps-rbac/relations/roles-to-permissions/sdk/server";
import {
  SPS_RBAC_SECRET_KEY,
  SPS_RBAC_JWT_TOKEN_LIFETIME_IN_SECONDS,
  SPS_RBAC_JWT_SECRET,
  SPS_RBAC_JWT_REFRESH_TOKEN_LIFETIME_IN_SECONDS,
} from "@sps/shared-utils";
import * as jwt from "hono/jwt";

export interface ILoginAndPasswordDTO {
  data: {
    login: string;
    password: string;
  };
  provider: "login_and_password";
}

export interface IIsAllowedDTO {
  method: string;
  route: string;
  authorization: {
    value?: string;
  };
}

@injectable()
export class Service extends CRUDService<(typeof Table)["$inferSelect"]> {
  constructor(@inject(DI.IRepository) repository: IRepository) {
    super(repository);
  }

  async isAllowed(props: IIsAllowedDTO): Promise<any> {
    if (!SPS_RBAC_JWT_SECRET) {
      throw new Error("SPS_RBAC_JWT_SECRET is not defined in the service");
    }

    if (!SPS_RBAC_SECRET_KEY) {
      throw new Error("SPS_RBAC_SECRET_KEY is not defined in the service");
    }

    const authorization = props.authorization.value;

    const permissions = await permissionApi.find({
      params: {
        filters: {
          and: [
            {
              column: "method",
              method: "eq",
              value: props.method,
            },
            {
              column: "path",
              method: "eq",
              value: props.route,
            },
            {
              column: "type",
              method: "eq",
              value: "http",
            },
          ],
        },
      },
      options: {
        headers: {
          "X-SPS-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
        },
        next: {
          cache: "no-store",
        },
      },
    });

    if (!permissions?.length) {
      throw new HTTPException(401, {
        message: "No permissions found for the route",
      });
    }

    const permission = permissions[0];

    const permissionsToRoles = await rolesToPermissionsApi.find({
      params: {
        filters: {
          and: [
            {
              column: "permissionId",
              method: "eq",
              value: permission.id,
            },
          ],
        },
      },
      options: {
        headers: {
          "X-SPS-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
        },
        next: {
          cache: "no-store",
        },
      },
    });

    /**
     * Permissions without roles are public
     */
    if (!permissionsToRoles?.length) {
      return {
        ok: true,
      };
    }

    if (authorization?.includes("Bearer")) {
      const token = authorization.split(" ")[1];
      try {
        const decoded = await jwt.verify(token, SPS_RBAC_JWT_SECRET);

        if (!decoded.subject?.["id"]) {
          throw new HTTPException(401, {
            message: "No subject provided in the token",
          });
        }

        const subjectsToRoles = await subjectsToRolesApi.find({
          params: {
            filters: {
              and: [
                {
                  column: "subjectId",
                  method: "eq",
                  value: decoded.subject["id"],
                },
              ],
            },
          },
          options: {
            headers: {
              "X-SPS-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
            },
            next: {
              cache: "no-store",
            },
          },
        });

        if (!subjectsToRoles?.length) {
          throw new HTTPException(401, {
            message: "No roles found for this subject",
          });
        }

        const rolesToPermissions = await rolesToPermissionsApi.find({
          params: {
            filters: {
              and: [
                {
                  column: "roleId",
                  method: "eq",
                  value: subjectsToRoles[0].roleId,
                },
                {
                  column: "permissionId",
                  method: "eq",
                  value: permission.id,
                },
              ],
            },
          },
          options: {
            headers: {
              "X-SPS-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
            },
            next: {
              cache: "no-store",
            },
          },
        });

        if (!rolesToPermissions?.length) {
          throw new HTTPException(401, {
            message: "No permissions found for this role",
          });
        }

        return { ok: true };
      } catch (error) {
        throw new HTTPException(401, {
          message: error?.["message"] || "Invalid authorization token provided",
        });
      }
    }

    throw new HTTPException(401, {
      message: "Invalid authorization token provided",
    });
  }

  async logout(): Promise<any> {
    return {
      ok: true,
    };
  }

  async providers(props: ILoginAndPasswordDTO): Promise<any> {
    if (props.provider === "login_and_password") {
      return this.loginAndPassowrd(props);
    }

    throw new HTTPException(400, {
      message: "Invalid provider",
    });
  }

  async loginAndPassowrd(props: ILoginAndPasswordDTO): Promise<any> {
    if (!SPS_RBAC_SECRET_KEY) {
      throw new Error("SPS_RBAC_SECRET_KEY is not defined in the service");
    }

    if (!SPS_RBAC_JWT_SECRET) {
      throw new Error("SPS_RBAC_JWT_SECRET is not defined in the service");
    }

    const identities = await identityApi.find({
      params: {
        filters: {
          and: [
            {
              column: "email",
              method: "eq",
              value: props.data.login,
            },
            {
              column: "password",
              method: "eq",
              value: props.data.password,
            },
          ],
        },
      },
      options: {
        headers: {
          "X-SPS-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
        },
        next: {
          cache: "no-store",
        },
      },
    });

    if (!identities?.length) {
      throw new Error("Invalid credentials");
    }

    if (identities.length > 1) {
      throw new Error("Multiple identities found");
    }

    const identity = identities[0];

    const subjectsToIdentities = await subjectsToIdentitiesApi.find({
      params: {
        filters: {
          and: [
            {
              column: "identityId",
              method: "eq",
              value: identity.id,
            },
          ],
        },
      },
      options: {
        headers: {
          "X-SPS-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
        },
        next: {
          cache: "no-store",
        },
      },
    });

    if (!subjectsToIdentities?.length) {
      throw new Error(
        "No authentications subjects associated with this identity",
      );
    }

    const subject = await subjectApi.findById({
      id: subjectsToIdentities[0].subjectId,
      options: {
        headers: {
          "X-SPS-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
        },
        next: {
          cache: "no-store",
        },
      },
    });

    if (!subject) {
      throw new Error("No subject found");
    }

    const jwtToken = await jwt.sign(
      {
        exp:
          Math.floor(Date.now() / 1000) +
          SPS_RBAC_JWT_TOKEN_LIFETIME_IN_SECONDS,
        iat: Math.floor(Date.now() / 1000),
        subject: {
          id: subject.id,
        },
      },
      SPS_RBAC_JWT_SECRET,
    );

    const refreshToken = await jwt.sign(
      {
        exp:
          Math.floor(Date.now() / 1000) +
          SPS_RBAC_JWT_REFRESH_TOKEN_LIFETIME_IN_SECONDS,
        iat: Math.floor(Date.now() / 1000),
        subject: {
          id: subject.id,
        },
      },
      SPS_RBAC_JWT_SECRET,
    );

    return { jwt: jwtToken, refresh: refreshToken };
  }
}
