// import dynamic from "next/dynamic";
import { IComponentProps } from "./interface";
import { ReduxProvider } from "../../../redux";
import Client from "./client";
import Server from "./server";

export function Component(props: IComponentProps) {
  const Comp = props.isServer ? Server : Client;
  // Rerendering on type
  // const Comp = props.isServer
  //   ? dynamic(() => import("./server"), {})
  //   : dynamic(() => import("./client"), {});

  return (
    <ReduxProvider>
      <Comp {...props} />
    </ReduxProvider>
  );
}
