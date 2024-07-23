import "reflect-metadata";
import { Context } from "hono";
import { StatusCode } from "hono/utils/http-status";
import { inject, injectable } from "inversify";
import {
  FindHandler,
  FindByIdHandler,
  CreateHandler,
  UpdateHandler,
  DeleteHandler,
  DumpHandler,
} from "./handler";
import { type IService } from "../../service";
import { DI } from "../../di/constants";
import { IController } from "../interface";

@injectable()
export class Controller<DTO extends Record<string, unknown>>
  implements IController<DTO>
{
  routes: IController<DTO>["routes"] = [];
  service: IService<DTO>;

  constructor(@inject(DI.IService) service: IService<DTO>) {
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

  public send(
    c: Context<any, any, any>,
    code: StatusCode,
    data: DTO,
  ): Response | Promise<Response> {
    return c.json(
      {
        data,
      },
      code,
    );
  }

  public ok<T>(
    c: Context<any, any, any>,
    data: DTO,
  ): Response | Promise<Response> {
    return this.send(c, 200, data);
  }

  public async find(c: Context, next: any): Promise<Response> {
    const handler = new FindHandler<Context, DTO>(this.service);
    return handler.execute(c, next);
  }

  public async findById(c: Context, next: any): Promise<Response> {
    const handler = new FindByIdHandler<Context, DTO>(this.service);
    return handler.execute(c, next);
  }

  public async create(c: Context, next: any): Promise<Response> {
    const handler = new CreateHandler<Context, DTO>(this.service);
    return handler.execute(c, next);
  }

  public async update(c: Context, next: any): Promise<Response> {
    const handler = new UpdateHandler<Context, DTO>(this.service);
    return handler.execute(c, next);
  }

  public async delete(c: Context, next: any): Promise<Response> {
    const handler = new DeleteHandler<Context, DTO>(this.service);
    return handler.execute(c, next);
  }

  public async dump(c: Context, next: any): Promise<Response> {
    const handler = new DumpHandler<Context, DTO>(this.service);
    return handler.execute(c, next);
  }

  protected bindRoutes(routes: IController<DTO>["routes"]) {
    this.routes = [];

    for (const route of routes) {
      const handler = route.handler.bind(this);
      this.routes.push({
        ...route,
        handler,
      });
    }
  }
}
