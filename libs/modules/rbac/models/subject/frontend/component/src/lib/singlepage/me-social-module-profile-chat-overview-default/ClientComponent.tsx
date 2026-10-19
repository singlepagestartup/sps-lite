"use client";
import { Component as Subject } from "@sps/rbac/models/subject/frontend/component";
import type { IComponentProps } from "./interface";
export function Component(props: IComponentProps) {
  return (
    <Subject isServer={false} variant="authentication-me-default">
      {({ data: subject }) =>
        subject ? (
          <Subject
            isServer={false}
            variant="social-module-profile-find"
            data={subject}
            language={props.language}
            apiProps={{
              params: { socialModuleChatId: props.socialModuleChatId },
            }}
          >
            {({ data: profiles }) => {
              const profile =
                profiles.find((p) => p.variant === "default") || profiles[0];
              return profile ? (
                <Subject
                  isServer={false}
                  variant="social-module-profile-chat-overview-default"
                  data={subject}
                  language={props.language}
                  socialModuleProfile={profile}
                  socialModuleChatId={props.socialModuleChatId}
                  socialModuleThreadId={props.socialModuleThreadId}
                />
              ) : (
                <p role="status">Chat unavailable.</p>
              );
            }}
          </Subject>
        ) : null
      }
    </Subject>
  );
}
