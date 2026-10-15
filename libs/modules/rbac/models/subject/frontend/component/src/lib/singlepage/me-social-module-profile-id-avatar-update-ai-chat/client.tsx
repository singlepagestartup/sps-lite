"use client";
import "client-only";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { Component } from "./Component";
import type { IComponentProps } from "./interface";
export default function Client(props: IComponentProps) {
  const subjectId = props.data.id;
  const profileId = props.profile.id;
  const preview = api.socialModuleProfileFindByIdAvatarFind({
    id: subjectId,
    socialModuleProfileId: profileId,
    reactQueryOptions: { retry: false },
  });
  return (
    <Component
      {...props}
      previewRead={{
        data: preview.data,
        isPending: preview.isPending,
        isFetching: preview.isFetching,
        isError: preview.isError,
        error: preview.error ? { message: preview.error.message } : undefined,
        refetch: () => {
          void preview.refetch();
        },
      }}
    />
  );
}
