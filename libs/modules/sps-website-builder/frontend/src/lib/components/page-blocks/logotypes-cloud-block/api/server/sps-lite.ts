import { api as parentApi } from "../../../../api/server";
import { IComponent } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/logotypes-cloud-block/interfaces";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/logotypes-cloud-block/populate";

export const api = {
  findOne: async ({ id }: { id: number }): Promise<IComponent> => {
    const params = {
      id,
      populate,
      name: "page-blocks.logotypes-cloud-block",
    };

    return parentApi.findByIdAndName<IComponent>(params);
  },
};
