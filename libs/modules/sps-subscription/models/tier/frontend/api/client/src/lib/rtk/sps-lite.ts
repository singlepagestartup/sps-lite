import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk, BACKEND_URL } from "@sps/shared-frontend-utils-client";
import { IModelExtended, route, tag, populate } from "../model";
import { globalActionsStore } from "@sps/store";
import { transformResponseItem } from "@sps/shared-utils";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-subscription`,
  ),
  tagTypes: [tag],
  reducerPath: route,
  endpoints: (build) => ({
    findOne: rtk.api.findOne<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),
    findMany: rtk.api.find<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),
    subscribe: build.mutation({
      query: (params = {}) => {
        const { data, id, populate = {} } = params;

        return {
          url: `${route}/${id}/subscribe`,
          method: "POST",
          params: {
            populate,
          },
          body: { data },
        };
      },

      transformResponse: (result) => {
        return transformResponseItem(result) as IModelExtended;
      },

      // onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
      //   await queryFulfilled;
      //   dispatch(cartApi.util.invalidateTags(["Cart"]));
      // },
    }),
  }),
});

export const subscription = (reduxStore: any) => {
  const triggeredActions: string[] = [];
  return globalActionsStore.subscribe((state) => {
    const ecomState = state.stores["sps-ecommerce"];
    // console.log(
    //   `🚀 ~ returnglobalActionsStore.subscribe ~ ecomState:`,
    //   ecomState,
    // );
    ecomState?.actions?.forEach((action: any) => {
      if (
        action.type === "attributes/executeQuery/fulfilled" &&
        !triggeredActions.includes(action.meta.requestId)
      ) {
        reduxStore.dispatch(api.util.invalidateTags([tag]));
        triggeredActions.push(action.meta.requestId);
      }
    });
  });
};
