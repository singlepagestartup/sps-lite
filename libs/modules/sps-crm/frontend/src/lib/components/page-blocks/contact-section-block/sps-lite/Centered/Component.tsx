"use client";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Form } from "../../../../form";
import { IPageBlock } from "../..";
import { createNotification } from "@sps/ui-adapter";
// import { Mutate, StoreApi, create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";
// import { useEffect } from "react";
// import { globalStore, persistentMessageQuery } from "@sps/store";
// import { useEffect, useState } from "react";
import { api as userApi } from "@sps/sps-rbac-frontend/lib/redux/entities/user/api";
import { useMyProfile } from "@sps/sps-rbac-frontend";

export default function Component(props: IPageBlock) {
  const { me } = useMyProfile();
  // const apis = globalStore((state) => state.apis);
  // const messages = persistentMessageQuery((state) => state.messages);
  // const stores = persistentMessageQuery((state) => state.stores);
  // const states = persistentMessageQuery((state) => state.states);
  // const [me, setMe] = useState<any>(null);
  // const { data: me } = userApi.useGetMeQuery({});

  function successCallbackAction() {
    createNotification({
      title: "Form was successfully submitted",
      className: "",
      duration: 5000,
    });
  }

  // useEffect(() => {
  //   const userApi = apis.find((api) => api.reducerPath === "users");
  //   console.log(`🚀 ~ useEffect ~ userApi:`, userApi);
  //   const me = userApi?.endpoints["getMe"]?.select({})(userApi.getState());
  //   console.log(`🚀 ~ useEffect ~ me:`, me);

  //   // const userStore = stores.find((store) => store.name === "user");
  //   // const state = states.find((state) => {
  //   //   return state.name === "user";
  //   // });

  //   // if (userStore) {
  //   //   const me = userStore.entity.endpoints["getMe"].select({})(
  //   //     state.getState(),
  //   //   );

  //   //   if (me) {
  //   //     setMe(me.data);
  //   //   }

  //   //   // console.log(`🚀 ~ useEffect ~ me:`, me);
  //   // }

  //   // console.log(`🚀 ~ StoreConsumer ~ stores:`, stores);
  // }, [JSON.stringify(apis)]);

  return (
    <div className="relative mx-auto max-w-7xl overflow-hidden bg-white py-16 px-6 lg:px-8 lg:py-24">
      <div className="flex flex-col gap-6 pb-20">
        <p>Me: {me?.email}</p>
        {/* <div className="flex gap-4">
          <button
            className="py-4 px-10 bg-blue-500 text-white rounded-md"
            onClick={() => {
              persistentMessageQuery.getState().addMessage({
                id: Math.random().toString(),
                service: "sps-crm",
                data: JSON.stringify({}),
              });
            }}
          >
            Send random message
          </button>
          <button
            className="py-4 px-10 bg-green-500 text-white rounded-md"
            onClick={() => {
              persistentMessageQuery.getState().addMessage({
                id: Math.random().toString(),
                service: "sps-rbac",
                data: JSON.stringify({
                  entity: "user",
                  endpoint: "getMe",
                }),
              });
            }}
          >
            Send rbac message
          </button>
          <button
            className="py-4 px-10 bg-purple-500 text-white rounded-md"
            onClick={() => {
              persistentMessageQuery.getState().addMessage({
                id: Math.random().toString(),
                service: "sps-rbac",
                respondedTo: messages[messages.length - 1].id,
                data: JSON.stringify({
                  entity: "user",
                  endpoint: "getMe",
                }),
              });
            }}
          >
            Answer rbac message
          </button>
        </div> */}
      </div>
      <div className="text-center">
        {props.title ? (
          <ReactMarkdown className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {props.title}
          </ReactMarkdown>
        ) : null}
        {props.description ? (
          <ReactMarkdown className="mt-4 text-lg leading-6 text-gray-500">
            {props.description}
          </ReactMarkdown>
        ) : null}
      </div>
      <div className="mt-12">
        {props.form ? (
          <Form {...props.form} successCallback={successCallbackAction} />
        ) : null}
      </div>
    </div>
  );
}
