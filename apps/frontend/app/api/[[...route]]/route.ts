import { Hono } from "hono";
import { handle } from "hono/vercel";
import { type NextRequest } from "next/server";
import { app as spsWebsiteBuilderApp } from "@sps/sps-website-builder-backend-app";
import { app as spsFileStorageApp } from "@sps/sps-file-storage-backend-app";
import { app as startupApp } from "@sps/startup-backend-app";
import { middlewaresChain } from "./middlewares";
import { MiddlewaresGeneric } from "@sps/shared-backend-api";

const app = new Hono<MiddlewaresGeneric>().basePath("/api");

middlewaresChain(app);

app.route("/sps-website-builder", spsWebsiteBuilderApp);
app.route("/sps-file-storage", spsFileStorageApp);
app.route("/startup", startupApp);

// const envs = process.env;

// console.log(`🚀 ~ envs:`, envs);

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
