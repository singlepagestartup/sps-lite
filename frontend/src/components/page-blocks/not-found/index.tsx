import { FC } from "react";
import { ISpsLiteNotFoundBlock, variants as spsLiteVariants } from "./sps-lite";

const variants = {
  ...spsLiteVariants,
};

export default function NotFound<T extends ISpsLiteNotFoundBlock>(props: T) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<T>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
