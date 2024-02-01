import type { IEntity } from "@sps/sps-website-builder-contracts-extended/lib/entities/loader/interfaces";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/entities/loader/populate";
import { fetch } from "@sps/utils";

const model = "loader";

export const api = {
  find: async () => {
    return await fetch.api.find<IEntity>({ model, populate });
  },
  findOne: async ({ id }: { id: number }) => {
    return await fetch.api.findOne<IEntity>({
      id,
      model,
      populate,
    });
  },
};
