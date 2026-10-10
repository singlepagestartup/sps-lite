"use client";
import { Component as WebsiteBuilderModuleFeature } from "../../../../../../../website-builder/feature/index";

import type IconGlyphs from "../../../../../../../website-builder/feature/singlepage/icon/icons.json";
import { memo } from "react";
import type { IAIChatThread } from "../../../../overview/ai-chat/state";
function Icon(props: {
  name: keyof typeof IconGlyphs;
  size?: 20 | 24;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}) {
  return <WebsiteBuilderModuleFeature {...props} variant="icon" />;
}

export interface IThreadListItemProps {
  variant?: string;
  data?: IAIChatThread;
  id: string;
  name: string;
  topic?: boolean;
  selected: boolean;
  onSelect: (id: string) => void;
}
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sps-graphite";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  focus: focus,
};
export const Component = memo(function Component({
  variant = "list-item-sidebar-ai-chat",
  data,
  id,
  name,
  topic,
  selected,
  onSelect,
}: IThreadListItemProps) {
  return (
    <button
      type="button"
      data-ds-block="social.thread.list-item-sidebar-ai-chat"
      data-id={data?.id ?? id}
      data-thread-id={data?.id ?? id}
      onClick={() => onSelect(id)}
      aria-pressed={selected}
      className={`flex min-h-10 w-full min-w-0 items-center gap-2 rounded-lg px-2 py-2 text-left text-sm ${topic ? "font-medium" : "font-normal"} ${kit.focus} ${selected ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
      data-module="social"
      data-model="thread"
      data-variant={variant}
    >
      <Icon
        name={topic ? "chat-circle" : "file-text"}
        className="size-4 shrink-0 text-white/50"
      />
      <span className="min-w-0 flex-1 break-words">{name}</span>
    </button>
  );
});
