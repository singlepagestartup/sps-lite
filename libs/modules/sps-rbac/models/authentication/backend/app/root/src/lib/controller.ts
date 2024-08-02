import "reflect-metadata";
import { inject, injectable } from "inversify";
import { DI, RESTController } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-rbac/models/authentication/backend/repository/database";
import { Context } from "hono";
import { IIsAllowedDTO, Service } from "./service";
import { HTTPException } from "hono/http-exception";
import QueryString from "qs";
import { api as roleApi } from "@sps/sps-rbac/models/role/sdk/server";

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
        path: "/is-authorized",
        handler: this.isAuthorized,
      },
      {
        method: "GET",
        path: "/logout",
        handler: this.logout,
      },
      {
        method: "POST",
        path: "/registration/:provider",
        handler: this.registraion,
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

  async isAuthorized(c: Context, next: any): Promise<Response> {
    try {
      const secretKey = c.req.header("X-SPS-RBAC-SECRET-KEY");

      if (secretKey && secretKey !== process.env["SPS_RBAC_SECRET_KEY"]) {
        throw new HTTPException(401, {
          message: "Unauthorized",
        });
      }

      if (secretKey && secretKey === process.env["SPS_RBAC_SECRET_KEY"]) {
        return c.json({
          data: {
            message: "policy granted.",
          },
        });
      }

      const params = c.req.query();
      const parsedQuery = QueryString.parse(params);

      if (!parsedQuery?.["access"]) {
        throw new HTTPException(400, {
          message: "No access params provided in query",
        });
      }

      if (!parsedQuery?.["access"]?.["type"]) {
        throw new HTTPException(400, {
          message: "No access type provided in query",
        });
      }

      if (
        !parsedQuery?.["access"]?.["params"] ||
        parsedQuery?.["access"]?.["params"].length === 0
      ) {
        throw new HTTPException(400, {
          message: "No access params provided in query",
        });
      }

      parsedQuery.access["params"]?.forEach((param: any) => {
        if (!param.route && !param.role) {
          throw new HTTPException(400, {
            message: "No route or role provided in query",
          });
        }

        if (param.route && !param.method) {
          throw new HTTPException(400, {
            message: "No method provided in query",
          });
        }
      });

      const authorization = c.req.header("Authorization");

      const isAuthorizedProps = {
        access: {
          type: parsedQuery.access["type"] as IIsAllowedDTO["access"]["type"],
          params: parsedQuery.access[
            "params"
          ] as IIsAllowedDTO["access"]["params"],
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

  async logout(c: Context, next: any): Promise<Response> {
    try {
      const data = await this.service.logout();

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

  async authentication(c: Context, next: any): Promise<Response> {
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
        type: "authentication",
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
