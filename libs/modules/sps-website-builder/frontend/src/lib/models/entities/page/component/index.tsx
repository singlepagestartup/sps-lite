import dynamic from "next/dynamic";
import { IComponentProps } from "./interface";

export function Component(props: IComponentProps) {
  const Comp = dynamic(() => import("./server"), {});
  // const Comp = props.isServer
  //   ? dynamic(() => import("./server"), {})
  //   : dynamic(() => import("./client"), {});

  return <Comp {...props} />;
}
