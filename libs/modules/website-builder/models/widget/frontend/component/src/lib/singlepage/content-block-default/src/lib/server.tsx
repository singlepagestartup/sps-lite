"use server";
import "server-only";

import { IComponentProps, variant } from "./interface";
import { api } from "@sps/website-builder/models/widget/sdk/server";
import { IModel } from "@sps/website-builder/models/widget/sdk/model";
import { Error } from "./Error";
import { Component } from "./Component";
import { Skeleton } from "./Skeleton";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/default/server";

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
