import { Mutate, StoreApi, create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";

export type StoreWithPersist = Mutate<
  StoreApi<State & Actions>,
  [["zustand/persist", unknown]]
>;

export interface RtkAction {
  type: string;
  module: string;
  meta: {
    requestId: string;
    requestStatus: string;
    fulfilledTimeStamp: number;
    arg: {
      endpointName: string;
      type: string;
    };
  };
  id?: string;
  timestamp?: number;
  payload: any;
}

export interface ReactQueryAction {
  type: string;
  module: string;
  meta:
    | UseQueryOptions<any, any, any, any>
    | UseMutationOptions<any, any, any, any>;
  requestId: string;
  timestamp?: number;
  payload: any;
}

export type Action = RtkAction | ReactQueryAction;

export interface ActionsStore {
  name: string;
  actions: Action[];
}

export type TRevalidationQueueItem = {
  tags: string[];
  timestamp: number;
};

export interface State {
  stores: {
    [key in string]: ActionsStore;
  };
  revalidatePromises: {
    [key in string]: string[];
  };
  revalidationQueue: TRevalidationQueueItem[];
}

export interface Actions {
  addStore: (store: ActionsStore) => void;
  addAction: (action: Action) => void;
  addRevalidatePromise: (promise: string) => void;
  removeRevalidatePromise: (promise: string) => void;
  revalidatePromisesSusscess: () => boolean;
  getActionsFromStoreByName: (name: string) => ActionsStore["actions"];
  addRevalidationQueueItem: (revalidationItem: TRevalidationQueueItem) => void;
  reset: () => void;
}

const initialState: State = {
  stores: {},
  revalidatePromises: {},
  revalidationQueue: [],
};

const name = "global-actions-store";

export const globalActionsStore = create<State & Actions>()(
  devtools(
    immer(
      persist(
        (set: any, get: any) => ({
          ...initialState,
          addRevalidatePromise: (promise: string) => {
            set((state: State) => {
              state.revalidatePromises[promise] = [];
            });
          },
          removeRevalidatePromise: (promise: string) => {
            set((state: State) => {
              delete state.revalidatePromises[promise];
            });
          },
          addStore: (store: ActionsStore) => {
            set((state: State) => {
              state.stores[store.name] = store;
            });
          },
          getActionsFromStoreByName: (name: string) => {
            return get().stores[name]?.actions;
          },
          revalidatePromisesSusscess: () => {
            const revalidatePromises = get().revalidatePromises;

            return Object.keys(revalidatePromises).length === 0;
          },
          addAction: (action: Action) => {
            set((state: State) => {
              if (!state.stores[action.module]) {
                state.stores[action.module] = {
                  name: action.module,
                  actions: [],
                };
              }

              state.stores[action.module].actions = [
                ...state.stores[action.module].actions.slice(-10),
                action,
              ];
            });

            window.dispatchEvent(new StorageEvent("storage", { key: name }));
          },
          addRevalidationQueueItem: (
            revalidationItem: TRevalidationQueueItem,
          ) => {
            const exists = get().revalidationQueue.find(
              (item: TRevalidationQueueItem) => {
                return (
                  JSON.stringify(item) === JSON.stringify(revalidationItem)
                );
              },
            );

            if (exists) {
              return;
            }

            set((state: State) => {
              state.revalidationQueue.push(revalidationItem);
            });
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
