import dynamic from "next/dynamic";
import { ReduxProvider } from "../../../redux";

export function Component({ isServer = false }: { isServer?: boolean }) {
  const Comp = isServer
    ? dynamic(() => import("./server"), {})
    : dynamic(() => import("./client"), {});

  return (
    <ReduxProvider>
      <Comp />
    </ReduxProvider>
  );
}
