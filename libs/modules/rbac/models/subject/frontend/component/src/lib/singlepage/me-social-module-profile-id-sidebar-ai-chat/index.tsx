import {
  Provider,
  api as clientApi,
} from "@sps/rbac/models/subject/sdk/client";
import { api as serverApi } from "@sps/rbac/models/subject/sdk/server";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/subject-default";
import Client from "./client";
import Server from "./server";
function Reader(props: IComponentProps) {
  const Comp = props.isServer ? Server : Client;
  return (
    <Comp
      isServer={props.isServer}
      variant={props.variant}
      data={props.data}
      apiProps={props.apiProps}
      project={props.project}
      profileId={props.profileId}
      onClose={props.onClose}
    />
  );
}
import { IComponentProps } from "./interface";
export function Component(props: IComponentProps) {
  return (
    <ParentComponent
      Component={Reader as any}
      Provider={Provider}
      clientApi={clientApi}
      serverApi={serverApi}
      {...props}
    />
  );
}
