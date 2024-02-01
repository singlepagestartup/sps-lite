import dynamic from "next/dynamic";

export function Component({ isServer }: { isServer: boolean }) {
  const Comp = isServer
    ? dynamic(() => import("./server"), {})
    : dynamic(() => import("./client"), {});

  return <Comp />;
}
