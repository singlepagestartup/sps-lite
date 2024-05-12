import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk, BACKEND_URL } from "@sps/shared-frontend-utils-client";
import { populate, route, tag, IModelExtended } from "../model";
import { transformResponseItem } from "@sps/shared-utils";
import { globalActionsStore, invalidateServerTag } from "@sps/store";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-website-builder`,
  ),
  tagTypes: [tag],
  reducerPath: route,
  endpoints: (build) => {
    return {
      find: rtk.api.find<IModelExtended>({
        serviceApi: this,
        build,
        populate,
        model: route,
        rtkType: tag,
      }),

      findById: rtk.api.findById<IModelExtended>({
        serviceApi: this,
        build,
        populate,
        model: route,
        rtkType: tag,
      }),

      getByUrl: build.query<IModelExtended, any>({
        query: (params: any = {}) => {
          const { populate, locale, filters, pagination, url } = params;

          return {
            url: `${route}/get-by-url`,
            params: {
              url,
              populate,
              locale,
              filters,
              pagination,
            },
          };
        },

        transformResponse: (result) => {
          return transformResponseItem(result);
        },

        providesTags: (result: any) => {
          return result?.id
            ? [
                { type: tag, id: result.id },
                { type: tag, id: "LIST" },
              ]
            : [];
        },
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
    };
  },
});

export const subscription = (reduxStore: any) => {
  const triggeredActions: string[] = [];
  return globalActionsStore.subscribe((state) => {
    // const startupTaskState = state.stores["sps-website-builder/pages"];
    // startupTaskState?.actions?.forEach(async (action: any) => {
    //   if (
    //     action.type === "pages/executeMutation/fulfilled" &&
    //     !triggeredActions.includes(action.meta.requestId)
    //   ) {
    //     /**
    //      * Order is important, because calling invalidateServerTag before
    //      * triggeredActions.push will cause the action to be triggered again
    //      * and infinite loop will be created
    //      */
    //     triggeredActions.push(action.meta.requestId);
    //     reduxStore.dispatch(api.util.invalidateTags([tag]));
    //     await invalidateServerTag({ tag });
    //   }
    // });
    // const pagesToLayouts = state.stores["sps-website-builder/pages-to-layouts"];
    // pagesToLayouts?.actions?.forEach(async (action: any) => {
    //   if (
    //     action.type === "pages-to-layouts/executeMutation/fulfilled" &&
    //     !triggeredActions.includes(action.meta.requestId)
    //   ) {
    //     /**
    //      * Order is important, because calling invalidateServerTag before
    //      * triggeredActions.push will cause the action to be triggered again
    //      * and infinite loop will be created
    //      */
    //     triggeredActions.push(action.meta.requestId);
    //     reduxStore.dispatch(api.util.invalidateTags([tag]));
    //     await invalidateServerTag({ tag });
    //   }
    // });
  });
};
