import { api as parentApi } from "../../../api/server";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/entities/sidebar/populate";
import { IEntity } from "@sps/sps-website-builder-contracts-extended/lib/entities/sidebar/interfaces";

export const api = {
  findOne: async ({ id }: { id: number }): Promise<IEntity> => {
    const params = {
      id,
      populate,
      model: "sidebars",
    };

    return parentApi.findOne<IEntity>(params);
  },
};
