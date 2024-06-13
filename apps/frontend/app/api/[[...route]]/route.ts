import { Hono } from "hono";
import { handle } from "hono/vercel";
import { type NextRequest } from "next/server";
import { app as spsWebsiteBuilderApp } from "@sps/sps-website-builder-backend-app";
import { app as spsFileStorageApp } from "@sps/sps-file-storage-backend-app";
import { app as spsRbacApp } from "@sps/sps-rbac-backend-app";
import { app as startupApp } from "@sps/startup-backend-app";
import { app as spsBilling } from "@sps/sps-billing-backend-app";
import { app as spsNotification } from "@sps/sps-notification-backend-app";
import { chain as middlewaresChain } from "./middlewares/chain";
import { MiddlewaresGeneric } from "@sps/shared-backend-api";
import { setRoutes } from "@sps/sps-kv-provider";
import { BlankSchema } from "hono/types";

declare module "hono" {
  interface ContextVariableMap extends MiddlewaresGeneric {}
}

const app = new Hono<MiddlewaresGeneric, BlankSchema, string>().basePath(
  "/api",
);

middlewaresChain(app);

setRoutes(app as any);

app.route("/sps-website-builder", spsWebsiteBuilderApp as any);
app.route("/sps-file-storage", spsFileStorageApp as any);
app.route("/sps-rbac", spsRbacApp as any);
app.route("/sps-billing", spsBilling as any);
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
