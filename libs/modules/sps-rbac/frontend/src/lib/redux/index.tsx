"use client";

import { AnyAction, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// import { rtkQueryErrorLogger } from "./rtk-query-error-logger";
import { slices } from "./slices";
import { api as userApi } from "./entities/user/api";
import { slice as authSlice } from "./auth/slice";
import { useEffect } from "react";
import { persistentMessageQuery } from "@sps/store";
import { entities } from "./entities";

const middlewares = [...slices.middlewares];

const store: any = configureStore({
  devTools: {
    name: "sps-rbac",
  },
  reducer: {
    ...slices.reducer,
    auth: authSlice.reducer,
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
  persistentMessageQuery.subscribe((state) => {
    const userMessages = state.messages.filter((message) => {
      const data = JSON.parse(message.data);
      return (
        message.service === "sps-rbac" &&
        data.entity === "user" &&
        data.endpoint === "getMe"
      );
    });
    const answeredMessages = userMessages.filter((message) =>
      userMessages.find((m) => m.id === message.respondedTo),
    );
    const unansweredMessages = userMessages.filter((message) => {
      return (
        !answeredMessages.find((m) => m.id === message.id) &&
        !message.respondedTo
      );
    });

    console.log(
      `🚀 ~ unansweredMessages ~ unansweredMessages:`,
      unansweredMessages.length,
    );

    if (unansweredMessages.length) {
      // // console.log(
      // //   `🚀 ~ persistentMessageQuery.subscribe ~ userMessages:`,
      // //   userMessages,
      // // );
      // const meFromReducer = slices.reducer.users(
      //   store.getState().users,
      //   "getMe",
      // ).queries.getMe?.data;
      // // const meFromReducer = store.getState().users.queries.getMe?.data;

      // console.log(
      //   `🚀 ~ persistentMessageQuery.subscribe ~ meFromReducer:`,
      //   meFromReducer,
      // );

      const meFromApi = entities["user"].endpoints["getMe"].select({})(
        store.getState(),
      );

      if (meFromApi) {
        persistentMessageQuery.getState().addMessage({
          id: Math.random().toString(),
          service: "sps-rbac",
          respondedTo: unansweredMessages[0].id,
          data: JSON.stringify({
            entity: "user",
            endpoint: "getMe",
            data: meFromApi,
          }),
        });
      }

      // console.log(
      //   `🚀 ~ persistentMessageQuery.subscribe ~ meFromApi:`,
      //   meFromApi,
      // );
    }
  });

  // useEffect(() => {
  //   console.log(`🚀 ~ useEffect ~ me:`, me);
  // }, [me]);

  return <>{children}</>;
}
