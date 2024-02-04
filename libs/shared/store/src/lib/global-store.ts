import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IReduxApi {
  reducerPath: string;
  endpoints: {
    [key: string]: any;
  };
  getState: (...props: any) => any;
}

export interface State {
  apis: IReduxApi[];
}

const name = "global-store";

export const globalStore = create(
  devtools(
    (set: any, get: any) => ({
      apis: [] as IReduxApi[],
      addApi: (api: any) => {
        set((state: State) => {
          const existingApi = state.apis.find(
            (item: any) => item.reducerPath === api.reducerPath,
          );

          if (existingApi) {
            return state;
          }

          const newApisArray = state.apis.concat([api]);

          return { apis: newApisArray };
        });
      },
    }),
    {
      name: name,
    },
  ),
);
