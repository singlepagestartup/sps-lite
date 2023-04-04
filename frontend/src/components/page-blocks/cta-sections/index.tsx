import { FC } from "react";
import { IBackendCtaSectionBlock } from "types/components/page-blocks";
import { spsLiteVariants } from "./sps-lite";

export interface ICtaSectionsBlock extends IBackendCtaSectionBlock {}

const variants = {
  ...spsLiteVariants,
};

export default function CtaSections(props: ICtaSectionsBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ICtaSectionsBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
