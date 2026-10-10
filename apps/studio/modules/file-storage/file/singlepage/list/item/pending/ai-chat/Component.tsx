"use client";
import { Component as WebsiteBuilderModuleFeature } from "../../../../../../../website-builder/feature/index";

import type IconGlyphs from "../../../../../../../website-builder/feature/singlepage/icon/icons.json";
import type { IProjectFile } from "../../../../../../../social/profile/singlepage/scope/ai-chat/project/state";
import { memo } from "react";
function Icon(props: {
  name: keyof typeof IconGlyphs;
  size?: 20 | 24;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}) {
  return <WebsiteBuilderModuleFeature {...props} variant="icon" />;
}

export interface IPendingFileProps {
  variant?: string;
  file: IProjectFile;
  onRemove: (id: string) => void;
}
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sps-graphite";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  focus: focus,
};
export const Component = memo(function Component({
  variant = "list-item-pending-ai-chat",
  file,
  onRemove,
}: IPendingFileProps) {
  return (
    <li
      data-ds-block="file-storage.file.list-item-pending-ai-chat"
      data-id={file.id}
      className="flex min-w-0 items-center gap-2 rounded-xl border border-sps-line bg-sps-grey p-2"
      data-module="file-storage"
      data-model="file"
      data-variant={variant}
    >
      {file.mimeType?.startsWith("image/") && file.fileUrl ? (
        <img
          src={file.fileUrl}
          alt={file.name}
          className="size-10 shrink-0 rounded-lg object-contain"
        />
      ) : (
        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-sps-white">
          <Icon name="file-text" className="size-5" />
        </span>
      )}
      <span className="min-w-0 flex-1 break-words text-xs leading-5">
        {file.name}
      </span>
      <button
        type="button"
        onClick={() => onRemove(file.id)}
        aria-label={`Remove ${file.name}`}
        className={`grid size-11 shrink-0 place-items-center rounded-lg hover:bg-sps-white ${kit.focus}`}
      >
        <Icon name="x" className="size-4" />
      </button>
    </li>
  );
});
