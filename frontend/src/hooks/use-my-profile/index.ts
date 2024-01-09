"use client";

import { useSelector } from "react-redux";
import { useMemo } from "react";
import { api as userApi } from "~redux/services/backend/extensions/users-permissions/api/user/api";
import { populate as userPopulate } from "~redux/services/backend/extensions/users-permissions/api/user/populate";

export default function useMyProfile() {
  const username = useSelector((state: any) => state.auth.username);

  const {
    data: myProfileByMe,
    error: meError,
    refetch: refetchMe,
    isUninitialized,
  } = userApi.useGetMeQuery(undefined, { skip: !username });

  const { data: filledProfile, refetch: refetchProfileById } =
    userApi.useGetByIdQuery(
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
