"use client";
import "client-only";

import { Component } from "./Component";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps, variant } from "./interface";
import { api } from "@sps/sps-host/models/layout/sdk/client";
import { IModel } from "@sps/sps-host/models/layout/sdk/model";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin-select-input/client";

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
