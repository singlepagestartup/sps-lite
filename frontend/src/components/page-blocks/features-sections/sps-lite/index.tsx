import { ISpsLiteBackendComponentFeaturesSectionBlock } from "~redux/services/backend/components/page-blocks/features-section-block/interfaces/sps-lite";
import WithIcon from "./WithIcon";
import { FC } from "react";

export interface ISpsLiteFeaturesSectionBlock
  extends ISpsLiteBackendComponentFeaturesSectionBlock {
  showSkeletons?: boolean;
}

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
