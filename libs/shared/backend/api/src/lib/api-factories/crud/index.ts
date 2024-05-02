import { Env, Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { factory as crudModelFactory } from "../../model-factories/crud";
import {
  checkIsFormDataExists,
  checkIsStringFormDataBodyHasData,
} from "../../middlewares";

interface IBaseFactoryParams {
  app: Hono<Env, any, any>;
  model: ReturnType<typeof crudModelFactory>;
}

export const factory = (params: IBaseFactoryParams) => {
  const { app, model } = params;

  app.post("/", async (c, next) => {
    const body = await c.req.parseBody();

    if (typeof body["data"] !== "string") {
      return next();
    }

    const data = JSON.parse(body["data"]);

    try {
      const entity = await model.create({ data });

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
  });

  app.get("/", async (c) => {
    try {
      const data = await model.find();

      return c.json({
        data,
      });
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
  });

  app.get("/:uuid", async (c) => {
    const uuid = c.req.param("uuid");

    if (!uuid) {
      throw new HTTPException(400, {
        message: "Invalid id",
      });
    }

    const data = await model.findById({ id: uuid });

    if (!data || !Object.keys(data).length) {
      return c.json(
        {
          message: "Not found",
        },
        404,
      );
    }

    return c.json({
      data,
    });
  });

  app.delete("/:uuid", async (c) => {
    const uuid = c.req.param("uuid");

    if (!uuid) {
      throw new HTTPException(400, {
        message: "Invalid id",
      });
    }

    const data = await model.delete({ id: uuid });

    return c.json({
      data,
    });
  });

  app.patch("/:uuid", async (c) => {
    try {
      const uuid = c.req.param("uuid");
      const body = await c.req.parseBody();

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

      if (typeof body["data"] !== "string") {
        return c.json(
          {
            message: "Invalid body",
          },
          {
            status: 400,
          },
        );
      }

      const data = JSON.parse(body["data"]);

      const entity = await model.update({ id: uuid, data });

      return c.json({
        data: entity,
      });
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
  });
};
