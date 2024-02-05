import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface RtkAction {
  type: string;
  module: string;
  meta: {
    requestId: string;
    requestStatus: string;
    arg: {
      endpointName: string;
      type: string;
    };
  };
  payload: any;
}

export interface State {
  actions: RtkAction[];
}

const name = "global-actions-store";

export const globalActionsStore = create(
  devtools(
    (set: any, get: any) => ({
      actions: [] as RtkAction[],
      addAction: (action: RtkAction) => {
        set((state: State) => {
          const newActionsArray = state.actions.concat([action]);

          return { actions: newActionsArray };
        });
      },
    }),
    {
      name: name,
    },
  ),
);
