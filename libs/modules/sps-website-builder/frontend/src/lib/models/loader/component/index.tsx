import dynamic from "next/dynamic";

export function Component({ isServer = false }: { isServer?: boolean }) {
  const Comp = isServer
    ? dynamic(() => import("./server"), {})
    : dynamic(() => import("./client"), {});

  return <Comp />;
}
