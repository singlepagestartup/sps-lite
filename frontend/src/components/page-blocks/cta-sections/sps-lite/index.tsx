import { ISpsLiteBackendCtaSectionBlock } from "~redux/services/backend/components/page-blocks/cta-section-block/interfaces/sps-lite";
import DarkWithImage from "./DarkWithImage";
import { FC } from "react";

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
