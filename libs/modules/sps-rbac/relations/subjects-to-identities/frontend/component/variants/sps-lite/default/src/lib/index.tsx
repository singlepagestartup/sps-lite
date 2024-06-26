import { IComponentProps } from "./interface";
import Client from "./client";
import Server from "./server";
import { ReduxProvider } from "@sps/sps-rbac/relations/subjects-to-identities/frontend/redux";

export function Component(props: IComponentProps) {
  const Comp: any = props.isServer ? Server : Client;

  return (
    <ReduxProvider>
      <Comp {...props} />
    </ReduxProvider>
  );
}
