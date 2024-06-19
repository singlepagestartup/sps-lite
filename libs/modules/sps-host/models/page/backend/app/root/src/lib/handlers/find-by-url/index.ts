import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-host-models-page-backend-model";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";
import { MiddlewaresGeneric } from "@sps/shared-backend-api";

export const handler = async (
  c: Context<MiddlewaresGeneric, string, BlankInput>,
  next: Next,
) => {
  const queryUrl = c.req.query("url");
  const sanitizedUrl = queryUrl?.split("?")[0];
  let url = sanitizedUrl;

  // Vercel changes url "/" to "index" so we need to change it back
  if (!url || url === "/index") {
    url = "/";
  }

  if (url === "favicon.ico") {
    return c.json({
      ok: true,
    });
  }

  const entity = await model.services.findByUrl({
    url,
    params: c.var.parsedQuery,
  });

  return c.json({
    data: entity,
  });
};
