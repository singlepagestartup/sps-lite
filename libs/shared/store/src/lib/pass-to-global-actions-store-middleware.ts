import { createListenerMiddleware } from "@reduxjs/toolkit";
import { RtkAction, globalActionsStore } from "./global-actions-store";

export const create = ({ name }: { name: string }) => {
  const passToGlobalActionsStoreMiddleware = createListenerMiddleware();

  passToGlobalActionsStoreMiddleware.startListening({
    predicate: (action) => {
      if (action.type.includes("fulfilled")) {
        return true;
      }

      return false;
    },
    effect: async (action: any) => {
      action.module = name;

      const state = globalActionsStore.getState();
      if (!state.stores[action.module]) {
        globalActionsStore
          .getState()
          .addStore({ name: action.module, actions: [] });
      }

      globalActionsStore.getState().addAction(action as RtkAction);
    },
  });

  return passToGlobalActionsStoreMiddleware;
};
