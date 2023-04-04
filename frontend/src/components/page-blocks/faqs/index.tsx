import { FC } from "react";
import { IBackendFaqBlock } from "types/components/page-blocks";
import { spsLiteVariants } from "./sps-lite";

export interface IFaqsBlock extends IBackendFaqBlock {}

const variants = {
  ...spsLiteVariants,
};

export default function Faqs(props: IFaqsBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IFaqsBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
