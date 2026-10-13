import type { IAIChatProject } from "@sps/rbac/models/subject/sdk/model";
import { clientHost } from "@sps/rbac/models/subject/sdk/model";
import { api as subjectApi } from "@sps/rbac/models/subject/sdk/server";
import type { IModel as IProfile } from "@sps/social/models/profile/sdk/model";
import type { NextRequestOptions } from "@sps/shared-utils";
import { saturateHeaders } from "@sps/shared-frontend-client-utils";

export interface IFindProjectsProps {
  subjectId: string;
  profiles: IProfile[];
  host?: string;
  options?: Partial<NextRequestOptions>;
}

export async function findProjects(
  props: IFindProjectsProps,
): Promise<IAIChatProject[]> {
  if (!props.profiles.length) return [];
  const projects = await subjectApi.socialModuleProfileProjects({
    id: props.subjectId,
    host: props.host || clientHost,
    options: props.options || {
      headers: saturateHeaders({ "Cache-Control": "no-store" }),
    },
  });
  const profileIds = new Set(props.profiles.map((profile) => profile.id));
  return projects.filter((project) => profileIds.has(project.profile.id));
}
export async function findProjectThreads(props: {
  subjectId: string;
  chatId: string;
}) {
  return subjectApi.socialModuleChatFindByIdThreadFind({
    id: props.subjectId,
    socialModuleChatId: props.chatId,
    host: clientHost,
    options: { headers: saturateHeaders({ "Cache-Control": "no-store" }) },
  });
}

export async function findProjectProfile(props: {
  subjectId: string;
  profileId: string;
}) {
  const profiles = await subjectApi.socialModuleProfileFind({
    id: props.subjectId,
    params: {
      filters: {
        and: [{ column: "id", method: "eq", value: props.profileId }],
      },
    },
    host: clientHost,
    options: { headers: saturateHeaders({ "Cache-Control": "no-store" }) },
  });
  const profile = profiles.find((record) => record.id === props.profileId);
  if (!profile)
    throw new Error("Profile is no longer available to this account.");
  return profile;
}

export function getProjectsQueryKey(subjectId: string) {
  return ["ai-chat-projects", subjectId];
}

export function projectHref(
  project: IAIChatProject,
  threadId = project.thread.id,
) {
  return `/ai-chat/social/profiles/${project.profile.id}/chats/${project.chat.id}/threads/${threadId}`;
}
export function projectBaseHref(project: IAIChatProject) {
  return `/ai-chat/social/profiles/${project.profile.id}/chats/${project.chat.id}`;
}
