import { Context } from "hono";
import { BlankInput, Next } from "hono/types";
import { services } from "../../services";
import { MiddlewaresGeneric } from "@sps/shared-backend-api";

/**
 * Only one level of nesting is supported
 * /route/[sps-website-builder.slide.id]
 *
 * Multiple levels of nesting are not supported, for now
 * /route/[sps-website-builder.category.id]/[sps-website-builder.slide.id]
 */
export const handler = async (
  c: Context<MiddlewaresGeneric, string, BlankInput>,
  next: Next,
) => {
  const filledPages = await services.getFilledPages();
  const urls = filledPages.map((page) => page.urls).flat();

  return c.json({
    data: { urls },
  });
};
