import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk, BACKEND_URL } from "@sps/utils";
import { IModelExtended, route, tag, populate } from "../../_model";
import { globalActionsStore } from "@sps/store";

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
    find: rtk.api.find<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),
  }),
});

export const subscription = (reduxStore: any) => {
  const triggeredActions: string[] = [];

  return globalActionsStore.subscribe((state) => {
    state.actions.forEach((action) => {
      if (
        action.type === "attributes/executeQuery/fulfilled" &&
        !triggeredActions.includes(action.meta.requestId)
      ) {
        console.log(`🚀 ~ state.actions.forEach ~ action:`, action);
        reduxStore.dispatch(api.util.invalidateTags(["Tier"]));
        triggeredActions.push(action.meta.requestId);
      }
    });
  });
};
