"use client";
import { Component as WebsiteBuilderModuleFeature } from "../../../../../../website-builder/feature/index";

import type IconGlyphs from "../../../../../../website-builder/feature/singlepage/icon/icons.json";
import type { IProjectAgent } from "../../overview/ai-chat/resolver";
function Icon(props: {
  name: keyof typeof IconGlyphs;
  size?: 20 | 24;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}) {
  return <WebsiteBuilderModuleFeature {...props} variant="icon" />;
}

export interface IAgentAvatarProps {
  agent: IProjectAgent;
  onSelect: (agent: IProjectAgent) => void;
}
export function Component({ agent, onSelect }: IAgentAvatarProps) {
  return (
    <button
      type="button"
      data-ds-block="social.profile.agent-avatar-ai-chat"
      data-module="social"
      data-model="profile"
      data-id={agent.id}
      data-variant="agent-avatar-ai-chat"
      onClick={() => onSelect(agent)}
      aria-label={`About ${agent.name}`}
      title={`About ${agent.name}`}
      className={`grid size-8 shrink-0 place-items-center rounded-lg bg-sps-green text-sps-graphite transition hover:bg-sps-green/80 ${kit.focus}`}
    >
      <Icon name="robot" className="size-4" />
    </button>
  );
}
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sps-graphite";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  focus: focus,
};
