import { FC } from "react";
import { ISpsLiteErrorBlock, variants as spsLiteVariants } from "./sps-lite";

const variants = {
  ...spsLiteVariants,
};

export default function Errors(props: any) {
  const Comp = variants["simple"];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
