import { IComponentProps } from "./interface";
import Client from "./client";
import Server from "./server";
import { ReduxProvider } from "@sps/sps-host/models/page/frontend/redux";

export function Component(props: IComponentProps) {
  const Comp: any = props.isServer ? Server : Client;

  return (
    <ReduxProvider>
      <Comp {...props} />
    </ReduxProvider>
  );
}
