import { IComponentPropsExtended } from "./interface";
import { Component as LoginAndPassword } from "../../../login-and-password";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="rbac"
      data-model="subject"
      data-variant={props.variant}
      className="w-full"
    >
      <LoginAndPassword
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="login-and-password"
        type={props.type}
      />
    </div>
  );
}
