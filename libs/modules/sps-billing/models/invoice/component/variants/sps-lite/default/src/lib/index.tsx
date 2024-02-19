import { IComponentProps } from "./interface";
import { ReduxProvider } from "@sps/sps-billing-invoice-component-redux";
import Client from "./client";
import Server from "./server";

export function Component(props: IComponentProps) {
  const Comp = props.isServer ? Server : Client;

  return (
    <ReduxProvider>
      <Comp {...props} />
    </ReduxProvider>
  );
}
