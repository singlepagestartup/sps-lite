"use client";
import {
  Component as Subject,
  projectHref,
} from "@sps/rbac/models/subject/frontend/component";
import type { IComponentPropsExtended } from "./interface";
import { useCallback, useState } from "react";
import { Component as Projects } from "./Projects";
import { Component as WebsiteBuilderWidget } from "@sps/website-builder/models/widget/frontend/component";
export function Component(props: IComponentPropsExtended) {
  const [creating, setCreating] = useState(false);
  const openCreate = useCallback(() => setCreating(true), []);
  const closeCreate = useCallback(() => setCreating(false), []);
  return (
    <div
      data-module="rbac"
      data-model="widget"
      data-variant={props.variant}
      data-id={props.data?.id}
      className="w-full min-w-0"
    >
      <Subject
        isServer={false}
        variant="authentication-me-default"
        skeleton={<Projects projects={[]} pending />}
        fallback={
          <Projects
            projects={[]}
            error
            onRetry={() => window.location.reload()}
          />
        }
        unauthenticatedRedirectHref={`/${props.language || "en"}/ai-chat/sign-in`}
      >
        {({ data, authenticated }) => {
          if (!data || !authenticated) return null;
          return (
            <Subject
              isServer={false}
              variant="me-social-module-profile-list-ai-chat"
              data={data}
              loading={<Projects projects={[]} pending onCreate={openCreate} />}
              renderError={({ retry }) => (
                <Projects
                  projects={[]}
                  error
                  onRetry={retry}
                  onCreate={openCreate}
                />
              )}
              renderProjects={({ projects }) => {
                return (
                  <Projects
                    variant={props.variant}
                    creating={creating}
                    onCreate={openCreate}
                    onCancel={closeCreate}
                    projects={projects.map((project) => ({
                      id: project.profile.id,
                      name:
                        project.profile.title?.[props.language || "en"] ||
                        project.profile.title?.en ||
                        "Untitled project",
                      href: `/${props.language || "en"}${projectHref(project)}`,
                    }))}
                  >
                    <WebsiteBuilderWidget
                      isServer={false}
                      variant="content-ai-chat-profile-create"
                      data={props.projectCreateWidget}
                    >
                      <Subject
                        isServer={false}
                        variant="me-social-module-profile-create-ai-chat"
                        data={data}
                        projects={projects}
                        hideBackLink
                      />
                    </WebsiteBuilderWidget>
                  </Projects>
                );
              }}
            />
          );
        }}
      </Subject>
    </div>
  );
}
