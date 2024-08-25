import { Hono } from "hono";
import { handle } from "hono/vercel";
import { createMiddleware } from "hono/factory";
import { type NextRequest } from "next/server";
import { app as hostApp } from "@sps/host/backend/app/api";
import { app as websiteBuilderApp } from "@sps/website-builder/backend/app/api";
import { app as fileStorageApp } from "@sps/file-storage/backend/app/api";
import { app as rbacApp } from "@sps/rbac/backend/app/api";
import { app as startupApp } from "@sps/startup/backend/app/api";
import { app as billingApp } from "@sps/billing/backend/app/api";
import { app as broadcastApp } from "@sps/broadcast/backend/app/api";
import { app as crmApp } from "@sps/crm/backend/app/api";
import { app as ecommerceApp } from "@sps/ecommerce/backend/app/api";
import { app as spsThirdParties } from "@sps/sps-third-parties/backend/app/api";
import { app as notificationApp } from "@sps/notification/backend/app/api";
import { chain as middlewaresChain } from "./middlewares/chain";
import { ExceptionFilter } from "@sps/shared-backend-api";
import { ErrorHandler } from "hono/types";
import { AWS } from "@sps/shared-third-parties";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const app = new Hono<any, any, any>().basePath("/api");

app.onError(new ExceptionFilter().catch as unknown as ErrorHandler<any>);
middlewaresChain(app);

// app.use(
//   createMiddleware(async (c, next) => {
//     const path = c.req.path;
//     console.log("Host App Middleware", path);
//     await next();
//   }),
// );

app.mount("/host", hostApp.hono.fetch);
app.mount("/broadcast", broadcastApp.hono.fetch);
app.mount("/website-builder", websiteBuilderApp.hono.fetch);
app.mount("/file-storage", fileStorageApp.hono.fetch);
app.mount("/rbac", rbacApp.hono.fetch);
app.mount("/billing", billingApp.hono.fetch);
app.mount("/sps-third-parties", spsThirdParties.hono.fetch);
app.mount("/crm", crmApp.hono.fetch);
app.mount("/ecommerce", ecommerceApp.hono.fetch);
app.mount("/notification", notificationApp.hono.fetch);
app.mount("/startup", startupApp.hono.fetch);
app.post("/aws-ses", async (c) => {
  const to = c.req.query("to");

  console.log(`🚀 ~ app.post ~ to:`, to);

  if (!to) {
    return c.json({ message: "Please provide email address" });
  }

  const aws = new AWS();
  await aws.ses.sendEmail({
    to,
    subject: "Test email from hono",
    html: "<h1>Test email from hono</h1>",
    from: "no-reply@mail.singlepagestartup.com",
  });

  return c.json({ message: "Hello AWS SES" });
});

export async function POST(request: NextRequest, params: any) {
  return handle(app)(request, params);
}
export async function GET(request: NextRequest, params: any) {
  return handle(app)(request, params);
}
export async function PATCH(request: NextRequest, params: any) {
  return handle(app)(request, params);
}
export async function DELETE(request: NextRequest, params: any) {
  return handle(app)(request, params);
}
