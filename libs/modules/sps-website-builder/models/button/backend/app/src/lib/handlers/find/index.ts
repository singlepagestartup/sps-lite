import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-website-builder-models-button-backend-model";
import { Context, Env } from "hono";
import { BlankInput, Next } from "hono/types";
import QueryString from "qs";

export const handler = async (
  c: Context<Env, string, BlankInput>,
  next: Next,
) => {
  try {
    const query = c.req.query();
    const serviceParams: { populate: any; filters: any } = {
      populate: undefined,
      filters: undefined,
    };

    if (query) {
      const { populate, filters } = QueryString.parse(query);

      serviceParams.populate = populate;
      serviceParams.filters = filters;
    }

    const data = await model.services.find({ params: serviceParams });

    return c.json({
      data,
    });
  } catch (error: any) {
    throw new HTTPException(400, {
      message: error.message,
    });
  }
};
