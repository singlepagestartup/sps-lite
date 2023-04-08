import { FC } from "react";
import { ISpsLiteLayout, variants as spsLiteVariants } from "./sps-lite";

const variants = {
  ...spsLiteVariants,
};

export default function Layouts<T extends ISpsLiteLayout>(props: T) {
  const Comp = variants[
    props.layout?.variant as keyof typeof variants
  ] as FC<T>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
