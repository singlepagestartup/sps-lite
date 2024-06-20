import { fetch as utilsFetch } from "@sps/shared-frontend-utils-server";
import {
  populate,
  route,
  IRelationExtended,
} from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/frontend/api/model";

export const api = {
  findById: async ({ id }: { id: string }) => {
    return await utilsFetch.api.findById<IRelationExtended>({
      id,
      model: route,
      populate,
      rootPath: "/api/sps-website-builder",
    });
  },
  findMany: async () => {
    return await utilsFetch.api.find<IRelationExtended>({
      model: route,
      populate,
      rootPath: "/api/sps-website-builder",
    });
  },
};
