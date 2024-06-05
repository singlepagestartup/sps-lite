import { Hono } from "hono";
import { handle } from "hono/vercel";
import { type NextRequest } from "next/server";
import { app as spsWebsiteBuilderApp } from "@sps/sps-website-builder-backend-app";
import { app as spsFileStorageApp } from "@sps/sps-file-storage-backend-app";
import { app as spsRbacApp } from "@sps/sps-rbac-backend-app";
import { app as startupApp } from "@sps/startup-backend-app";
import { chain as middlewaresChain } from "./middlewares/chain";
import { middlewares as spsRbacSdk } from "@sps/sps-rbac-backend-sdk";
import { MiddlewaresGeneric } from "@sps/shared-backend-api";
import { RedisStoreAdapter } from "../../../src/redis";
import Redis from "ioredis";
import { sessionMiddleware } from "hono-sessions";
import { kvCaches } from "./cache";

const redis = new Redis({
  port: Number(process.env["REDIS_PORT"]) || 6379,
  username: "default",
  password: process.env["REDIS_PASSWORD"],
});

const store = new RedisStoreAdapter({
  prefix: "sps:",
  ttl: 3600,
  client: redis,
});

const app = new Hono<MiddlewaresGeneric>().basePath("/api");

const cacheOptions = {
  key: "redis-get",
  store,
};

const cacheMiddleware = kvCaches(cacheOptions as any);

middlewaresChain(app);

app.use(
  sessionMiddleware({
    store,
    expireAfterSeconds: 900,
    cookieOptions: {
      sameSite: "Lax",
      path: "/",
      httpOnly: true,
    },
  }),
);

app.use(cacheMiddleware);
// app.on(["POST", "PUT"], "*", spsRbacSdk.middlewares.isAuthenticated());

app.route("/sps-website-builder", spsWebsiteBuilderApp);
app.route("/sps-file-storage", spsFileStorageApp);
app.route("/sps-rbac", spsRbacApp);
app.route("/startup", startupApp);

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
