import { createApi } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "~utils/envs";
import {
  strapiCreate,
  strapiDelete,
  strapiFetchBaseQueryBuilder,
  strapiFind,
  strapiFindOne,
  strapiUpdate,
} from "~redux/strapi-rtk";

import { populate } from "../populate";
import { IBackendApiFlyout } from "../interfaces";

const model = "flyouts";
const rtkType = "Flyout";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(BACKEND_URL),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    getFlyouts: strapiFind<IBackendApiFlyout>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    getFlyoutById: strapiFindOne<IBackendApiFlyout>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    createFlyout: strapiCreate<IBackendApiFlyout>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    updateFlyout: strapiUpdate<IBackendApiFlyout>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    deleteFlyout: strapiDelete<IBackendApiFlyout>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
