"use server";
import "server-only";

import { IComponentProps, variant, IModel } from "./interface";
import { api } from "@sps/sps-website-builder/models/content-block/sdk/server";
import { Error } from "./Error";
import { Component } from "./Component";
import { Skeleton } from "./Skeleton";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/find/server";

export default async function Server(props: IComponentProps) {
  return (
    <ParentComponent<IModel, typeof variant, any, IComponentProps>
      Error={Error}
      Skeleton={Skeleton}
      Component={Component}
      api={api}
      {...props}
    />
  );
}
