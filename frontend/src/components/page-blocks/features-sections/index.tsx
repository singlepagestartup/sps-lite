import { FC } from "react";
import {
  ISpsLiteFeaturesSectionBlock,
  variants as spsLiteVariants,
} from "./sps-lite";

const variants = {
  ...spsLiteVariants,
};

export default function FeaturesSections<
  T extends ISpsLiteFeaturesSectionBlock,
>(props: T) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<T>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
