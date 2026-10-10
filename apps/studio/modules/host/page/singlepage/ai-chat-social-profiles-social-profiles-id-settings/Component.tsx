"use client";

import { type ReactNode as ReactNode } from "react";
import { Component as HostModuleLayout } from "../../../layout/index";
import { Component as SocialModuleProfile } from "../../../../social/profile/index";
import { Component as RbacModuleSubject } from "../../../../rbac/subject/index";
interface IPanelHeaderProps {
  title: string;
  label: string;
  navigation?: ReactNode;
  actions?: ReactNode;
}
function PanelHeader({ title, label, navigation, actions }: IPanelHeaderProps) {
  return (
    <header className="sticky top-18 z-10 flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-sps-line bg-sps-white p-4 @[760px]/workspace:top-0">
      <div className="flex min-w-0 items-center gap-3">
        {navigation}
        <div className="min-w-0">
          <p className={`text-xs ${kit.muted}`}>{label}</p>
          <h2 className="mt-1 break-words text-base font-semibold">{title}</h2>
        </div>
      </div>
      {actions}
    </header>
  );
}
export interface IProfilePageProps {
  profileId: string;
}
export function Component({ profileId }: IProfilePageProps) {
  return (
    <HostModuleLayout
      variant="ai-chat-dashboard"
      page="chat"
      profileSelect={(props) => (
        <SocialModuleProfile
          profileId={profileId}
          {...props}
          variant="select-ai-chat-project"
        />
      )}
      subjectAccount={({ onNavigate }) => (
        <RbacModuleSubject
          variant="account"
          showTokens
          page="chat"
          onNavigate={onNavigate}
        />
      )}
    >
      <SocialModuleProfile
        variant="overview-ai-chat-project"
        profileId={profileId}
        selected="settings"
      >
        {(navigation) => (
          <section
            aria-label="Project settings"
            className="flex min-h-0 flex-1 flex-col"
          >
            <PanelHeader
              title="Project settings"
              label="Project"
              navigation={navigation}
            />
            <SocialModuleProfile
              variant="settings-ai-chat-project"
              profileId={profileId}
            />
          </section>
        )}
      </SocialModuleProfile>
    </HostModuleLayout>
  );
}
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sps-graphite";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  muted: "text-sps-muted",
};
