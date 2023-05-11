import { FC, ReactNode } from "react";
import { ISpsLiteBackendFlyout } from "types/collection-types/sps-lite";
import Simple from "./Simple";

export interface ISpsLiteFlyout extends ISpsLiteBackendFlyout {
  children: ReactNode;
  showSkeletons?: boolean;
}

export const variants = {
  simple: Simple,
};

export default function Menus(props: ISpsLiteFlyout) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteFlyout>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
