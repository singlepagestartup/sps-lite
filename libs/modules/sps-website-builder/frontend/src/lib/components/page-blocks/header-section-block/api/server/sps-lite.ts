import { api as parentApi } from "../../../../api/server";
import { IComponent } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/header-section-block/interfaces";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/header-section-block/populate";

export const api = {
  findOne: async ({ id }: { id: number }): Promise<IComponent> => {
    const params = {
      id,
      populate,
      name: "page-blocks.header-section-block",
    };

    return parentApi.findByIdAndName<IComponent>(params);
  },
};