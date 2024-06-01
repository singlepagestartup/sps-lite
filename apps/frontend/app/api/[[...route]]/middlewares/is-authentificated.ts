import { createMiddleware } from "hono/factory";
import { app as spsRbacApp } from "@sps/sps-rbac-backend-app";
import { BACKEND_URL } from "@sps/shared-utils";
import { HTTPException } from "hono/http-exception";
import { StatusCode } from "hono/utils/http-status";

export function middleware() {
  return createMiddleware(async (c, next) => {
    const roles = await spsRbacApp.request(
      new Request(BACKEND_URL + "/authentications/check"),
      {
        headers: {
          ...c.req.header(),
        },
      },
    );

    await roles.json().then((data) => {
      if (!roles.ok) {
        throw new HTTPException(roles.status as StatusCode, {
          message: data.message,
        });
      }
    });

    return next();
  });
}
