import { createMiddleware } from "hono/factory";
import { app as spsRbacApp } from "@sps/sps-rbac-backend-app";
import { BACKEND_URL } from "@sps/shared-utils";
import { HTTPException } from "hono/http-exception";
import { StatusCode } from "hono/utils/http-status";
import { MiddlewareGeneric } from "../session";
import { model as usersToSessions } from "@sps/sps-rbac-relations-users-to-sessions-backend-model";

export function middleware() {
  return createMiddleware<MiddlewareGeneric>(async (c, next) => {
    const method = c.req.method;
    const url = c.req.url;
    const session = c.var.session;

    if (["GET"].includes(method) || url.includes("/authentications")) {
      return next();
    }

    console.log(
      `🚀 ~ returncreateMiddleware<MiddlewareGeneric> ~ session:`,
      session,
    );

    if (!session) {
      throw new HTTPException(403, {
        message: "Unauthorized",
      });
    }

    const userToSession = await usersToSessions.services.find({
      params: {
        filters: {
          and: [
            {
              column: "userId",
              method: "isNotNull",
            },
            {
              column: "sessionId",
              method: "eq",
              value: session.id,
            },
          ],
        },
      },
    });

    if (!userToSession.length) {
      throw new HTTPException(403, {
        message: "Unauthorized",
      });
    }

    console.log(
      `🚀 ~ returncreateMiddleware<MiddlewareGeneric> ~ userToSession:`,
      userToSession,
    );

    // const roles = await spsRbacApp.request(
    //   new Request(BACKEND_URL + "/authentications/check"),
    //   {
    //     headers: {
    //       ...c.req.header(),
    //     },
    //   },
    // );

    // await roles.json().then((data) => {
    //   if (!roles.ok) {
    //     throw new HTTPException(roles.status as StatusCode, {
    //       message: data.message,
    //     });
    //   }
    // });

    return next();
  });
}
