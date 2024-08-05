"use client";
import "client-only";

import { IComponentProps, variant } from "./interface";
import { api } from "@sps/sps-website-builder/models/hero-section-block/sdk/client";
import { IModel } from "@sps/sps-website-builder/models/hero-section-block/sdk/model";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/default/client";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { Component } from "./Component";

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
