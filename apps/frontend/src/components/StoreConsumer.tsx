"use client";

import { persistentMessageQuery } from "@sps/store";
import React, { useEffect } from "react";
import { api as userApi } from "@sps/sps-rbac-frontend/lib/redux/entities/user/api";
import { slice as userSlice } from "@sps/sps-rbac-frontend/lib/redux/auth/slice";
import { useDispatch } from "react-redux";

export default function StoreConsumer() {
  const messages = persistentMessageQuery((state) => state.messages);
  const stores = persistentMessageQuery((state) => state.stores);
  const states = persistentMessageQuery((state) => state.states);
  const dispatch = useDispatch();
  const { data: me } = userApi.useGetMeQuery({});

  useEffect(() => {
    dispatch(userSlice.actions.setAnonymusUsername());
  }, []);

  useEffect(() => {
    const userStore = stores.find((store) => store.name === "user");
    const state = states.find((state) => {
      return state.name === "user";
    });

    console.log(`🚀 ~ useEffect ~ userStore:`, userStore);
    console.log(`🚀 ~ useEffect ~ state:`, state);

    if (userStore) {
      const me = userStore.entity.endpoints["getMe"].select({})(
        state.getState(),
      );

      console.log(`🚀 ~ useEffect ~ me:`, me);
    }

    // console.log(`🚀 ~ StoreConsumer ~ stores:`, stores);
  }, [JSON.stringify(stores)]);

  return (
    <div className="relative mx-auto px-10 py-5 bg-gray-200 max-w-7xl flex flex-col gap-2">
      <p>Messages: {messages.length}</p>
      <p>Me: {JSON.stringify(me)}</p>
      <pre className="text-wrap">{JSON.stringify(messages)}</pre>
    </div>
  );
}
