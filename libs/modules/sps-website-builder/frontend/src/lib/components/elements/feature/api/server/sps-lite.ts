import { api as parentApi } from "../../../../api/server";
import { IComponent } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/feature/interfaces";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/feature/populate";

export const api = {
  findOne: async ({ id }: { id: number }): Promise<IComponent> => {
    const params = {
      id,
      populate,
      name: "elements.feature",
    };

    return parentApi.findByIdAndName<IComponent>(params);
  },
};
