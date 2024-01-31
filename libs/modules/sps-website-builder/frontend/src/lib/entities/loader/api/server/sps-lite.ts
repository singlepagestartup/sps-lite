import { api as parentApi } from "../../../api/server";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/entities/loader/populate";
import { IEntity } from "@sps/sps-website-builder-contracts-extended/lib/entities/loader/interfaces";

export const api = {
  findOne: async ({ id }: { id: number }): Promise<IEntity> => {
    const params = {
      id,
      populate,
      model: "loaders",
    };

    return parentApi.findOne<IEntity>(params);
  },
};
