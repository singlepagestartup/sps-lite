import { FC } from "react";
import Simple from "./Simple";
import { IBackendReviewsTableBlock } from "types/components/page-blocks";

export interface IReviewsTableBlock extends IBackendReviewsTableBlock {}

const variants = {
  simple: Simple,
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
