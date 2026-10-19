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
          >
            {({ data: profiles }) =>
              profiles.map((profile) => (
                <Subject
                  key={profile.id}
                  isServer={false}
                  variant="social-module-profile-chat-list-default"
                  data={subject}
                  language={props.language}
                  socialModuleProfile={profile}
                />
              ))
            }
          </Subject>
        ) : null
      }
    </Subject>
  );
}
