import { Context } from "hono";
import { getCookie } from "hono/cookie";

export function util(c: Context) {
  const authorizationCookie = getCookie(c, "sps-rbac.authentication.jwt");
  const authorizationHeader = c.req.header("Authorization");
  const authorization =
    authorizationCookie || authorizationHeader?.replace("Bearer ", "");

  return authorization;
}
