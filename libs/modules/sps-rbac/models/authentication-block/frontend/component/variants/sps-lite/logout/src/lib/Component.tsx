import { IComponentPropsExtended } from "./interface";
import { Component as LogoutAction } from "@sps/sps-rbac/models/authentication/frontend/component/variants/sps-lite/logout-action";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-rbac"
      data-model="authentication-block"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className="w-full py-10 text-center flex flex-col gap-1"
    >
      {/* <LogoutAction
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="logout-action"
      /> */}
    </div>
  );
}
