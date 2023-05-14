import { ISpsLiteBackendReviewsListBlock } from "types/components/page-blocks/sps-lite";
import SimpleWithAvatars from "./SimpleWithAvatars";
import { FC } from "react";

export interface ISpsLiteReviewsListBlock
  extends ISpsLiteBackendReviewsListBlock {
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
