"use client";
import { Component as Subject } from "@sps/rbac/models/subject/frontend/component";
import type { IComponentPropsExtended } from "./interface";
export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="rbac"
      data-model="widget"
      data-variant={props.variant}
      data-id={props.data?.id}
      className="w-full min-w-0"
    >
      <Subject
        isServer={props.isServer}
        variant="authentication-me-default"
        unauthenticatedRedirectHref={`/${props.language || "en"}/ai-chat/sign-in`}
      >
        {({ data, authenticated }) => {
          if (!data || !authenticated) return null;
          return (
            <Subject
              isServer={props.isServer}
              variant="me-social-module-profile-list-ai-chat"
              data={data}
              loading={
                <Subject
                  isServer={false}
                  variant="me-social-module-profile-create-ai-chat"
                  data={data}
                  pending
                />
              }
              renderProjects={({ projects }) => {
                return (
                  <Subject
                    isServer={props.isServer}
                    variant="me-social-module-profile-create-ai-chat"
                    data={data}
                    projects={projects}
                  />
                );
              }}
            />
          );
        }}
      </Subject>
    </div>
  );
}
