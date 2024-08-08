"use client";
import "client-only";

import { IComponentProps, variant, IModel } from "./interface";
import { api } from "@sps/sps-website-builder/models/content-block/sdk/client";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { Component } from "./Component";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/default/client";

export default function Client(props: IComponentProps) {
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
