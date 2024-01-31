import { api as parentApi } from "../../../../api/server";
import { IComponent } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/buttons-array/interfaces";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/buttons-array/populate";

export const api = {
  findOne: async ({ id }: { id: number }): Promise<IComponent> => {
    const params = {
      id,
      populate,
      name: "elements.buttons-array",
    };

    return parentApi.findByIdAndName<IComponent>(params);
  },
};
