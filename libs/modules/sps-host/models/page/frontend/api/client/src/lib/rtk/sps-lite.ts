import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk } from "@sps/shared-frontend-utils-client";
import { transformResponseItem } from "@sps/shared-utils";
import {
  populate,
  route,
  tag,
  IModelExtended,
  host,
} from "@sps/sps-host/models/page/frontend/api/model";
import { globalActionsStore, invalidateServerTag } from "@sps/shared-store";
import QueryString from "qs";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(host),
  tagTypes: [tag],
  reducerPath: tag,
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

      findByUrl: build.query<IModelExtended, any>({
        query: (params: any = {}) => {
          const { url } = params;

          return {
            url: `${route}/find-by-url?url=${url}`,
          };
        },

        transformResponse: (result: { data: IModelExtended }) => {
          return transformResponseItem<IModelExtended>(result);
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

      urlSegmentValue: build.query<string, any>({
        query: (props: { url: string; segment: string }) => {
          const stringifiedQuery = QueryString.stringify(
            {
              url: props.url,
              segment: props.segment,
            },
            {
              encodeValuesOnly: true,
            },
          );

          return {
            url: `${route}/url-segment-value?${stringifiedQuery}`,
          };
        },

        transformResponse: (result: { data: string }) => {
          return transformResponseItem<string>(result);
        },

        providesTags: (result: any) => {
          return [];
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
    const hsbState =
      state.stores["/api/sps-website-builder/hero-section-blocks"];
    // console.log(
    //   `🚀 ~ returnglobalActionsStore.subscribe ~ hsbState:`,
    //   hsbState,
    // );

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
    // const pagesToLayouts = state.stores["sps-host/pages-to-layouts"];
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
