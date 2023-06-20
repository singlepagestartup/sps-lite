import { ISpsLiteBackendAlertBlock } from "types/components/page-blocks/sps-lite";
import Centered from "./Centered";
import { FC } from "react";

export interface ISpsLiteAlertBlock extends ISpsLiteBackendAlertBlock {
  showSkeletons?: boolean;
}

export const variants = {
  centered: Centered,
};

export default function Alerts(props: ISpsLiteAlertBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteAlertBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
