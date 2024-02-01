import { createApi } from "@reduxjs/toolkit/query/react";
import {
  strapiCreate,
  strapiDelete,
  strapiFetchBaseQueryBuilder,
  strapiFind,
  strapiFindOne,
  strapiUpdate,
  BACKEND_URL,
} from "@sps/utils";

import { populate } from "@sps/sps-website-builder-contracts-extended/lib/entities/flyout/populate";
import type { IEntity } from "@sps/sps-website-builder-contracts-extended/lib/entities/flyout/interfaces";

const model = "flyouts";
const rtkType = "Flyout";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-website-builder`,
  ),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    find: strapiFind<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    findOne: strapiFindOne<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    create: strapiCreate<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    update: strapiUpdate<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    delete: strapiDelete<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
