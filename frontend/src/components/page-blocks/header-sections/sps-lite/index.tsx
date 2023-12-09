import { ISpsLiteBackendHeaderSectionBlock } from "~redux/services/backend/components/page-blocks/header-section-block/interfaces/sps-lite";
import SimpleCentered from "./SimpleCentered";
import { FC } from "react";

export interface ISpsLiteHeaderSectionBlock
  extends ISpsLiteBackendHeaderSectionBlock {
  showSkeletons?: boolean;
}

export const variants = {
  "simple-centered": SimpleCentered,
};

export default function HeaderSections(props: ISpsLiteHeaderSectionBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteHeaderSectionBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
