import { app as identity } from "@sps/sps-rbac-models-identity-backend-app";
import { app as user } from "@sps/sps-rbac-models-user-backend-app";
import { app as authentication } from "@sps/sps-rbac-models-authentication-backend-app";
import { app as role } from "@sps/sps-rbac-models-role-backend-app";
export const routes = {
  "/identities": identity,
  "/users": user,
  "/authentications": authentication,
  "/roles": role,
};
