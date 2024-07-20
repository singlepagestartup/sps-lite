import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-website-builder/models/buttons-array/backend/model/root";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";
import QueryString from "qs";

export const handler = async (
  c: Context<any, `${string}/:uuid`, BlankInput>,
  next: Next,
) => {
  const uuid = c.req.param("uuid");
  const query = c.req.query();
  const serviceParams: Partial<{ populate: any }> = {};

  if (query) {
    const { populate } = QueryString.parse(query);

    serviceParams.populate = populate;
  }

  if (!uuid) {
    throw new HTTPException(400, {
      message: "Invalid id",
    });
  }

  const data = await model.services.findById({
    id: uuid,
    params: serviceParams,
  });

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
};
