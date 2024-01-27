import { Mutate, StoreApi, create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

interface StoreMessage {
  id: string;
  service: string;
  data: any;
  respondedTo?: string;
}

export interface State {
  messages: StoreMessage[];
  addMessage: (message: State["messages"][number]) => void;
}

export type StoreWithPersist = Mutate<
  StoreApi<State>,
  [["zustand/persist", unknown]]
>;

const name = "persistent-message-query";

export const persistentMessageQuery = create(
  devtools(
    persist(
      (set: any, get: any) => ({
        messages: [] as StoreMessage[],
        addMessage: (message: StoreMessage) => {
          set((state: State) => {
            const newMessagesArray = [message, ...state.messages].slice(0, 3);

            return { messages: newMessagesArray };
          });

          window.dispatchEvent(new StorageEvent("storage", { key: name }));
        },
      }),
      {
        name: name,
        storage: createJSONStorage(() => localStorage),
      },
    ),
    {
      name: name,
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

withStorageDOMEvents(persistentMessageQuery);
