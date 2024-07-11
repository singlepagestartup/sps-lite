import { BACKEND_URL, SPS_RBAC_SECRET_KEY } from "@sps/shared-utils";
import { createMiddleware } from "hono/factory";

export function middleware() {
  return createMiddleware(async (c, next) => {
    const path = c.req.path;
    const method = c.req.method;

    await next();

    if (path.includes("/api/sps-broadcast") || path.includes("/api/sps-rbac")) {
      return;
    }

    if (c.res.status >= 200 && c.res.status < 300) {
      if (["POST", "PUT", "PATCH", "DELETE"].includes(method)) {
        if (!SPS_RBAC_SECRET_KEY) {
          throw Error(
            "SPS_RBAC_SECRET_KEY is not defined, sps-broadcast middleware 'revalidation' can't request to service.",
          );
        }

        if (["POST", "PUT", "PATCH"].includes(method)) {
          const body = new FormData();

          body.append(
            "data",
            JSON.stringify({ channelName: "revalidation", payload: path }),
          );

          const pushMessage = await fetch(
            BACKEND_URL + "/api/sps-broadcast/channels/push-message",
            {
              method: "POST",
              headers: {
                "X-SPS-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
              },
              body,
            },
          );

          await pushMessage.json().then((data) => {
            // console.log(`🚀 ~ awaitcheck.json ~ data:`, data);
          });
        }
        if (["DELETE"].includes(method)) {
          const pathWithoutId = path.replace(/\/[a-zA-Z0-9-]+$/, "");

          const body = new FormData();

          body.append(
            "data",
            JSON.stringify({
              channelName: "revalidation",
              payload: pathWithoutId,
            }),
          );

          const pushMessage = await fetch(
            BACKEND_URL + "/api/sps-broadcast/channels/push-message",
            {
              method: "POST",
              headers: {
                "X-SPS-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
              },
              body,
            },
          );

          await pushMessage.json().then((data) => {
            // console.log(`🚀 ~ awaitcheck.json ~ data:`, data);
          });
        }
      }
    }

    return;
  });
}
