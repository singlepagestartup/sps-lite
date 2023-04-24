import { ISpsLiteBackendReviewsBlock } from "types/components/page-blocks/sps-lite";
import SimpleWithAvatars from "./SimpleWithAvatars";
import { FC } from "react";

export interface ISpsLiteReviewsBlock extends ISpsLiteBackendReviewsBlock {
  isLoading?: boolean;
}

export const variants = {
  "simple-with-avatars": SimpleWithAvatars,
};

export default function Reviews(props: ISpsLiteReviewsBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteReviewsBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
