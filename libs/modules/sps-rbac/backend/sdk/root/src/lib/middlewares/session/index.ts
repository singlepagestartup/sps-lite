import { createMiddleware } from "hono/factory";
import { model as sessionModel } from "@sps/sps-rbac-models-session-backend-model";
import { Table as SessionTable } from "@sps/sps-rbac-models-session-backend-schema";
import {
  SPS_RBAC_COOKIE_SESSION_EXPIRATION_SECONDS,
  SPS_RBAC_COOKIE_SESSION_NAME,
  SPS_RBAC_COOKIE_SESSION_SECRET,
} from "@sps/shared-utils";
import { getCookie, setCookie } from "hono/cookie";
import { CookieOptions } from "hono/utils/cookie";
import * as Iron from "iron-webcrypto";

export type MiddlewareGeneric = {
  Variables: {
    session: typeof SessionTable.$inferSelect | null | undefined;
  };
};

interface SessionOptions {
  cookieSessionSecret?: string;
  cookieSessionExpirationSeconds?: number;
  cookieOptions?: CookieOptions;
  cookieSessionName?: string;
}

export function middleware(options?: SessionOptions) {
  const cookieSessionSecret = SPS_RBAC_COOKIE_SESSION_SECRET;

  if (!cookieSessionSecret) {
    throw new Error("Cookie session secret is required");
  }

  if (cookieSessionSecret.length < 32) {
    throw new Error(
      "Cookie session secret must be at least 32 characters long",
    );
  }

  const cookieSessionExpirationSeconds = parseInt(
    SPS_RBAC_COOKIE_SESSION_EXPIRATION_SECONDS,
  );
  const cookieSessionName =
    options?.cookieSessionName || SPS_RBAC_COOKIE_SESSION_NAME;
  const cookieOptions = options?.cookieOptions || {};

  return createMiddleware(async (c, next) => {
    let sid: string | null | undefined;
    let session: typeof SessionTable.$inferSelect | null | undefined;
    let createNewSession = false;

    const sessionCookie = getCookie(c, cookieSessionName);

    if (c.req.url.includes("/sps-website-builder/pages")) {
      return await next();
    }

    if (sessionCookie) {
      try {
        const cookieData = await await Iron.unseal(
          globalThis.crypto,
          sessionCookie,
          { default: cookieSessionSecret },
          Iron.defaults,
        );

        if (typeof cookieData === "string") {
          sid = cookieData;

          session = await sessionModel.services.findById({
            id: cookieData,
          });
        }
      } catch {
        createNewSession = true;
      }

      if (session) {
        if (session.expiresAt > new Date()) {
          session = await sessionModel.services.update({
            id: session.id,
            data: {
              ...cookieOptions,
              expiresAt: new Date(
                Date.now() + cookieSessionExpirationSeconds * 1000,
              ),
            },
          });
        } else {
          createNewSession = true;
        }
      } else {
        createNewSession = true;
      }
    } else {
      createNewSession = true;
    }

    if (createNewSession) {
      session = await sessionModel.services.create({
        data: {
          ...cookieOptions,
          expiresAt: new Date(
            Date.now() + cookieSessionExpirationSeconds * 1000,
          ),
        },
      });

      sid = session.id;
    }

    const cookieData = await Iron.seal(
      globalThis.crypto,
      sid,
      cookieSessionSecret,
      Iron.defaults,
    );

    c.set("session", session);

    await next();

    setCookie(c, cookieSessionName, cookieData, {
      path: "/",
      secure: true,
      httpOnly: true,
      maxAge: cookieSessionExpirationSeconds,
      expires: session?.expiresAt,
      sameSite: "Strict",
    });

    const expiredSessions = await sessionModel.services.find({
      params: {
        filters: {
          and: [
            {
              column: "expiresAt",
              method: "lt",
              value: new Date(),
            },
          ],
        },
      },
    });

    for (const expiredSession of expiredSessions) {
      await sessionModel.services.delete({
        id: expiredSession.id,
      });
    }

    // if (shouldDelete) {
    // if (store) {
    //   await store.deleteSession(sid);
    // }
    // }

    // const shouldRecreateSessionForNonCookieStore =
    //   !shouldDelete && shouldRotateSessionKey;

    // if (shouldRecreateSessionForNonCookieStore) {
    //   if (store) {
    //     await store.deleteSession(sid);
    //     sid = globalThis.crypto.randomUUID();
    //     await store.createSession(sid, session.getCache());
    //   }

    //   const cookieData = await Iron.seal(
    //     globalThis.crypto,
    //     sid,
    //     cookieSessionSecret,
    //     Iron.defaults,
    //   );

    //   setCookie(c, cookieSessionName, cookieData, cookieOptions);
    // }

    // if (store) {
    //   await store?.persistSessionData(sid, session.getCache());
    // }
  });
}
