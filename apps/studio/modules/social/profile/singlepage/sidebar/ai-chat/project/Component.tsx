"use client";
import { Component as WebsiteBuilderModuleFeature } from "../../../../../../website-builder/feature/index";

import type IconGlyphs from "../../../../../../website-builder/feature/singlepage/icon/icons.json";
import { Component as ProfileSourceSidebarList } from "../../../knowledge-module/source/list/sidebar/ai-chat";
import { useProfiles } from "../../../scope/ai-chat/project/Profiles";
import {
  aiChatProfileHref,
  aiChatThreadCreateHref,
} from "../../../../../../host/layout/singlepage/ai-chat-landing/routes";
function Icon(props: {
  name: keyof typeof IconGlyphs;
  size?: 20 | 24;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}) {
  return <WebsiteBuilderModuleFeature {...props} variant="icon" />;
}

export interface IProfileSidebarProps {
  variant?: string;
  profileId: string;
  chatId?: string;
  selected: "products" | "settings" | "thread-create";
}
export function Component({
  variant = "sidebar-ai-chat-project",
  profileId,
  chatId,
  selected,
}: IProfileSidebarProps) {
  const { projects } = useProfiles();
  const name =
    projects.find((profile) => profile.id === profileId)?.name ?? "Project";
  const href = aiChatProfileHref(profileId);
  const settingsSelected = selected === "settings";
  const creatingThread = selected === "thread-create";
  return (
    <div data-module="social" data-model="profile" data-variant={variant}>
      <h1 className="mb-3 break-words pr-10 text-lg font-semibold @[760px]/workspace:pr-0">
        {name}
      </h1>
      <nav aria-label="Project navigation" className="space-y-1">
        <a
          href={`${href}/settings`}
          aria-label="Project settings"
          aria-current={settingsSelected ? "page" : undefined}
          className={`flex min-h-11 w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-white/10 ${kit.focus} ${settingsSelected ? "bg-white/15" : "text-white/80"}`}
        >
          <Icon name="gear-six" className="size-4" />
          Settings
        </a>
        <ProfileSourceSidebarList
          href={href}
          selected={!settingsSelected && !creatingThread}
        />
      </nav>
      <section
        aria-label="Project threads"
        className="mt-5 border-t border-white/10 pt-4"
      >
        <h2 className="mb-3 text-xs font-semibold text-white/60">Threads</h2>
        <a
          href={aiChatThreadCreateHref(profileId, chatId)}
          aria-current={creatingThread ? "page" : undefined}
          className={`flex min-h-11 w-full items-center gap-2 rounded-xl border border-white/15 px-3 py-2 text-left text-sm text-white/80 hover:bg-white/10 ${creatingThread ? "bg-white/15" : ""} ${kit.focus}`}
        >
          <Icon name="plus" className="size-4" />
          New thread
        </a>
      </section>
    </div>
  );
}
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sps-graphite";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  focus: focus,
};
