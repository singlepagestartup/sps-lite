import { populate as widgetsToAuthenticationBlocks } from "@sps/sps-rbac-models-widget-backend-schema-relations-widgets-to-authentication-blocks";
export const populate = (params: any) => {
  return {
    widgetsToAuthenticationBlocks: widgetsToAuthenticationBlocks(params),
  } as const;
};
