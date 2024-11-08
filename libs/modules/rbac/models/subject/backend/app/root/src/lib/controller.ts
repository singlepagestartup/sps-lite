import "reflect-metadata";
import { inject, injectable } from "inversify";
import { DI, RESTController } from "@sps/shared-backend-api";
import { Table } from "@sps/rbac/models/subject/backend/repository/database";
import { Service } from "./service";
import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import QueryString from "qs";
import { setCookie, deleteCookie, getCookie } from "hono/cookie";
import {
  RBAC_JWT_REFRESH_TOKEN_LIFETIME_IN_SECONDS,
  RBAC_JWT_SECRET,
  RBAC_JWT_TOKEN_LIFETIME_IN_SECONDS,
  RBAC_SECRET_KEY,
} from "@sps/shared-utils";
import * as jwt from "hono/jwt";
import { authorization } from "@sps/sps-backend-utils";
import { api as identityApi } from "@sps/rbac/models/identity/sdk/server";
import { IModel as IIdentity } from "@sps/rbac/models/identity/sdk/model";
import { api as subjectsToIdentitiesApi } from "@sps/rbac/relations/subjects-to-identities/sdk/server";

@injectable()
export class Controller extends RESTController<(typeof Table)["$inferSelect"]> {
  service: Service;

  constructor(@inject(DI.IService) service: Service) {
    super(service);
    this.service = service;
    this.bindRoutes([
      {
        method: "GET",
        path: "/",
        handler: this.find,
      },
      {
        method: "GET",
        path: "/dump",
        handler: this.dump,
      },
      {
        method: "GET",
        path: "/is-authorized",
        handler: this.isAuthorized,
      },
      {
        method: "GET",
        path: "/me",
        handler: this.me,
      },
      {
        method: "GET",
        path: "/logout",
        handler: this.logout,
      },
      {
        method: "GET",
        path: "/init",
        handler: this.init,
      },
      {
        method: "POST",
        path: "/registration/:provider",
        handler: this.registraion,
      },
      {
        method: "POST",
        path: "/authentication/refresh",
        handler: this.refresh,
      },
      {
        method: "POST",
        path: "/authentication/:provider",
        handler: this.authentication,
      },
      {
        method: "GET",
        path: "/:uuid",
        handler: this.findById,
      },
      {
        method: "GET",
        path: "/:uuid/identities",
        handler: this.identities,
      },
      {
        method: "POST",
        path: "/",
        handler: this.create,
      },
      {
        method: "PATCH",
        path: "/:uuid",
        handler: this.update,
      },
      {
        method: "DELETE",
        path: "/:uuid",
        handler: this.delete,
      },
    ]);
  }

  async me(c: Context, next: any): Promise<Response> {
    const token = authorization(c);

    if (!token) {
      return c.json(
        {
          data: null,
        },
        {
          status: 200,
        },
      );
    }

    if (!RBAC_JWT_SECRET) {
      throw new HTTPException(500, {
        message: "JWT secret not provided",
      });
    }

    try {
      const decoded = await jwt.verify(token, RBAC_JWT_SECRET);

      if (!decoded.subject?.["id"]) {
        throw new HTTPException(401, {
          message: "No subject provided in the token",
        });
      }

      const entity = await this.service.findById({
        id: decoded.subject?.["id"],
      });

      return c.json({
        data: entity,
      });
    } catch (error) {
      throw new HTTPException(401, {
        message: error?.["message"] || "Invalid authorization token provided",
      });
    }
  }

  async isAuthorized(c: Context, next: any): Promise<Response> {
    try {
      const secretKeyHeaders = c.req.header("X-RBAC-SECRET-KEY");
      const secretKeyCookie = getCookie(c, "rbac.secret-key");
      const secretKey = secretKeyHeaders || secretKeyCookie;

      if (secretKey && secretKey !== process.env["RBAC_SECRET_KEY"]) {
        throw new HTTPException(401, {
          message: "Unauthorized",
        });
      }

      if (secretKey && secretKey === process.env["RBAC_SECRET_KEY"]) {
        return c.json({
          data: {
            message: "action granted.",
          },
        });
      }

      const params = c.req.query();
      const parsedQuery = QueryString.parse(params);

      if (!parsedQuery?.["action"]) {
        throw new HTTPException(400, {
          message: "No action provided in query",
        });
      }

      if (!parsedQuery?.["action"]?.["route"]) {
        throw new HTTPException(400, {
          message: "No route provided in 'action' query",
        });
      }

      if (!parsedQuery?.["action"]?.["method"]) {
        throw new HTTPException(400, {
          message: "No method provided in 'action' query",
        });
      }

      const authorizationCookie = getCookie(c, "rbac.subject.jwt");
      const authorizationHeader = c.req.header("Authorization");
      const authorization =
        authorizationCookie || authorizationHeader?.replace("Bearer ", "");

      const isAuthorizedProps = {
        action: {
          route: parsedQuery["action"]["route"],
          method: parsedQuery["action"]["method"],
          type: parsedQuery["action"]["type"] || "HTTP",
        },
        authorization: {
          value: authorization,
        },
      };

      const data = await this.service.isAuthorized(isAuthorizedProps);

      return c.json({
        data,
      });
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
  }

  async identities(c: Context, next: any): Promise<Response> {
    if (!RBAC_SECRET_KEY) {
      throw new HTTPException(400, {
        message: "RBAC secret key not found",
      });
    }

    const uuid = c.req.param("uuid");

    if (!uuid) {
      throw new HTTPException(400, {
        message: "Invalid id",
      });
    }

    const params = c.req.query();
    const parsedQuery = QueryString.parse(params);

    const subjectsToIdentities = await subjectsToIdentitiesApi.find({
      params: {
        filters: {
          and: [
            {
              column: "subjectId",
              method: "eq",
              value: uuid,
            },
          ],
        },
      },
      options: {
        headers: {
          "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
        },
        next: {
          cache: "no-store",
        },
      },
    });

    if (!subjectsToIdentities) {
      throw new HTTPException(404, {
        message: "No subjects to identities found",
      });
    }

    const queryFilters = parsedQuery.filters?.["and"] || [];

    const identities = await identityApi.find({
      params: {
        filters: {
          and: [
            ...queryFilters,
            {
              column: "id",
              method: "inArray",
              value: subjectsToIdentities.map((item) => item.identityId),
            },
          ],
        },
      },
      options: {
        headers: {
          "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
        },
        next: {
          cache: "no-store",
        },
      },
    });

    return c.json({
      data: identities,
    });
  }

  async logout(c: Context, next: any): Promise<Response> {
    try {
      const data = await this.service.logout();

      deleteCookie(c, "rbac.subject.jwt");

      return c.json({
        data,
      });
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
  }

  async registraion(c: Context, next: any): Promise<Response> {
    if (!RBAC_JWT_SECRET) {
      throw new HTTPException(400, {
        message: "RBAC_JWT_SECRET not set",
      });
    }

    const body = await c.req.parseBody();

    if (typeof body["data"] !== "string") {
      return next();
    }

    const data = JSON.parse(body["data"]);

    try {
      const provider = c.req.param("provider").replaceAll("-", "_");

      if (!provider) {
        throw new HTTPException(400, {
          message: "No provider provided",
        });
      }

      if (provider !== "login_and_password") {
        throw new HTTPException(400, {
          message: "Invalid provider",
        });
      }

      const entity = await this.service.providers({
        data,
        provider,
        type: "registration",
        roles: data.roles || [],
      });

      const decodedJwt = await jwt.verify(entity.jwt, RBAC_JWT_SECRET);

      if (!decodedJwt.exp) {
        throw new HTTPException(400, {
          message: "Invalid token issued",
        });
      }

      setCookie(c, "rbac.subject.jwt", entity.jwt, {
        path: "/",
        secure: true,
        httpOnly: false,
        expires: new Date(decodedJwt.exp),
        sameSite: "Strict",
      });

      return c.json(
        {
          data: entity,
        },
        201,
      );
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
  }

  async init(c: Context, next: any): Promise<Response> {
    if (!RBAC_SECRET_KEY) {
      throw new HTTPException(400, {
        message: "RBAC_SECRET_KEY not set",
      });
    }
    if (!RBAC_JWT_SECRET) {
      throw new HTTPException(400, {
        message: "RBAC_JWT_SECRET not set",
      });
    }

    if (!RBAC_JWT_REFRESH_TOKEN_LIFETIME_IN_SECONDS) {
      throw new HTTPException(400, {
        message: "RBAC_JWT_REFRESH_TOKEN_LIFETIME_IN_SECONDS not set",
      });
    }

    try {
      this.service.clearAnonymusSessions();

      const entity = await this.service.create({
        data: {},
      });

      const jwtToken = await jwt.sign(
        {
          exp:
            Math.floor(Date.now() / 1000) + RBAC_JWT_TOKEN_LIFETIME_IN_SECONDS,
          iat: Math.floor(Date.now() / 1000),
          subject: {
            id: entity.id,
          },
        },
        RBAC_JWT_SECRET,
      );

      const refreshToken = await jwt.sign(
        {
          exp:
            Math.floor(Date.now() / 1000) +
            RBAC_JWT_REFRESH_TOKEN_LIFETIME_IN_SECONDS,
          iat: Math.floor(Date.now() / 1000),
          subject: {
            id: entity.id,
          },
        },
        RBAC_JWT_SECRET,
      );

      const decodedJwt = await jwt.verify(jwtToken, RBAC_JWT_SECRET);

      if (!decodedJwt.exp) {
        throw new HTTPException(400, {
          message: "Invalid token issued",
        });
      }

      setCookie(c, "rbac.subject.jwt", jwtToken, {
        path: "/",
        secure: true,
        httpOnly: false,
        expires: new Date(decodedJwt.exp),
        sameSite: "Strict",
      });

      return c.json(
        {
          data: {
            jwt: jwtToken,
            refresh: refreshToken,
          },
        },
        201,
      );
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
  }

  async authentication(c: Context, next: any): Promise<Response> {
    if (!RBAC_JWT_SECRET) {
      throw new HTTPException(400, {
        message: "RBAC_JWT_SECRET not set",
      });
    }

    if (!RBAC_JWT_TOKEN_LIFETIME_IN_SECONDS) {
      throw new HTTPException(400, {
        message: "RBAC_JWT_TOKEN_LIFETIME_IN_SECONDS not set",
      });
    }

    const body = await c.req.parseBody();

    if (typeof body["data"] !== "string") {
      return next();
    }

    const data = JSON.parse(body["data"]);

    try {
      const provider = c.req.param("provider").replaceAll("-", "_");

      if (!provider) {
        throw new HTTPException(400, {
          message: "No provider provided",
        });
      }

      if (
        provider !== "login_and_password" &&
        provider !== "ethereum_virtual_machine"
      ) {
        throw new HTTPException(400, {
          message: "Invalid provider",
        });
      }

      const entity = await this.service.providers({
        data,
        provider,
        type: "authentication",
      });

      const decoded = await jwt.verify(entity.jwt, RBAC_JWT_SECRET);

      if (!decoded.exp) {
        throw new HTTPException(400, {
          message: "Invalid token issued",
        });
      }

      setCookie(c, "rbac.subject.jwt", entity.jwt, {
        path: "/",
        secure: true,
        httpOnly: false,
        maxAge: RBAC_JWT_TOKEN_LIFETIME_IN_SECONDS,
        expires: new Date(decoded.exp),
        sameSite: "Strict",
      });

      return c.json(
        {
          data: entity,
        },
        201,
      );
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
  }

  async refresh(c: Context, next: any): Promise<Response> {
    if (!RBAC_JWT_SECRET) {
      throw new HTTPException(400, {
        message: "RBAC_JWT_SECRET not set",
      });
    }

    if (!RBAC_JWT_TOKEN_LIFETIME_IN_SECONDS) {
      throw new HTTPException(400, {
        message: "RBAC_JWT_TOKEN_LIFETIME_IN_SECONDS not set",
      });
    }

    const token = authorization(c);

    if (!token) {
      return c.json(
        {
          data: null,
        },
        {
          status: 401,
        },
      );
    }

    const body = await c.req.parseBody();

    if (typeof body["data"] !== "string") {
      return next();
    }

    const data = JSON.parse(body["data"]);

    if (!data["refresh"]) {
      throw new HTTPException(400, {
        message: "No refresh token provided",
      });
    }

    try {
      const entity = await this.service.refresh({
        refresh: data["refresh"],
      });

      const decoded = await jwt.verify(entity.jwt, RBAC_JWT_SECRET);

      if (!decoded.exp) {
        throw new HTTPException(400, {
          message: "Invalid token issued",
        });
      }

      setCookie(c, "rbac.subject.jwt", entity.jwt, {
        path: "/",
        secure: true,
        httpOnly: false,
        maxAge: RBAC_JWT_TOKEN_LIFETIME_IN_SECONDS,
        expires: new Date(decoded.exp),
        sameSite: "Strict",
      });

      return c.json(
        {
          data: entity,
        },
        201,
      );
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
  }
}
