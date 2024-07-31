import "reflect-metadata";
import { inject, injectable } from "inversify";
import { CRUDService, DI, type IRepository } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-rbac/models/authentication/backend/repository/database";
import { HTTPException } from "hono/http-exception";
import { api as identityApi } from "@sps/sps-rbac/models/identity/sdk/server";
import { api as roleApi } from "@sps/sps-rbac/models/role/sdk/server";
import { api as subjectApi } from "@sps/sps-rbac/models/subject/sdk/server";
import { api as permissionApi } from "@sps/sps-rbac/models/permission/sdk/server";
import { api as subjectsToRolesApi } from "@sps/sps-rbac/relations/subjects-to-roles/sdk/server";
import { IRelation as ISubjectsToRoles } from "@sps/sps-rbac/relations/subjects-to-roles/sdk/model";
import { api as subjectsToIdentitiesApi } from "@sps/sps-rbac/relations/subjects-to-identities/sdk/server";
import { api as rolesToPermissionsApi } from "@sps/sps-rbac/relations/roles-to-permissions/sdk/server";
import {
  SPS_RBAC_SECRET_KEY,
  SPS_RBAC_JWT_TOKEN_LIFETIME_IN_SECONDS,
  SPS_RBAC_JWT_SECRET,
  SPS_RBAC_JWT_REFRESH_TOKEN_LIFETIME_IN_SECONDS,
} from "@sps/shared-utils";
import * as jwt from "hono/jwt";
import bcrypt from "bcrypt";

export interface ILoginAndPassword {
  login: string;
  password: string;
}

export interface IRegistrationLoginAndPasswordDTO {
  type: "registration";
  roles: [{ uid: string }];
}

export interface IAuthenticationLoginAndPasswordDTO {
  type: "authentication";
}

export type ILoginAndPasswordDTO = { data: ILoginAndPassword } & (
  | IRegistrationLoginAndPasswordDTO
  | IAuthenticationLoginAndPasswordDTO
);

export type IAccessParams =
  | {
      method: string;
      route: string;
    }
  | {
      role: string;
    };

export type IIsAllowedDTO = {
  access: {
    type: "and" | "or";
    params: IAccessParams[];
  };
  authorization: {
    value?: string;
  };
};

@injectable()
export class Service extends CRUDService<(typeof Table)["$inferSelect"]> {
  constructor(@inject(DI.IRepository) repository: IRepository) {
    super(repository);
  }

  async isAuthorized(props: IIsAllowedDTO): Promise<any> {
    let authorized = false;

    if (!SPS_RBAC_JWT_SECRET) {
      throw new Error("SPS_RBAC_JWT_SECRET is not defined in the service");
    }

    if (!SPS_RBAC_SECRET_KEY) {
      throw new Error("SPS_RBAC_SECRET_KEY is not defined in the service");
    }

    const authorization = props.authorization.value;

    let subjectsToRoles: ISubjectsToRoles[] | undefined;

    if (authorization?.includes("Bearer")) {
      const token = authorization.split(" ")[1];
      try {
        const decoded = await jwt.verify(token, SPS_RBAC_JWT_SECRET);

        if (!decoded.subject?.["id"]) {
          throw new HTTPException(401, {
            message: "No subject provided in the token",
          });
        }

        subjectsToRoles = await subjectsToRolesApi.find({
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
      } catch (error) {
        throw new HTTPException(401, {
          message: error?.["message"] || "Invalid authorization token provided",
        });
      }
    }

    for (const accessParam of props.access.params) {
      if ("method" in accessParam && "route" in accessParam) {
        const permissions = await permissionApi.find({
          params: {
            filters: {
              and: [
                {
                  column: "method",
                  method: "eq",
                  value: accessParam.method,
                },
                {
                  column: "path",
                  method: "eq",
                  value: accessParam.route,
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
          continue;
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
          authorized = true;
        }

        if (subjectsToRoles?.length) {
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

          if (rolesToPermissions?.length) {
            authorized = true;
          }
        }
      } else {
        const roles = await roleApi.find({
          params: {
            filters: {
              and: [
                {
                  column: "uid",
                  method: "eq",
                  value: accessParam.role,
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
          continue;
        }

        const roleExists = roles?.find(
          (role) => role.id === subjectsToRoles[0].roleId,
        );

        if (roleExists) {
          authorized = true;
        }
      }
    }

    if (!authorized) {
      throw new HTTPException(401, {
        message: "Authorization error",
      });
    } else {
      return {
        ok: true,
      };
    }
  }

  async logout(): Promise<any> {
    return {
      ok: true,
    };
  }

  async providers(
    props: { provider: string } & ILoginAndPasswordDTO,
  ): Promise<any> {
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

    if (props.type === "registration") {
      const identities = await identityApi.find({
        params: {
          filters: {
            and: [
              {
                column: "email",
                method: "eq",
                value: props.data.login,
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

      if (identities?.length) {
        throw new Error("Identity already exists");
      }

      const salt = await bcrypt.genSalt(10);

      const saltedPassword = await bcrypt.hash(props.data.password, salt);

      const identity = await identityApi.create({
        data: {
          email: props.data.login,
          password: saltedPassword,
          salt,
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

      const subject = await subjectApi.create({
        data: {
          name: props.data.login,
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

      const subjectsToIdentities = await subjectsToIdentitiesApi.create({
        data: {
          identityId: identity.id,
          subjectId: subject.id,
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

      const rolesFilters = props.roles.length
        ? [
            {
              column: "uid",
              method: "in",
              value: props.roles?.map((role) => role.uid),
            },
          ]
        : [];

      const roles = await roleApi.find({
        params: {
          filters: {
            and: [
              ...rolesFilters,
              {
                column: "availableOnRegistration",
                method: "eq",
                value: "true",
              },
            ],
          },
        },
      });

      if (!roles?.length) {
        throw new Error("No roles found");
      }

      for (const role of roles) {
        const subjectsToRoles = await subjectsToRolesApi.create({
          data: {
            roleId: role.id,
            subjectId: subject.id,
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
      }
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

    if (!identity.salt) {
      throw new Error("No salt found for this identity");
    }

    const saltedPassword = await bcrypt.hash(
      props.data.password,
      identity.salt,
    );

    if (saltedPassword !== identity.password) {
      throw new Error("Invalid credentials");
    }

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
