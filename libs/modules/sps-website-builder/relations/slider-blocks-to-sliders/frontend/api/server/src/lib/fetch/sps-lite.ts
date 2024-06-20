import { fetch as utilsFetch } from "@sps/shared-frontend-utils-server";
import {
  populate,
  route,
  IRelationExtended,
} from "@sps/sps-website-builder/relations/slider-blocks-to-sliders/frontend/api/model";

export const api = {
  findById: async ({ id }: { id: string }) => {
    return await utilsFetch.api.findOne<IRelationExtended>({
      id,
      model: route,
      populate,
      rootPath: "/api/sps-website-builder",
    });
  },
  find: async () => {
    return await utilsFetch.api.find<IRelationExtended>({
      model: route,
      populate,
      rootPath: "/api/sps-website-builder",
    });
  },
};
