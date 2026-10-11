"use client";

import { Component as WebsiteBuilderModuleFeature } from "../../../../../website-builder/feature";
import type { IAIChatSource } from "../../../../profile/singlepage/scope/ai-chat/project/models";
import { threadDocumentMarkdown } from "../../id/ai-chat/state";

export interface IThreadDownloadProps {
  variant?: string;
  threadId: string;
  fileName: string;
  sources: IAIChatSource[];
}
export function Component({
  variant = "download-ai-chat",
  threadId,
  fileName,
  sources,
}: IThreadDownloadProps) {
  function download() {
    const url = URL.createObjectURL(
      new Blob([threadDocumentMarkdown(fileName, sources)], {
        type: "text/markdown;charset=utf-8",
      }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = /\.md$/i.test(fileName) ? fileName : `${fileName}.md`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <button
      type="button"
      data-module="social"
      data-model="thread"
      data-variant={variant}
      data-thread-id={threadId}
      data-knowledge-source-ids={sources.map((source) => source.id).join(" ")}
      aria-label={`Download ${fileName}`}
      onClick={download}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-sps-line bg-sps-white px-5 py-2 text-sm font-semibold transition hover:bg-sps-grey focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sps-graphite"
    >
      <WebsiteBuilderModuleFeature variant="icon" name="arrow-down" />
      .md
    </button>
  );
}
