"use client";
import "client-only";

import { Component } from "./Component";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps, variant } from "./interface";
import { api } from "@sps/sps-file-storage/relations/widgets-to-files/sdk/client";
import { IRelation } from "@sps/sps-file-storage/relations/widgets-to-files/sdk/model";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin-form/client";

// default is required for dynamic import
export default function Client(props: IComponentProps) {
  return (
    <ParentComponent<IRelation, typeof variant, any, IComponentProps>
      Error={Error}
      Skeleton={Skeleton}
      Component={Component}
      api={api}
      {...props}
    />
  );
}
