"use client";
import { Component as WebsiteBuilderModuleFeature } from "../../../../../../../website-builder/feature/index";

import type IconGlyphs from "../../../../../../../website-builder/feature/singlepage/icon/icons.json";
import { memo } from "react";
import { useSource } from "../../../../overview/document/ai-chat/Source";
function Icon(props: {
  name: keyof typeof IconGlyphs;
  size?: 20 | 24;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}) {
  return <WebsiteBuilderModuleFeature {...props} variant="icon" />;
}

export interface ISourceDocumentLinkProps {
  variant?: string;
  selected: boolean;
  href: string;
}
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sps-graphite";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  focus: focus,
};
export const Component = memo(function Component({
  variant = "list-item-document-ai-chat",
  selected,
  href,
}: ISourceDocumentLinkProps) {
  const { source } = useSource();
  return (
    <a
      href={href}
      data-ds-block="knowledge.source.list-item-document-ai-chat"
      data-source-ids={source.id}
      aria-current={selected ? "page" : undefined}
      className={`flex min-h-10 w-full min-w-0 items-center gap-2 rounded-lg px-2 py-2 text-left text-sm ${kit.focus} ${selected ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
      data-module="knowledge"
      data-model="source"
      data-variant={variant}
    >
      <Icon name="file-text" className="size-4 shrink-0 text-white/50" />
      Products.md
    </a>
  );
});
