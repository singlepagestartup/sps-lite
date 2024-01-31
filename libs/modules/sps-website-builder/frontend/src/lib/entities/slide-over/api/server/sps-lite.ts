import { api as parentApi } from "../../../api/server";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/entities/slide-over/populate";
import { IEntity } from "@sps/sps-website-builder-contracts-extended/lib/entities/slide-over/interfaces";

export const api = {
  findOne: async ({ id }: { id: number }): Promise<IEntity> => {
    const params = {
      id,
      populate,
      model: "slide-overs",
    };

    return parentApi.findOne<IEntity>(params);
  },
};
