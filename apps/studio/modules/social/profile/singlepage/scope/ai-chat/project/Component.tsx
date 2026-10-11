"use client";

import type { ReactNode } from "react";

import { ProjectProvider } from "./Profile";
import { useProfiles } from "./Profiles";
export interface IProjectScopeProps {
  variant?: string;
  profileId: string;
  children: ReactNode;
}
export function Component({
  variant = "scope-ai-chat-project",
  profileId,
  children,
}: IProjectScopeProps) {
  const { projects } = useProfiles();
  if (!projects.some((profile) => profile.id === profileId))
    return (
      <main
        role="status"
        className="p-6"
        data-module="social"
        data-model="profile"
        data-variant={variant}
      >
        Project profile unavailable. Choose a project from your profile.
      </main>
    );
  return (
    <ProjectProvider profileId={profileId}>
      <div
        data-ds-block="social.profile.scope-ai-chat-project"
        data-profile-id={profileId}
        data-module="social"
        data-model="profile"
        data-variant={variant}
      >
        {children}
      </div>
    </ProjectProvider>
  );
}
