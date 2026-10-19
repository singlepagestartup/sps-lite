import type { Service as SubjectService } from "../../index";
import type { IModel as ISocialModuleProfile } from "@sps/social/models/profile/sdk/model";

export interface IExecuteProps {
  socialModuleChatId: string;
}

/** The caller must establish Chat access before expanding its participants. */
export class Service {
  constructor(readonly service: Pick<SubjectService, "socialModule">) {}

  async execute(props: IExecuteProps): Promise<ISocialModuleProfile[]> {
    if (!props.socialModuleChatId)
      throw new Error("Validation error. Chat ID is required");
    const links = await this.service.socialModule.profilesToChats.find({
      params: {
        filters: {
          and: [
            { column: "chatId", method: "eq", value: props.socialModuleChatId },
          ],
        },
        orderBy: { and: [{ column: "createdAt", method: "asc" }] },
      },
    });
    const ids = [
      ...new Set<string>(
        (links || [])
          .filter((link) => link.chatId === props.socialModuleChatId)
          .map((link) => link.profileId),
      ),
    ];
    if (!ids.length) return [];
    const profiles = await this.service.socialModule.profile.find({
      params: {
        filters: { and: [{ column: "id", method: "inArray", value: ids }] },
      },
    });
    const byId = new Map<string, ISocialModuleProfile>(
      profiles?.map((profile: ISocialModuleProfile) => [profile.id, profile]),
    );
    return ids.flatMap((id) => {
      const profile = byId.get(id);
      return profile ? [profile] : [];
    });
  }
}
