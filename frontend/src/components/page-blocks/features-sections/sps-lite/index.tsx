import { ISpsLiteBackendFeaturesSectionBlock } from "types/components/page-blocks/sps-lite";
import WithIcon from "./WithIcon";
import { FC } from "react";

export interface ISpsLiteFeaturesSectionBlock
  extends ISpsLiteBackendFeaturesSectionBlock {}

export const variants = {
  "with-icon": WithIcon,
};

export default function FeaturesSections(props: ISpsLiteFeaturesSectionBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteFeaturesSectionBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
