import { createMiddleware } from "hono/factory";
import { store } from "../../store";
import { Session, SessionData } from "./Session";
import {
  COOKIE_SESSION_EXPIRATION_SECONDS,
  COOKIE_SESSION_NAME,
  COOKIE_SESSION_SECRET,
} from "@sps/shared-utils";
import { getCookie, setCookie } from "hono/cookie";
import { CookieOptions } from "hono/utils/cookie";
import * as Iron from "iron-webcrypto";
import crypto from "crypto";

export type MiddlewareGeneric = {
  Variables: {
    session: string;
  };
};

interface SessionOptions {
  store: typeof store;
  cookieSessionSecret?: string;
  cookieSessionExpirationSeconds?: number;
  cookieOptions?: CookieOptions;
  cookieSessionName?: string;
}

export function middleware(options?: SessionOptions) {
  const cookieSessionSecret = COOKIE_SESSION_SECRET;

  if (!cookieSessionSecret) {
    throw new Error("Cookie session secret is required");
  }

  if (cookieSessionSecret.length < 32) {
    throw new Error(
      "Cookie session secret must be at least 32 characters long",
    );
  }

  const cookieSessionExpirationSeconds = parseInt(
    COOKIE_SESSION_EXPIRATION_SECONDS,
  );
  const cookieSessionName = options?.cookieSessionName || COOKIE_SESSION_NAME;
  const cookieOptions = options?.cookieOptions || {};

  return createMiddleware(async (c, next) => {
    const session = new Session();
    let sid = crypto.randomUUID();
    let session_data: SessionData | null | undefined;
    let createNewSession = false;

    const sessionCookie = getCookie(c, cookieSessionName);

    if (sessionCookie) {
      try {
        const cookieData = await await Iron.unseal(
          globalThis.crypto,
          sessionCookie,
          { default: cookieSessionSecret },
          Iron.defaults,
        );

        // console.log(`🚀 ~ returncreateMiddleware ~ cookieData:`, cookieData);

        if (typeof cookieData === "string") {
          const persistentCookieData = await store?.getSessionById(sid);

          if (persistentCookieData) {
            session_data = persistentCookieData;
          }
        }
      } catch {
        createNewSession = true;
      }

      if (session_data) {
        session.setCache(session_data);

        if (session.isValid()) {
          session.prolongate(cookieSessionExpirationSeconds);
        } else {
          if (store) {
            await store.deleteSession(sid);
          }

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
        _data: {},
        _expire: null,
        _delete: false,
        _accessed: null,
        ...(session_data || {}),
      };

      if (store) {
        await store.createSession(sid, data);
      }

      session.setCache(data);
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
      expires: new Date(Date.now() + cookieSessionExpirationSeconds),
      sameSite: "Strict",
    });

    const shouldDelete = session.getCache()._delete;
    const shouldRotateSessionKey = c.get("session_key_rotation") === true;

    if (shouldDelete) {
      if (store) {
        await store.deleteSession(sid);
      }
    }

    const shouldRecreateSessionForNonCookieStore =
      !shouldDelete && shouldRotateSessionKey;

    if (shouldRecreateSessionForNonCookieStore) {
      if (store) {
        await store.deleteSession(sid);
        sid = globalThis.crypto.randomUUID();
        await store.createSession(sid, session.getCache());
      }

      const cookieData = await Iron.seal(
        globalThis.crypto,
        sid,
        cookieSessionSecret,
        Iron.defaults,
      );

      setCookie(c, cookieSessionName, cookieData, cookieOptions);
    }

    if (store) {
      await store?.persistSessionData(sid, session.getCache());
    }
  });
}
