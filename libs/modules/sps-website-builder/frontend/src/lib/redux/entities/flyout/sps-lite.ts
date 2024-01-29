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
    getFlyouts: strapiFind<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    getFlyoutById: strapiFindOne<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    createFlyout: strapiCreate<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    updateFlyout: strapiUpdate<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    deleteFlyout: strapiDelete<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
