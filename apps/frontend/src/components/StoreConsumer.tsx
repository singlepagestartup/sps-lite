"use client";

import React, { useEffect } from "react";
import { api as userApi } from "@sps/sps-rbac-frontend/lib/redux/entities/user/api";
import { slice as userSlice } from "@sps/sps-rbac-frontend/lib/redux/auth/slice";
import { useDispatch } from "react-redux";

export default function StoreConsumer() {
  const dispatch = useDispatch();
  const { data: me, refetch } = userApi.useGetMeQuery({});

  useEffect(() => {
    dispatch(userSlice.actions.setAnonymusUsername());
  }, []);

  return (
    <div className="relative mx-auto px-10 py-5 bg-gray-200 max-w-7xl flex flex-col gap-2">
      <p>Me: {me?.email}</p>
      <button
        className="px-8 py-3 rounded-md bg-orange-400 text-white"
        onClick={() => {
          refetch();
        }}
      >
        Refetch user
      </button>
    </div>
  );
}
