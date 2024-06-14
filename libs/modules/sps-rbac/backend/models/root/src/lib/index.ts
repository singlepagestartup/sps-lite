import { model as sessionsToAuthentications } from "@sps/sps-rbac-relations-sessions-to-authentications-backend-model";

import { model as session } from "@sps/sps-rbac-models-session-backend-model";
import { model as widgetsToAuthenticationBlocks } from "@sps/sps-rbac-relations-widgets-to-authentication-blocks-backend-model";
import { model as widget } from "@sps/sps-rbac-models-widget-backend-model";
import { model as authenticationBlock } from "@sps/sps-rbac-models-authentication-block-backend-model";

import { model as identity } from "@sps/sps-rbac-models-identity-backend-model";

import { model as authentication } from "@sps/sps-rbac-models-authentication-backend-model";
import { model as role } from "@sps/sps-rbac-models-role-backend-model";
export const models = {
  sessionsToAuthentications,

  session,
  widgetsToAuthenticationBlocks,
  widget,
  authenticationBlock,

  identity,

  authentication,
  role,
};
