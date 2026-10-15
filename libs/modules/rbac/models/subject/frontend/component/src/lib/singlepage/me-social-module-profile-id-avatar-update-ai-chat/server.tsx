"use server";
import "server-only";
import { api } from "@sps/rbac/models/subject/sdk/server";
import { Component } from "./Component";
import type { IComponentProps } from "./interface";
export default async function Server(props: IComponentProps) {
  const subjectId = props.data.id;
  const profileId = props.profile.id;
  try {
    const data = await api.socialModuleProfileFindByIdAvatarFind({
      id: subjectId,
      socialModuleProfileId: profileId,
      options: props.apiProps?.options,
    });
    return (
      <Component
        {...props}
        previewRead={{ data, isPending: false, isError: false }}
      />
    );
  } catch (error) {
    return (
      <Component
        {...props}
        previewRead={{
          isPending: false,
          isError: true,
          error: {
            message:
              error instanceof Error
                ? error.message
                : "Data could not be loaded.",
          },
        }}
      />
    );
  }
}
