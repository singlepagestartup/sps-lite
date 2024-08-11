"use server";
import "server-only";

import { IComponentProps, variant, IModel } from "./interface";
import { api } from "@sps/sps-billing/models/payment-intent/sdk/server";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin-form/server";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { Component } from "./Component";

// default is required for dynamic import
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
