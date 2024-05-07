import { HTTPException } from "hono/http-exception";
import { services } from "../../services";
import { Context, Env } from "hono";
import { BlankInput, Next } from "hono/types";

export const handler = async (
  c: Context<Env, string, BlankInput>,
  next: Next,
) => {
  const query = c.req.query("url");

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
