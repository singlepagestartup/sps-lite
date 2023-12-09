import { FC, ReactNode } from "react";
import Simple from "./Simple";
import { ISpsLiteBackendFlyout } from "~redux/services/backend/models/flyout/interfaces/sps-lite";

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
