import Client from "./client";
import Server from "./server";
import { ReactNode } from "react";

export function Component(props: { isServer: boolean; children: ReactNode }) {
  const Comp = props.isServer ? Server : Client;

  return <Comp {...props} />;
}
