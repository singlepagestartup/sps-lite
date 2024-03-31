import { Mutate, StoreApi, create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

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
    arg: {
      endpointName: string;
      type: string;
    };
  };
  payload: any;
}

export interface RtkStore {
  name: string;
  actions: RtkAction[];
}

export interface State {
  stores: {
    [key in string]: RtkStore;
  };
  revalidatePromises: {
    [key in string]: string[];
  };
}

export interface Actions {
  addStore: (store: RtkStore) => void;
  addAction: (action: RtkAction) => void;
  addRevalidatePromise: (promise: string) => void;
  removeRevalidatePromise: (promise: string) => void;
  revalidatePromisesSusscess: () => boolean;
  reset: () => void;
}

const initialState: State = {
  stores: {},
  revalidatePromises: {},
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
          addStore: (store: RtkStore) => {
            set((state: State) => {
              state["stores"][store.name] = store;
            });
          },
          revalidatePromisesSusscess: () => {
            const revalidatePromises = get().revalidatePromises;

            return Object.keys(revalidatePromises).length === 0;
          },
          addAction: (action: RtkAction) => {
            set((state: State) => {
              state.stores[action.module] = {
                ...state.stores[action.module],
                actions: [
                  ...state.stores[action.module].actions.slice(-2),
                  action,
                ],
              };
            });

            window.dispatchEvent(new StorageEvent("storage", { key: name }));
          },
          reset: () => {
            set(initialState);
          },
        }),
        {
          name,
          storage: createJSONStorage(() => localStorage),
        },
      ),
    ),
    {
      name,
    },
  ),
);

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
