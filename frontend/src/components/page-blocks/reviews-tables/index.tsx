import { FC } from "react";
import Simple from "./Simple";

const variants = {
  simple: Simple,
};

export interface IReviewsTableBlock {
  variant: `simple`;
}

export default function ReviewsTables(props: IReviewsTableBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IReviewsTableBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
