"use client";
import "client-only";

import { IComponentProps, variant } from "./interface";
import { api } from "@sps/sps-website-builder/models/hero-section-block/sdk/client";
import { IModel } from "@sps/sps-website-builder/models/hero-section-block/sdk/model";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/find/client";

export default function Client(props: IComponentProps) {
  return (
    <ParentComponent<IModel, typeof variant, any, IComponentProps>
      {...props}
      api={api}
    />
  );
}
