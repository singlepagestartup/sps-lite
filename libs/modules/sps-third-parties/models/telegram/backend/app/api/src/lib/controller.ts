import "reflect-metadata";
import { inject, injectable } from "inversify";
import { DI, RESTController } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-third-parties/models/telegram/backend/repository/database";
import { Service } from "./service";
import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { Telegram } from "./telegam/Telegam";
import { Update } from "telegraf/types";

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
        path: "/:uuid",
        handler: this.findById,
      },
      {
        method: "GET",
        path: "/:uuid/start",
        handler: this.start,
      },
      {
        method: "GET",
        path: "/:uuid/stop",
        handler: this.stop,
      },
      {
        method: "POST",
        path: "/:uuid/send-message",
        handler: this.sendMessage,
      },
      {
        method: "POST",
        path: "/:uuid/webhook",
        handler: this.webhook,
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

  async start(c: Context, next: any): Promise<Response> {
    const query = c.req.query();

    if (!query?.["password"]) {
      throw new HTTPException(400, {
        message: "query password is required",
      });
    }

    const uuid = c.req.param("uuid");

    if (!uuid) {
      throw new HTTPException(400, {
        message: "Invalid id",
      });
    }

    const data = await this.service.findById({
      id: uuid,
    });

    if (!data?.token) {
      throw new HTTPException(400, {
        message: "Invalid token",
      });
    }

    const telegram = new Telegram({ token: data.token, id: uuid });
    await telegram.launch();

    return c.json({
      data: "telegram bot launched",
    });
  }

  async stop(c: Context, next: any): Promise<Response> {
    const query = c.req.query();

    if (!query?.["password"]) {
      throw new HTTPException(400, {
        message: "query password is required",
      });
    }

    const uuid = c.req.param("uuid");

    if (!uuid) {
      throw new HTTPException(400, {
        message: "Invalid id",
      });
    }

    const data = await this.service.findById({
      id: uuid,
    });

    if (!data?.token) {
      throw new HTTPException(400, {
        message: "Invalid token",
      });
    }

    const telegram = new Telegram({ token: data.token, id: uuid });
    await telegram.stop();

    return c.json({
      data: "telegram bot launched",
    });
  }

  async sendMessage(c: Context, next: any): Promise<Response> {
    const uuid = c.req.param("uuid");
    const body = await c.req.parseBody();

    if (typeof body["data"] !== "string") {
      throw new HTTPException(400, {
        message: "Invalid data",
      });
    }

    const data = JSON.parse(body["data"]);

    if (!data.message) {
      return c.json(
        {
          message: "No data.message provided in data",
        },
        {
          status: 400,
        },
      );
    }

    if (!data.to) {
      return c.json(
        {
          message: "No data.to provided in data",
        },
        {
          status: 400,
        },
      );
    }

    if (typeof data.message !== "string") {
      return c.json(
        {
          message: "Invalid data.message, must be a string",
        },
        {
          status: 400,
        },
      );
    }

    if (typeof data.to !== "string") {
      return c.json(
        {
          message: "Invalid data.to, must be a string",
        },
        {
          status: 400,
        },
      );
    }

    if (!uuid) {
      return c.json(
        {
          message: "Invalid id",
        },
        {
          status: 400,
        },
      );
    }

    const entity = await this.service.findById({
      id: uuid,
    });

    if (!entity?.token) {
      throw new HTTPException(400, {
        message: "Invalid token",
      });
    }

    await this.service.sendMessage({
      id: uuid,
      message: data.message,
      to: data.to,
    });

    return c.json({
      data: {
        ok: true,
      },
    });
  }

  async webhook(c: Context, next: any): Promise<Response> {
    const uuid = c.req.param("uuid");

    if (!uuid) {
      return c.json(
        {
          message: "Invalid id",
        },
        {
          status: 400,
        },
      );
    }

    const data = await this.service.findById({
      id: uuid,
    });

    const json = c.var.parsedJson;

    if (!data?.token) {
      throw new HTTPException(400, {
        message: "Invalid token",
      });
    }

    const telegram = new Telegram({ token: data.token, id: uuid });
    await telegram.bot.handleUpdate(json as Update);

    return c.json({
      data: {
        ok: true,
      },
    });
  }
}
