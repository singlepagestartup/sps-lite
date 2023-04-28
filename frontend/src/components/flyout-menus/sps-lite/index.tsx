import { FC, ReactNode } from "react";
import { ISpsLiteBackendFlyoutMenu } from "types/collection-types/sps-lite";
import Simple from "./Simple";

export interface ISpsLiteFlyoutMenu extends ISpsLiteBackendFlyoutMenu {
  children: ReactNode;
  showSkeletons?: boolean;
}

export const variants = {
  simple: Simple,
};

export default function Menus(props: ISpsLiteFlyoutMenu) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteFlyoutMenu>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
