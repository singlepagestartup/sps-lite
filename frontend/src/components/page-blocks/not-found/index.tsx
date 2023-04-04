import { FC } from "react";
import { IBackendNotFoundBlock } from "types/components/page-blocks";
import { spsLiteVariants } from "./sps-lite";

export interface INotFoundBlock extends IBackendNotFoundBlock {}

const variants = {
  ...spsLiteVariants,
};

export default function NotFound(props: INotFoundBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<INotFoundBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
