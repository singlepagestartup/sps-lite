import { FC } from "react";
import { IBackendReviewsBlock } from "types/components/page-blocks";
import { spsLiteVariants } from "./sps-lite";

export interface IReviewsBlock extends IBackendReviewsBlock {}

const variants = {
  ...spsLiteVariants,
};

export default function Reviews(props: IReviewsBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IReviewsBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
