import { Context } from "hono";
import { BlankInput, Next } from "hono/types";
import { MiddlewaresGeneric } from "@sps/shared-backend-api";
import { model } from "@sps/sps-host/models/page/backend/model/root";

/**
 * Return parameter of url for page with schema
 * /route/[sps-website-builder.slide.id]/widgets/[startup.widget.id]
 *
 * passed
 * url: /route/0516903c-de50-4242-9cee-7759e45c2aee/widgets/967b7cb1-5409-43ad-b2a6-8773ed1455f3
 * segment: startup.widget.id
 * param: id
 * return 967b7cb1-5409-43ad-b2a6-8773ed1455f3
 */
export const handler = async (
  c: Context<MiddlewaresGeneric, string, BlankInput>,
  next: Next,
) => {
  const queryUrl = c.req.query("url");

  if (!queryUrl) {
    throw new Error("Query url is required");
  }

  const sanitizedUrl = queryUrl?.split("?")[0];
  const segment = c.req.query("segment");

  if (!segment) {
    throw new Error("Query segment is required");
  }

  const segmentValue = await model.services.urlSegmentValue({
    url: sanitizedUrl,
    segment,
  });

  return c.json({
    data: segmentValue,
  });
};
