"use client";
import "client-only";

import { Component } from "./Component";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps, variant } from "./interface";
import { api } from "@sps/sps-website-builder/relations/slides-to-sps-file-storage-module-widgets/sdk/client";
import { IRelation } from "@sps/sps-website-builder/relations/slides-to-sps-file-storage-module-widgets/sdk/model";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin-select-input/client";

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
