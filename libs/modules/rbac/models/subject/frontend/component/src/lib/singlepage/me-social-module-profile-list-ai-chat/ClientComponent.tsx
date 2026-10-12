"use client";
import { useQuery } from "@tanstack/react-query";
import { api } from "@sps/rbac/models/subject/sdk/client";
import {
  findProjects,
  getProjectsQueryKey,
} from "../me-social-module-profile-id-chat-id-thread-id-ai-chat/utils";
import type { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  const profiles = api.socialModuleProfileFind({
    id: props.data.id,
    reactQueryOptions: {
      initialData: props.initialProjects
        ? [
            ...new Map(
              props.initialProjects.map((project) => [
                project.profile.id,
                project.profile,
              ]),
            ).values(),
          ]
        : undefined,
    },
    params: {
      filters: {
        and: [
          { column: "variant", method: "eq", value: "artificial-intelligence" },
        ],
      },
    },
  });
  const contexts = useQuery({
    initialData: props.initialProjects,
    queryKey: [
      ...getProjectsQueryKey(props.data.id),
      profiles.data?.map((profile) => profile.id),
    ],
    enabled: profiles.isSuccess && !!profiles.data?.length,
    meta: {
      topics: [
        "social.profiles",
        "social.chats",
        "social.profiles-to-chats",
        "social.threads",
      ],
    },
    queryFn: () =>
      findProjects({ subjectId: props.data.id, profiles: profiles.data! }),
  });
  if (profiles.error || contexts.error) {
    const retry = () => {
      void (profiles.error ? profiles.refetch() : contexts.refetch());
    };
    if (props.renderError) return props.renderError({ retry });
    return (
      <div
        role="alert"
        className="mt-8 grid gap-3 rounded-xl border border-destructive-border bg-destructive-surface p-4 text-sm"
      >
        <p className="font-semibold text-destructive">
          Couldn't load your projects.
        </p>
        <p className="text-muted-foreground">
          Try again to reconnect to your workspace.
        </p>
        <button
          type="button"
          className="min-h-11 w-fit rounded-xl border border-border bg-card px-4 font-semibold hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          onClick={retry}
        >
          Try again
        </button>
      </div>
    );
  }
  if (profiles.isPending || (profiles.data?.length && contexts.isPending))
    return (
      props.loading ?? (
        <div
          role="status"
          aria-label="Loading projects"
          className="min-h-11 rounded-xl bg-muted motion-safe:animate-pulse"
        >
          <span className="sr-only">Loading projects…</span>
        </div>
      )
    );
  if (!profiles.data?.length) return props.renderProjects({ projects: [] });
  return props.renderProjects({ projects: contexts.data || [] });
}
