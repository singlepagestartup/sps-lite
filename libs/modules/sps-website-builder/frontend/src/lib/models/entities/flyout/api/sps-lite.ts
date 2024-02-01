import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk, BACKEND_URL } from "@sps/utils";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/entities/flyout/populate";
import type { IEntity } from "@sps/sps-website-builder-contracts-extended/lib/entities/flyout/interfaces";

const model = "flyouts";
const rtkType = "Flyout";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-website-builder`,
  ),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    find: rtk.api.find<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    findOne: rtk.api.findOne<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    create: rtk.api.create<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    update: rtk.api.update<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    delete: rtk.api.delete<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
