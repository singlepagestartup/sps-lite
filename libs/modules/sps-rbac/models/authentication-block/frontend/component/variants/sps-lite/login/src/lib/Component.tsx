import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as Authentication } from "@sps/sps-rbac-models-authentication-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-rbac"
      data-model="authentication-block"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className="w-full py-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        <Authentication isServer={props.isServer} variant="select-method" />
      </div>
    </div>
  );
}
