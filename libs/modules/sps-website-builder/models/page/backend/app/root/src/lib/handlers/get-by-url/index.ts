import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-website-builder-models-page-backend-model";
import { Context, Env } from "hono";
import { BlankInput, Next } from "hono/types";
import { services } from "../../services";

export const handler = async (
  c: Context<Env, string, BlankInput>,
  next: Next,
) => {
  let query = c.req.query("url");

  // Vercel delete ?url=/
  if (!query) {
    query = "/";
  }

  if (query === "favicon.ico") {
    return c.json({
      ok: true,
    });
  }

  const filledPages = await services.getFilledPages();

  const targetPage = filledPages.find((page) => {
    const cuttedLastSlash = query !== "/" ? query?.replace(/\/$/, "") : query;

    if (
      page.urls.find((urlParam) => {
        if (urlParam.url === cuttedLastSlash) {
          return true;
        }

        return false;
      })
    ) {
      return true;
    }

    return false;
  });

  return c.json({
    data: targetPage,
  });
};
