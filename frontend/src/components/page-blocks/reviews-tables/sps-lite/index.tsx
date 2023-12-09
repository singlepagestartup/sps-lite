import { ISpsLiteBackendReviewsTableBlock } from "~redux/services/backend/components/page-blocks/reviews-table-block/interfaces/sps-lite";
import Simple from "./Simple";
import { FC } from "react";

export interface ISpsLiteReviewsTableBlock
  extends ISpsLiteBackendReviewsTableBlock {
  showSkeletons?: boolean;
}

export const variants = {
  simple: Simple,
};

export default function ReviewsTables(props: ISpsLiteReviewsTableBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteReviewsTableBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
