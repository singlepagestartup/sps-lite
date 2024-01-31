import { api as parentApi } from "../../../api/server";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/entities/navbar/populate";
import { IEntity } from "@sps/sps-website-builder-contracts-extended/lib/entities/navbar/interfaces";

export const api = {
  findOne: async ({ id }: { id: number }): Promise<IEntity> => {
    const params = {
      id,
      populate,
      model: "navbars",
    };

    return parentApi.findOne<IEntity>(params);
  },
};
