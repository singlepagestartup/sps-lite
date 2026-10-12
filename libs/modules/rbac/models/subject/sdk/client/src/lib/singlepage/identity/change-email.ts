"use client";
import { useMutation } from "@tanstack/react-query";
import { clientHost, route } from "@sps/rbac/models/subject/sdk/model";
import { api } from "@sps/rbac/models/subject/sdk/server";
import type { IProps } from "@sps/rbac/models/subject/sdk/server";
type IRequestProps = IProps["IIdentityChangeEmailRequestProps"];
type IVerifyProps = IProps["IIdentityChangeEmailVerifyProps"];
import { saturateHeaders } from "@sps/shared-frontend-client-utils";
import {
  patchInListQueries,
  queryClient,
} from "@sps/shared-frontend-client-api";
export function request() {
  return useMutation({
    mutationKey: [`${route}/:id/identities/:identityId/email-change/code`],
    mutationFn: (props: IRequestProps) =>
      api.identityChangeEmailRequest({
        ...props,
        host: clientHost,
        options: {
          ...props.options,
          headers: saturateHeaders(props.options?.headers),
        },
      }),
  });
}
export function verify() {
  return useMutation({
    mutationKey: [`${route}/:id/identities/:identityId/email-change/verify`],
    mutationFn: (props: IVerifyProps) =>
      api.identityChangeEmailVerify({
        ...props,
        host: clientHost,
        options: {
          ...props.options,
          headers: saturateHeaders(props.options?.headers),
        },
      }),
    onSuccess: (result, props) => {
      if (result.stage !== "complete") return;
      const identity = result.identity;
      patchInListQueries(
        queryClient,
        `${route}/${props.id}/identities`,
        identity.id,
        identity,
      );
      patchInListQueries(
        queryClient,
        "/api/rbac/identities",
        identity.id,
        identity,
      );
      queryClient.setQueryData(
        [`/api/rbac/identities/${identity.id}`],
        identity,
      );
    },
  });
}
