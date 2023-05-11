import { ISpsLiteBackendLocalesBlock } from "types/components/page-blocks/sps-lite";
import Simple from "./Simple";
import { FC } from "react";

export interface ISpsLiteLocalesBlock extends ISpsLiteBackendLocalesBlock {
  showSkeletons?: boolean;
}

export const variants = {
  simple: Simple,
};

export default function Locales(props: ISpsLiteLocalesBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteLocalesBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
