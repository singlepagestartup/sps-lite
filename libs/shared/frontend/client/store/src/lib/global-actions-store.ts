import { Mutate, StoreApi, create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type StoreWithPersist = Mutate<
  StoreApi<State & Actions>,
  [["zustand/persist", unknown]]
>;

export interface IAction {
  type: string;
  name: string;
  requestId: string;
  timestamp: number;
  props: any;
  result: any;
}

export interface ActionsStore {
  name: string;
  actions: IAction[];
}

export interface State {
  stores: {
    [key in string]: ActionsStore;
  };
}

export interface Actions {
  addAction: (action: IAction) => void;
  getActionsFromStoreByName: (name: string) => ActionsStore["actions"];
  reset: () => void;
}

const initialState: State = {
  stores: {},
};

const name = "global-actions-store";

export const globalActionsStore = create<State & Actions>()(
  devtools(
    immer(
      persist(
        (set: any, get: any) => ({
          ...initialState,
          getActionsFromStoreByName: (name: string) => {
            return get().stores[name]?.actions;
          },
          addAction: (action: IAction) => {
            set((state: State) => {
              if (!state.stores[action.name]) {
                state.stores[action.name] = {
                  name: action.name,
                  actions: [],
                };
              }

              state.stores[action.name].actions = [
                ...state.stores[action.name].actions.slice(-10),
                action,
              ];
            });

            window.dispatchEvent(new StorageEvent("storage", { key: name }));
          },
          reset: () => {
            set(initialState);
          },
        }),
        {
          name,
          storage: createJSONStorage(() => sessionStorage),
        },
      ),
    ),
    {
      name,
    },
  ),
);

export const useGlobalActionsStore = globalActionsStore;

export const withStorageDOMEvents = (store: StoreWithPersist) => {
  if (typeof window === "undefined") return;

  const storageEventCallback = (e: StorageEvent) => {
    if (e.key === store.persist.getOptions().name) {
      store.persist.rehydrate();
    }
  };

  window.addEventListener("storage", storageEventCallback);

  return () => {
    window.removeEventListener("storage", storageEventCallback);
  };
};

withStorageDOMEvents(globalActionsStore);
