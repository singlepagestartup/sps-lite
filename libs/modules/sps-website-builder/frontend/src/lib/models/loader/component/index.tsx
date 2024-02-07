// import dynamic from "next/dynamic";
import { ReduxProvider } from "../../../redux";
import Client from "./client";
import Server from "./server";

export function Component({ isServer = false }: { isServer?: boolean }) {
  const Comp = isServer ? Server : Client;
  // const Comp = isServer
  //   ? dynamic(() => import("./server"), {})
  //   : dynamic(() => import("./client"), {});

  return (
    <ReduxProvider>
      <Comp />
    </ReduxProvider>
  );
}
