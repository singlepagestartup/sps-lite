import {
  Provider,
  api as clientApi,
} from "@sps/rbac/models/subject/sdk/client";
import { api as serverApi } from "@sps/rbac/models/subject/sdk/server";
import { IComponentProps } from "./interface";
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
      className={props.className}
      children={props.children}
      project={props.project}
      thread={props.thread}
      target={props.target}
      onTargetChange={props.onTargetChange}
      apiProps={props.apiProps}
    />
  );
}

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

export { type IModel } from "@sps/rbac/models/subject/sdk/model";
