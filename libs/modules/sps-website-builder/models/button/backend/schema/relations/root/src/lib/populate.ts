import { populate as buttonsArraysToButtons } from "@sps/sps-website-builder/models/button/backend/schema/relations/buttons-arrays-to-buttons";

export const populate = (params: any) => {
  return {
    buttonsArraysToButtons: buttonsArraysToButtons(params),
  } as const;
};
