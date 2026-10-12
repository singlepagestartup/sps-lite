"use client";

import { type PropsWithChildren } from "react";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { route } from "@sps/rbac/models/subject/sdk/model";

interface IComponentProps extends PropsWithChildren {
  subjectId: string;
}

export function Component(props: IComponentProps) {
  const permission = {
    route: "/api/rbac/roles",
    method: "GET",
    type: "HTTP" as const,
  };
  const authorization = api.authenticationIsAuthorized({
    params: { permission },
    mute: true,
    reactQueryOptions: {
      queryKey: [
        `${route}/authentication/is-authorized`,
        props.subjectId,
        permission,
      ],
      retry: false,
    },
  });

  if (!authorization.data?.ok || authorization.isError) {
    return null;
  }

  return props.children;
}
