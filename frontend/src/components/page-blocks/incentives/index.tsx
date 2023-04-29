import { FC } from "react";
import {
  ISpsLiteIncentivesBlock,
  variants as spsLiteVariants,
} from "./sps-lite";

const variants = {
  ...spsLiteVariants,
};

export default function Incentives<T extends ISpsLiteIncentivesBlock>(
  props: T,
) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<T>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
