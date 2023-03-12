import utils from "@rogwild/next-utils";
import { FC, useMemo } from "react";
import { IReview } from "types";
import SimpleWithAvatars from "./SimpleWithAvatars";

const variants = {
  "simple-with-avatars": SimpleWithAvatars,
};

export interface IReviewsBlock {
  variant: `simple-with-avatars`;
  reviews?: IReview[];
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
