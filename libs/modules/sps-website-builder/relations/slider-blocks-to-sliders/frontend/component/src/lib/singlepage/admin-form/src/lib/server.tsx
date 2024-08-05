"use server";
import "server-only";

import { IComponentProps, variant } from "./interface";
import { Error } from "./Error";
import { api } from "@sps/sps-website-builder/relations/slider-blocks-to-sliders/sdk/server";
import { IRelation } from "@sps/sps-website-builder/relations/slider-blocks-to-sliders/sdk/model";
import { Component } from "./Component";
import { Skeleton } from "./Skeleton";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin-form/server";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
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
