"use client";

import { AnyAction, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// import { rtkQueryErrorLogger } from "./rtk-query-error-logger";
import { slices } from "./slices";
import { api as userApi } from "../models/user/api/client";
import { useEffect } from "react";
import { globalStore, persistentMessageQuery } from "@sps/store";

const middlewares = [...slices.middlewares];

const store: any = configureStore({
  devTools: {
    name: "sps-rbac",
  },
  reducer: {
    ...slices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  // slices.reducer.users();
  // store.dispatch(authSlice.actions.setAuth({ isAuthenticated: true }));

  return (
    <Provider store={store}>
      <Observer>{children}</Observer>
    </Provider>
  );
}

function Observer({ children }: { children: React.ReactNode }) {
  // persistentMessageQuery.subscribe((state) => {
  //   const userMessages = state.messages.filter((message) => {
  //     const data = JSON.parse(message.data);
  //     return (
  //       message.service === "sps-rbac" &&
  //       data.entity === "user" &&
  //       data.endpoint === "getMe"
  //     );
  //   });
  //   const answeredMessages = userMessages.filter((message) =>
  //     userMessages.find((m) => m.id === message.respondedTo),
  //   );
  //   const unansweredMessages = userMessages.filter((message) => {
  //     return (
  //       !answeredMessages.find((m) => m.id === message.id) &&
  //       !message.respondedTo
  //     );
  //   });

  //   // console.log(
  //   //   `🚀 ~ unansweredMessages ~ unansweredMessages:`,
  //   //   unansweredMessages.length,
  //   // );

  //   if (unansweredMessages.length) {
  //     // // console.log(
  //     // //   `🚀 ~ persistentMessageQuery.subscribe ~ userMessages:`,
  //     // //   userMessages,
  //     // // );
  //     // const meFromReducer = slices.reducer.users(
  //     //   store.getState().users,
  //     //   "getMe",
  //     // ).queries.getMe?.data;
  //     // // const meFromReducer = store.getState().users.queries.getMe?.data;
  //     // console.log(
  //     //   `🚀 ~ persistentMessageQuery.subscribe ~ meFromReducer:`,
  //     //   meFromReducer,
  //     // );
  //     // const meFromApi = entities["user"].endpoints["getMe"].select({})(
  //     //   store.getState(),
  //     // );
  //     // if (meFromApi) {
  //     //   persistentMessageQuery.getState().addMessage({
  //     //     id: Math.random().toString(),
  //     //     service: "sps-rbac",
  //     //     respondedTo: unansweredMessages[0].id,
  //     //     data: JSON.stringify({
  //     //       entity: "user",
  //     //       endpoint: "getMe",
  //     //       data: meFromApi,
  //     //     }),
  //     //   });
  //     // }
  //     // console.log(
  //     //   `🚀 ~ persistentMessageQuery.subscribe ~ meFromApi:`,
  //     //   meFromApi,
  //     // );
  //   }

  //   const stores = state.stores.filter((store) => store.name === "user");
  //   const states = state.states.filter((state) => state.name === "user");

  //   if (!stores.length) {
  //     persistentMessageQuery.setState({
  //       ...state,
  //       stores: [
  //         ...state.stores,
  //         {
  //           name: "user",
  //           entity: entities["user"],
  //         },
  //       ],
  //     });
  //   }

  //   if (!states.length) {
  //     persistentMessageQuery.setState({
  //       ...state,
  //       states: [
  //         ...state.states,
  //         {
  //           name: "user",
  //           getState: store.getState,
  //         },
  //       ],
  //     });
  //   }
  // });

  // useEffect(() => {
  //   console.log(`🚀 ~ useEffect ~ globalStore:`, globalStore);
  //   globalStore.getState().addApi({ ...userApi, getState: store.getState });
  //   console.log(`🚀 ~ useEffect ~ userApi:`, userApi);
  // }, []);

  return <>{children}</>;
}
