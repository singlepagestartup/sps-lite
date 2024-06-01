import { app as authentication } from "@sps/sps-rbac-models-authentication-backend-app";
import { app as role } from "@sps/sps-rbac-models-role-backend-app";
export const routes = { "/authentications": authentication, "/roles": role };
