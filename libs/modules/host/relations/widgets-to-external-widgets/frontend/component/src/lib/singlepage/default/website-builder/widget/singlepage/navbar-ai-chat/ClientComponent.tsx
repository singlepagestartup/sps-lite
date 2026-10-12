"use client";

import { Component as Subject } from "@sps/rbac/models/subject/frontend/component";
import type { IModel } from "@sps/rbac/models/subject/sdk/model";

interface IComponentProps {
  data: IModel;
  language: string;
  profileId?: string;
  chatId?: string;
  settingsSelected: boolean;
}

export function Component(props: IComponentProps) {
  return (
    <>
      <Subject
        isServer={false}
        variant="me-social-module-profile-select-ai-chat"
        data={props.data}
        profileId={props.profileId}
        chatId={props.chatId}
        language={props.language}
      />
      <Subject
        isServer={false}
        variant="me-account-ai-chat"
        data={props.data}
        language={props.language}
        settingsSelected={props.settingsSelected}
      />
    </>
  );
}
