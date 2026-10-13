import type { Service as SubjectService } from "../../index";
import type {
  IModel,
  IChatMessage,
} from "@sps/social/models/message/sdk/model";
import { api as fileApi } from "@sps/file-storage/models/file/sdk/server";
import { RBAC_SECRET_KEY } from "@sps/shared-utils";

export class Service {
  constructor(readonly service: Pick<SubjectService, "socialModule">) {}

  async enrich(messages: IModel[]): Promise<IChatMessage[]> {
    if (!messages.length) return [];
    const params = {
      filters: {
        and: [
          {
            column: "messageId",
            method: "inArray",
            value: messages.map((m) => m.id),
          },
        ],
      },
    };
    const [authors, links] = await Promise.all([
      this.service.socialModule.profilesToMessages.find({ params }),
      this.service.socialModule.messagesToFileStorageModuleFiles.find({
        params,
      }),
    ]);
    const fileIds = [
      ...new Set(links.map((link) => link.fileStorageModuleFileId as string)),
    ];
    const files = fileIds.length
      ? await fileApi.find({
          params: {
            filters: {
              and: [{ column: "id", method: "inArray", value: fileIds }],
            },
          },
          options: {
            headers: {
              "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY!,
              "Cache-Control": "no-store",
            },
          },
        })
      : [];
    const filesById = new Map((files || []).map((file) => [file.id, file]));
    return messages.map((message) => ({
      ...message,
      authorProfileIds: authors
        .filter((link) => link.messageId === message.id)
        .map((link) => link.profileId),
      attachments: links
        .filter((link) => link.messageId === message.id)
        .sort((a, b) => (a.orderIndex || 0) - (b.orderIndex || 0))
        .flatMap((link) =>
          filesById.has(link.fileStorageModuleFileId)
            ? [filesById.get(link.fileStorageModuleFileId)!]
            : [],
        ),
    }));
  }
}
