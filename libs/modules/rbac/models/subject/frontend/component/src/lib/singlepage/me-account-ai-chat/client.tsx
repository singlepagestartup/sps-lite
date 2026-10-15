"use client";
import "client-only";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { Component } from "./Component";
import type { IComponentProps } from "./interface";
export default function Client(props: IComponentProps) {
  const profiles = api.socialModuleProfileFind({
    id: props.data.id,
    params: {
      filters: { and: [{ column: "variant", method: "eq", value: "default" }] },
    },
    reactQueryOptions: { retry: false },
  });
  const identities = api.identityFind({
    id: props.data.id,
    reactQueryOptions: { retry: false },
  });
  const balance = api.billingModuleBalance({ id: props.data.id });
  const profile = profiles.data?.[0];
  const avatar = api.socialModuleProfileFindByIdAvatarFind({
    id: props.data.id,
    socialModuleProfileId: profile?.id || "",
    reactQueryOptions: { retry: false, enabled: !!profile },
  });
  return (
    <Component
      {...props}
      accountProfile={profile}
      accountIdentities={identities.data}
      accountAvatar={avatar.data}
      accountBalance={balance.data}
    />
  );
}
