import { FC, ReactNode } from "react";
import Simple from "./Simple";
import { ISpsLiteBackendApiFlyout } from "~redux/services/backend/api/flyout/interfaces/sps-lite";

export interface ISpsLiteFlyout extends ISpsLiteBackendApiFlyout {
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
