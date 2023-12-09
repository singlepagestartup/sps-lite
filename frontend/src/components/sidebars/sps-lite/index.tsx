import { FC } from "react";
import OneQuarter from "./OneQuarter";
import { ISpsLiteBackendSidebar } from "~redux/services/backend/models/sidebar/interfaces/sps-lite";

export interface ISpsLiteSidebar extends ISpsLiteBackendSidebar {
  showSkeletons?: boolean;
}

export const variants = {
  "one-quarter": OneQuarter,
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
