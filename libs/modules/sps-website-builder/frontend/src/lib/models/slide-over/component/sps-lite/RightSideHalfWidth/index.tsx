import { IComponentProps } from "./interface";
import Client from "./client";
import Server from "./server";

export function RightSideHalfWidth(props: IComponentProps) {
  const Comp = props.isServer ? Server : Client;

  return <Comp {...props} />;
}
