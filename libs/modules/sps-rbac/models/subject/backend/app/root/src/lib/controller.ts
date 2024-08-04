import "reflect-metadata";
import { inject, injectable } from "inversify";
import { DI, RESTController } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-rbac/models/subject/backend/repository/database";
import { Service } from "./service";
import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import * as jwt from "hono/jwt";
import { SPS_RBAC_JWT_SECRET } from "@sps/shared-utils";
import { authorization } from "@sps/sps-backend-utils";

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
        path: "/me",
        handler: this.me,
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

  async me(c: Context, next: any): Promise<Response> {
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

    if (!SPS_RBAC_JWT_SECRET) {
      throw new HTTPException(500, {
        message: "JWT secret not provided",
      });
    }

    try {
      const decoded = await jwt.verify(token, SPS_RBAC_JWT_SECRET);

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
}
