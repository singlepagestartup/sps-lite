"use client";

import { useSelector } from "react-redux";
import { useMemo } from "react";
import { api as userApi } from "@sps/sps-rbac-models-user-frontend-api-client";
import { populate as userPopulate } from "@sps/sps-rbac-models-user-contracts-extended";

export function useMyProfile() {
  const username = useSelector((state: any) => {
    return state.auth?.username;
  });

  const {
    data: myProfileByMe,
    error: meError,
    refetch: refetchMe,
    isUninitialized,
  } = userApi.client.useGetMeQuery(undefined, { skip: !username });

  const { data: filledProfile, refetch: refetchProfileById } =
    userApi.client.useFindOneQuery(
      { id: myProfileByMe?.id, populate: userPopulate },
      {
        skip: !myProfileByMe?.id,
        pollingInterval: 60000,
      },
    );

  const profile = useMemo(() => {
    const me = username
      ? { ...(myProfileByMe || {}), ...(filledProfile || {}) }
      : {};

    const refetch = () => {
      refetchMe();
      refetchProfileById();
    };

    return { me, refetch };
  }, [myProfileByMe, filledProfile]);

  return profile;
}
