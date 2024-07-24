import { Hono } from "hono";
import { handle } from "hono/vercel";
import { createMiddleware } from "hono/factory";
import { type NextRequest } from "next/server";
import { app as spsHostApp } from "@sps/sps-host/backend/app/root";
import { app as spsWebsiteBuilderApp } from "@sps/sps-website-builder/backend/app/root";
import { app as spsFileStorageApp } from "@sps/sps-file-storage/backend/app/root";
import { app as spsRbacApp } from "@sps/sps-rbac/backend/app/root";
import { app as startupApp } from "@sps/startup/backend/app/root";
import { app as spsBilling } from "@sps/sps-billing/backend/app/root";
import { app as spsBroadcast } from "@sps/sps-broadcast/backend/app/root";
import { app as spsCrm } from "@sps/sps-crm/backend/app/root";
import { app as spsThirdParties } from "@sps/sps-third-parties/backend/app/root";
import { app as spsNotification } from "@sps/sps-notification/backend/app/root";
import { chain as middlewaresChain } from "./middlewares/chain";
import { ExceptionFilter } from "@sps/shared-backend-api";
import { ErrorHandler } from "hono/types";

export const dynamic = "force-dynamic";

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

app.mount("/sps-host", spsHostApp.hono.fetch);
app.route("/sps-broadcast", spsBroadcast as any);
app.mount("/sps-website-builder", spsWebsiteBuilderApp.hono.fetch);
app.route("/sps-file-storage", spsFileStorageApp as any);
app.mount("/sps-rbac", spsRbacApp.hono.fetch);
app.route("/sps-billing", spsBilling as any);
app.route("/sps-third-parties", spsThirdParties as any);
app.route("/sps-crm", spsCrm as any);
app.route("/sps-notification", spsNotification as any);
app.route("/startup", startupApp as any);

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
