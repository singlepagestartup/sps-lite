// import { createListenerMiddleware } from "@reduxjs/toolkit";
// import { RtkAction, globalActionsStore } from "./global-actions-store";

export const create = ({ module }: { module: string }) => {
  // const passToGlobalActionsStoreMiddleware = createListenerMiddleware();

  // passToGlobalActionsStoreMiddleware.startListening({
  //   predicate: (action) => {
  //     if (action.type.includes("fulfilled")) {
  //       return true;
  //     }

  //     return false;
  //   },
  //   effect: async (action: any) => {
  //     action.module = module;
  //     globalActionsStore.getState().addAction(action as RtkAction);
  //   },
  // });

  // return passToGlobalActionsStoreMiddleware;
  return {};
};
