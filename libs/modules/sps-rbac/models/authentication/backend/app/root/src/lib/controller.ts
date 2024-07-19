import "reflect-metadata";
import { inject, injectable } from "inversify";
import { DI, RESTController } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-rbac/models/authentication/backend/schema/table";
import { Context } from "hono";
import { Service } from "./service";
import { HTTPException } from "hono/http-exception";

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
        path: "/is-authenticatated",
        handler: this.isAuthenticatated,
      },
      {
        method: "POST",
        path: "/logout",
        handler: this.logout,
      },
      {
        method: "POST",
        path: "/providers/:provider",
        handler: this.providers,
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

  async isAuthenticatated(c: Context, next: any): Promise<Response> {
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
            message: "Permission granted.",
          },
        });
      }

      const session = c.var.session;

      if (!session) {
        if (!session) {
          throw new HTTPException(401, {
            message: "Unauthorized",
          });
        }
      }

      const data = await this.service.isAuthenticatated();

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
      const session = c.var.session;

      if (!session) {
        if (!session) {
          throw new HTTPException(401, {
            message: "Unauthorized",
          });
        }
      }

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

  async providers(c: Context, next: any): Promise<Response> {
    const body = await c.req.parseBody();

    if (typeof body["data"] !== "string") {
      return next();
    }

    const data = JSON.parse(body["data"]);

    try {
      const session = c.var.session;

      if (!session) {
        throw new HTTPException(401, {
          message: "No session provided",
        });
      }

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

      const entity = await this.service.providers();

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
