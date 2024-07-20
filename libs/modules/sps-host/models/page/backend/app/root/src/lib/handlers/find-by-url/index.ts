import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-host/models/page/backend/model/root";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";

export const handler = async (
  c: Context<any, string, BlankInput>,
  next: Next,
) => {
  const queryUrl = c.req.query("url");
  const sanitizedUrl = queryUrl?.split("?")[0];
  let url = sanitizedUrl;

  if (url === "/favicon.ico") {
    return c.json({});
  }

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
