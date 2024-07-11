import { Mutate, StoreApi, create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type StoreWithPersist = Mutate<
  StoreApi<State & Actions>,
  [["zustand/persist", unknown]]
>;

export interface Action {
  type: string;
  name: string;
  requestId: string;
  timestamp: number;
  props: any;
  result: any;
}

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
  revalidationQueue: TRevalidationQueueItem[];
}

export interface Actions {
  addAction: (action: Action) => void;
  getActionsFromStoreByName: (name: string) => ActionsStore["actions"];
  addRevalidationQueueItem: (revalidationItem: TRevalidationQueueItem) => void;
  reset: () => void;
}

const initialState: State = {
  stores: {},
  revalidationQueue: [],
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
          addAction: (action: Action) => {
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
