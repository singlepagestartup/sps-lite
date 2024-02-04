// import dynamic from "next/dynamic";
import Comp from "./client";
import { IComponentProps } from "./interface";
import { ReduxProvider } from "../../../redux";

export function Component(props: IComponentProps) {
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
