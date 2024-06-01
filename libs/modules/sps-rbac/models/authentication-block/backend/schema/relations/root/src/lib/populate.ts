import { populate as widgetsToAuthenticationBlocks } from "@sps/sps-rbac-models-authentication-block-backend-schema-relations-widgets-to-authentication-blocks";
export const populate = (params: any) => {
  return {
    widgetsToAuthenticationBlocks: widgetsToAuthenticationBlocks(params),
  } as const;
};
