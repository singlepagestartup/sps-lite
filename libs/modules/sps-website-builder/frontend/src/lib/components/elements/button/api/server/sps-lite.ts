import { api as parentApi } from "../../../../api/server";
import { IComponent } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/button/interfaces";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/button/populate";

export const api = {
  findOne: async ({ id }: { id: number }): Promise<IComponent> => {
    const params = {
      id,
      populate,
      name: "elements.button",
    };

    return parentApi.findByIdAndName<IComponent>(params);
  },
};
