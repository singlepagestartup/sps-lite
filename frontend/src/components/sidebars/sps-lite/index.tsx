import { FC } from "react";
import Simple from "./Simple";
import { ISpsLiteBackendSidebar } from "types/collection-types/sps-lite";

export interface ISpsLiteSidebar extends ISpsLiteBackendSidebar {
  isLoading?: boolean;
}

export const variants = {
  simple: Simple,
};

export default function Sidebars(props: ISpsLiteSidebar) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteSidebar>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
