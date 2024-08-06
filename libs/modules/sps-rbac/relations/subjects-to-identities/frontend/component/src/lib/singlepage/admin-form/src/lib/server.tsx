"use server";
import "server-only";

import { IComponentProps, variant } from "./interface";
import { Error } from "./Error";
import { api } from "@sps/sps-rbac/relations/subjects-to-identities/sdk/server";
import { IModel } from "@sps/sps-rbac/relations/subjects-to-identities/sdk/model";
import { Component } from "./Component";
import { Skeleton } from "./Skeleton";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin-form/server";

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
