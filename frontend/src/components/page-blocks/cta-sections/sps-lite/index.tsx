import DarkWithImage from "./DarkWithImage";
import { FC } from "react";
import { ISpsLiteBackendCtaSectionBlock } from "types/components/page-blocks/sps-lite";

export interface ISpsLiteCtaSectionsBlock
  extends ISpsLiteBackendCtaSectionBlock {
  showSkeletons?: boolean;
}

export const variants = {
  "dark-with-image": DarkWithImage,
};

export default function ContactSectons(props: ISpsLiteCtaSectionsBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteCtaSectionsBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
