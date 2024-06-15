import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as AuthenticationSpsLiteLoginAndPassword } from "@sps/sps-rbac-models-authentication-frontend-component-variants-sps-lite-login-and-password";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-rbac"
      data-model="authentication"
      data-variant={props.variant}
      className="w-full"
    >
      <AuthenticationSpsLiteLoginAndPassword
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="login-and-password"
      />
    </div>
  );
}
