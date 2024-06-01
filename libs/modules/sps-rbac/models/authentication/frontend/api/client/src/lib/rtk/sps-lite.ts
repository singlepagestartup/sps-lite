import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk, BACKEND_URL } from "@sps/shared-frontend-utils-client";
import {
  prepareFormDataToSend,
  transformResponseItem,
} from "@sps/shared-utils";
import {
  IModelExtended,
  route,
  tag,
  populate,
} from "@sps/sps-rbac-models-authentication-frontend-api-model";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-rbac`),
  tagTypes: [tag],
  reducerPath: route,
  endpoints: (build) => ({
    findById: rtk.api.findById<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),
    find: rtk.api.find<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),
    create: rtk.api.create<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),
    update: rtk.api.update<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),
    delete: rtk.api.delete<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),
    loginAndPassword: build.mutation({
      query: (params: any = {}) => {
        const formData = prepareFormDataToSend(params);

        return {
          url: `${route}/providers/login-and-password`,
          method: "POST",
          params: {
            populate,
          },
          body: formData,
        };
      },

      async onQueryStarted(...args) {},

      transformResponse: (result) => {
        return transformResponseItem(result);
      },

      // invalidatesTags: invalidatesTagsFunc
      //   ? invalidatesTagsFunc
      //   : [{ type: rtkType, id: "LIST" }],
    }),
  }),
});

export const subscription = (reduxStore: any) => {};
