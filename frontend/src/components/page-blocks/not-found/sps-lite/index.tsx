import { ISpsLiteBackendNotFoundBlock } from "types/components/page-blocks/sps-lite";
import Simple from "./Simple";
import { FC } from "react";

export interface ISpsLiteNotFoundBlock extends ISpsLiteBackendNotFoundBlock {
  showSkeletons?: boolean;
}

export const variants = {
  simple: Simple,
};

export default function NotFound(props: ISpsLiteNotFoundBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteNotFoundBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
