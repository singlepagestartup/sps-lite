import { cn } from "@sps/shared-frontend-client-utils";
import { IComponentPropsExtended } from "./interface";
import { Component as Authentication } from "@sps/sps-rbac/models/authentication/frontend/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-rbac"
      data-model="authentication-block"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn(
        "w-full flex flex-col",
        props.data.className || "px-2 py-20 lg:py-32",
      )}
    >
      <div className="w-full mx-auto max-w-7xl flex flex-col gap-4 lg:gap-10">
        {props.data?.title ? (
          <h1 className="text-2xl font-bold lg:text-4xl w-full">
            {props.data?.title}
          </h1>
        ) : null}
        <div className="w-full lg:w-1/2">
          <Authentication
            isServer={props.isServer}
            hostUrl={props.hostUrl}
            variant="select-method"
            type="registration"
          />
        </div>
      </div>
    </div>
  );
}
