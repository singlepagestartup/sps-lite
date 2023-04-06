import { ISpsLiteBackendHeaderSectionBlock } from "types/components/page-blocks/sps-lite";
import SimpleCentered from "./SimpleCentered";
import { FC } from "react";

export interface ISpsLiteHeaderSectionBlock
  extends ISpsLiteBackendHeaderSectionBlock {}

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
