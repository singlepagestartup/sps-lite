import { FC } from "react";
import SimpleWithAvatars from "./SimpleWithAvatars";
import { IBackendReviewsBlock } from "types/components/page-blocks/sps-lite";

export interface IReviewsBlock extends IBackendReviewsBlock {}

const variants = {
  "simple-with-avatars": SimpleWithAvatars,
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
