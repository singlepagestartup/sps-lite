import { FileText } from "lucide-react";
import { NEXT_PUBLIC_API_SERVICE_URL } from "@sps/shared-utils";
import type { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  const file = props.data;
  const src = /^https?:\/\//i.test(file.file)
    ? file.file
    : `${NEXT_PUBLIC_API_SERVICE_URL}/public${file.file}`;
  const title =
    file.adminTitle || file.alt || file.file.split("/").pop() || "File";
  const extension = (
    file.extension ||
    file.file.split("?")[0].split(".").pop() ||
    ""
  ).toLowerCase();
  const isImage =
    file.mimeType?.startsWith("image/") ||
    (!file.mimeType &&
      ["png", "jpg", "jpeg", "gif", "webp", "svg", "avif"].includes(extension));
  return (
    <a
      href={src}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${title}`}
      data-module="file-storage"
      data-model="file"
      data-variant={props.variant}
      data-id={file.id}
      className="block overflow-hidden rounded-xl border border-border bg-card focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <div className="flex h-24 items-center justify-center bg-neutral-500">
        {isImage ? (
          <img
            src={src}
            alt=""
            loading="lazy"
            className="h-full w-full object-contain"
          />
        ) : (
          <FileText className="size-7 text-background" />
        )}
      </div>
      <p title={title} className="truncate px-3 py-2 text-xs font-medium">
        {title}
      </p>
    </a>
  );
}
