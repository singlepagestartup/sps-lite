import { Context } from "hono";
import { BlankInput, Next } from "hono/types";
import { MiddlewaresGeneric } from "@sps/shared-backend-api";
import { model } from "@sps/sps-host/models/page/backend/model/root";

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
  const urls = await model.services.urls();

  return c.json({
    data: { urls },
  });
};
