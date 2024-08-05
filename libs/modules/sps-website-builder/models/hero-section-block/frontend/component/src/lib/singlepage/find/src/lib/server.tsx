"use server";
import "server-only";

import { IComponentProps, variant } from "./interface";
import { api } from "@sps/sps-website-builder/models/hero-section-block/sdk/server";
import { IModel } from "@sps/sps-website-builder/models/hero-section-block/sdk/model";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/find/server";

export default async function Server(props: IComponentProps) {
  return (
    <ParentComponent<IModel, typeof variant, any, IComponentProps>
      {...props}
      api={api}
    />
  );
}
