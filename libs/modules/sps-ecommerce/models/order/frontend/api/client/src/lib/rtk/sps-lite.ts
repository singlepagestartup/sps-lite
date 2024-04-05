import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk, BACKEND_URL } from "@sps/shared-frontend-utils-client";
import { IModelExtended, route, tag, populate } from "../model";
import { globalActionsStore, invalidateServerTag } from "@sps/store";
import { transformResponseItem } from "@sps/shared-utils";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-ecommerce`),
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
    checkout: build.mutation({
      query: (params = {}) => {
        const { data, id, populate: passedPopulate = populate } = params;

        return {
          url: `${route}/${id}/checkout`,
          method: "POST",
          params: {
            populate: passedPopulate,
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
    const spsEcommerceState = state.stores["sps-ecommerce/carts"];
    spsEcommerceState?.actions?.forEach(async (action: any) => {
      if (
        action.type === "carts/executeQuery/fulfilled" &&
        !triggeredActions.includes(action.meta.requestId)
      ) {
        reduxStore.dispatch(api.util.invalidateTags([tag]));
        triggeredActions.push(action.meta.requestId);
        await invalidateServerTag({ tag });
      }
    });
  });
};
