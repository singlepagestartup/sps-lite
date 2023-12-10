import { ISpsLiteBackendComponentReviewsListBlock } from "~redux/services/backend/components/page-blocks/reviews-list-block/interfaces/sps-lite";
import SimpleWithAvatars from "./SimpleWithAvatars";
import { FC } from "react";

export interface ISpsLiteReviewsListBlock
  extends ISpsLiteBackendComponentReviewsListBlock {
  showSkeletons?: boolean;
}

export const variants = {
  "simple-with-avatars": SimpleWithAvatars,
};

export default function Reviews(props: ISpsLiteReviewsListBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteReviewsListBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
