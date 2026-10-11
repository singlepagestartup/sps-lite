"use client";
import { Component as WebsiteBuilderModuleFeature } from "../../../../../website-builder/feature/index";

import type IconGlyphs from "../../../../../website-builder/feature/singlepage/icon/icons.json";
import type { IProjectFile } from "../../../../../social/profile/singlepage/scope/ai-chat/project/state";
function Icon(props: {
  name: keyof typeof IconGlyphs;
  size?: 20 | 24;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}) {
  return <WebsiteBuilderModuleFeature {...props} variant="icon" />;
}

export interface IFilePreviewProps {
  variant?: string;
  file: IProjectFile;
  compact?: boolean;
}
export function Component({
  variant = "overview-ai-chat",
  file,
  compact,
}: IFilePreviewProps) {
  return (
    <figure
      data-id={file.id}
      data-ds-block="file-storage.file.overview-ai-chat"
      className="min-w-0 overflow-hidden rounded-xl border border-sps-line bg-sps-white"
      data-module="file-storage"
      data-model="file"
      data-variant={variant}
    >
      {file.mimeType?.startsWith("image/") && file.fileUrl ? (
        <a
          href={file.fileUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${file.name}`}
          className={`block ${kit.focus}`}
        >
          <img
            src={file.fileUrl}
            alt={file.name}
            loading="lazy"
            className={`w-full object-contain bg-sps-grey ${compact ? "h-24" : "max-h-64"}`}
          />
        </a>
      ) : null}
      <figcaption
        className={`min-w-0 gap-2 p-3 text-xs ${compact ? "grid grid-cols-[1rem_minmax(0,1fr)]" : "flex items-center"}`}
      >
        <Icon
          name={file.mimeType?.startsWith("image/") ? "image" : "file-text"}
          className="size-4 shrink-0"
        />
        <span className="min-w-0 flex-1 break-words">{file.name}</span>
        {file.fileUrl && (
          <a
            href={file.fileUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${file.name}`}
            className={`${kit.plain} min-h-9 shrink-0 px-2 ${compact ? "col-span-2 justify-self-end" : ""}`}
          >
            Open
          </a>
        )}
        {file.fileUrl && (
          <a
            href={file.fileUrl}
            download={file.name}
            aria-label={`Download ${file.name}`}
            className={`${kit.plain} min-h-9 shrink-0 px-2 ${compact ? "col-span-2 justify-self-end" : ""}`}
          >
            <Icon name="arrow-down" className="size-4" />
            {compact && "Download"}
          </a>
        )}
      </figcaption>
    </figure>
  );
}
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sps-graphite";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  plain: `${buttonBase} text-sps-muted enabled:hover:text-sps-graphite ${focus}`,
  focus: focus,
};
