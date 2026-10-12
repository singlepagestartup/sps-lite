"use client";
import { memo, useCallback, useMemo } from "react";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { Component as Source } from "@sps/knowledge/models/source/frontend/component";
import { Component as File } from "@sps/file-storage/models/file/frontend/component";
import type { IComponentPropsExtended } from "./interface";
export const Component = memo(function Component({
  data,
  project,
  source,
  onDiscuss,
}: IComponentPropsExtended) {
  const scope = useMemo(
    () => ({
      id: data.id,
      socialModuleProfileId: project.requesterProfileId,
      socialModuleChatId: project.chat.id,
      targetSocialModuleProfileId: project.profile.id,
    }),
    [data.id, project.requesterProfileId, project.chat.id, project.profile.id],
  );
  const update =
    api.socialModuleProfileFindByIdChatFindByIdProfileFindByIdKnowledgeSourceFindByIdUpdate(
      { ...scope, knowledgeModuleSourceId: source.id },
    );
  const files =
    api.socialModuleProfileFindByIdChatFindByIdProfileFindByIdKnowledgeSourceFindByIdFilesUpdate(
      {},
    );
  const attachments =
    api.socialModuleProfileFindByIdChatFindByIdProfileFindByIdKnowledgeSourceFindByIdFilesFind(
      { ...scope, knowledgeModuleSourceId: source.id },
    );
  const discuss = useCallback(
    () => onDiscuss(source.id),
    [onDiscuss, source.id],
  );
  const save = useCallback(
    async (data: { title: string; content: string }) => {
      const result = await update.mutateAsync({
        ...scope,
        knowledgeModuleSourceId: source.id,
        data,
      });
      return result.indexingError
        ? `Saved; indexing failed: ${result.indexingError}`
        : "Saved";
    },
    [update.mutateAsync, scope, source.id],
  );
  const attach = useCallback(
    async (data: FileList) => {
      const result = await files.mutateAsync({
        ...scope,
        knowledgeModuleSourceId: source.id,
        data: { files: Array.from(data) },
      });
      if (result.processingError)
        throw new Error(
          `Files saved; analysis failed: ${result.processingError}`,
        );
    },
    [files.mutateAsync, scope, source.id],
  );
  return (
    <Source
      isServer={false}
      variant="id-ai-chat"
      data={source}
      onDiscuss={discuss}
      attachments={
        <div className="mt-4 border-t border-border pt-3">
          <p className="mb-3 text-xs text-muted-foreground">
            Files · {attachments.data?.length || 0}
          </p>
          {attachments.error && (
            <p role="alert" className="text-xs text-destructive">
              {attachments.error.message}
            </p>
          )}
          {attachments.data?.map(({ file }) => (
            <File
              key={file.id}
              isServer={false}
              variant="default"
              language="en"
              data={file}
            />
          ))}
        </div>
      }
      onSave={save}
      onAttach={attach}
    />
  );
});
