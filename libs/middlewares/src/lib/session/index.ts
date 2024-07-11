import { createMiddleware } from "hono/factory";
import { Table as SessionTable } from "@sps/sps-rbac/models/session/backend/schema/root";
import {
  BACKEND_URL,
  SPS_RBAC_COOKIE_SESSION_EXPIRATION_SECONDS,
  SPS_RBAC_COOKIE_SESSION_NAME,
  SPS_RBAC_COOKIE_SESSION_SECRET,
  SPS_RBAC_SECRET_KEY,
} from "@sps/shared-utils";
import { getCookie, setCookie } from "hono/cookie";
import * as Iron from "iron-webcrypto";
import QueryString from "qs";

export type MiddlewareGeneric = {
  Variables: {
    session: typeof SessionTable.$inferSelect | null | undefined;
  };
};

interface SessionOptions {
  cookieSessionSecret?: string;
  cookieSessionExpirationSeconds?: number;
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

  return createMiddleware(async (c, next) => {
    let sid: string | null | undefined;
    let session: typeof SessionTable.$inferSelect | null | undefined;
    let createNewSession = false;

    if (!SPS_RBAC_SECRET_KEY) {
      throw new Error(
        "SPS_RBAC_SECRET_KEY is required for sessions middleware to work",
      );
    }

    const sessionCookie = getCookie(c, cookieSessionName);

    if (c.req.url.includes("/api/sps-rbac/sessions")) {
      return await next();
    }

    if (sessionCookie) {
      const cookieData = await Iron.unseal(
        globalThis.crypto,
        sessionCookie,
        { default: cookieSessionSecret },
        Iron.defaults,
      ).catch((error) => {
        createNewSession = true;
      });

      if (typeof cookieData === "string") {
        sid = cookieData;

        const filters = QueryString.stringify({
          filters: {
            and: [
              {
                column: "id",
                method: "eq",
                value: cookieData,
              },
            ],
          },
        });

        const sessionsJson = await fetch(
          BACKEND_URL + "/api/sps-rbac/sessions?" + filters,
          {
            method: "GET",
            headers: {
              "X-SPS-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
            },
          },
        ).then((res) => res.json());

        session = sessionsJson.data?.[0];
      }

      if (session) {
        if (new Date(session.expiresAt).getTime() > Date.now()) {
          const data = {
            expiresAt: new Date(Date.now() + 60 * 1000).toISOString(),
          };

          const body = new FormData();

          body.append("data", JSON.stringify(data));

          const sessionsJson = await fetch(
            BACKEND_URL + "/api/sps-rbac/sessions/" + session.id,
            {
              method: "PATCH",
              headers: {
                "X-SPS-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
              },
              body,
            },
          ).then((res) => res.json());

          session = sessionsJson.data;
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
      const data = {
        expiresAt: new Date(Date.now() + 60 * 1000).toISOString(),
      };

      const body = new FormData();

      body.append("data", JSON.stringify(data));

      const sessionsJson = await fetch(BACKEND_URL + "/api/sps-rbac/sessions", {
        method: "POST",
        headers: {
          "X-SPS-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
        },
        body,
      }).then((res) => res.json());

      session = sessionsJson.data;

      if (!session) {
        throw new Error("Session not found");
      }

      sid = session.id;
    }

    const cookieData = await Iron.seal(
      globalThis.crypto,
      sid,
      cookieSessionSecret,
      Iron.defaults,
    );

    c.set("session", session);

    if (!session) {
      throw new Error("Session not found");
    }

    await next();

    setCookie(c, cookieSessionName, cookieData, {
      path: "/",
      secure: true,
      httpOnly: true,
      maxAge: cookieSessionExpirationSeconds,
      expires: new Date(session.expiresAt),
      sameSite: "Strict",
    });
  });
}
