import { FC } from "react";
import { IBackendReview } from "types/models";
import SimpleWithAvatars from "./SimpleWithAvatars";

const variants = {
  "simple-with-avatars": SimpleWithAvatars,
};

export interface IReviewsBlock {
  variant: keyof typeof variants;
  reviews?: IBackendReview[];
  showAll?: boolean;
  anchor?: string;
}

export default function Reviews(props: IReviewsBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IReviewsBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
