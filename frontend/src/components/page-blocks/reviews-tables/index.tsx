import { FC } from "react";
import { IBackendReviewsTableBlock } from "types/components/page-blocks";
import { spsLiteVariants } from "./sps-lite";

export interface IReviewsTableBlock extends IBackendReviewsTableBlock {}

const variants = {
  ...spsLiteVariants,
};

export default function ReviewsTables(props: IReviewsTableBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IReviewsTableBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
