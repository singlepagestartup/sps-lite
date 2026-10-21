import type { Service as SubjectService } from "../../index";
import { Service as Participants } from "./participants";

export interface IFindProps {
  subjectId: string;
  socialModuleProfileId: string;
  includeSubjectProfiles?: boolean;
  includeParticipants?: boolean;
  params?: Parameters<
    SubjectService["socialModule"]["chat"]["find"]
  >[0]["params"];
}

/** A single scoped collection, including all of the acting Subject's profiles. */
export class Service {
  constructor(readonly service: SubjectService) {}

  async find(props: IFindProps) {
    if (!props.subjectId || !props.socialModuleProfileId)
      throw new Error("Validation error. Subject and Profile IDs are required");
    const owned = await this.service.subjectsToSocialModuleProfiles.find({
      params: {
        filters: {
          and: [{ column: "subjectId", method: "eq", value: props.subjectId }],
        },
      },
    });
    const profileIds = [
      ...new Set<string>(
        (owned || []).map((link) => link.socialModuleProfileId),
      ),
    ];
    if (!profileIds.includes(props.socialModuleProfileId))
      throw new Error(
        "Permission error. Requested social-module profile does not belong to subject",
      );
    const admin = await this.service.socialModuleChatLifecycleIsSubjectAdmin({
      subjectId: props.subjectId,
    });
    let chatIds: string[] | undefined;
    if (!admin) {
      const links = await this.service.socialModule.profilesToChats.find({
        params: {
          filters: {
            and: [
              {
                column: "profileId",
                method: "inArray",
                value: props.includeSubjectProfiles
                  ? profileIds
                  : [props.socialModuleProfileId],
              },
            ],
          },
        },
      });
      chatIds = [...new Set<string>((links || []).map((link) => link.chatId))];
      if (!chatIds.length) return [];
    }
    const chats = await this.service.socialModule.chat.find({
      params: {
        ...props.params,
        ...(!admin
          ? {
              filters: {
                and: [{ column: "id", method: "inArray", value: chatIds! }],
              },
            }
          : {}),
      },
    });
    if (!props.includeParticipants || !chats?.length) return chats || [];
    const participants = await new Participants(this.service).findForChats(
      chats.map((chat) => chat.id),
    );
    return chats.map((chat) => ({
      ...chat,
      participants: participants.get(chat.id) || [],
    }));
  }
}
