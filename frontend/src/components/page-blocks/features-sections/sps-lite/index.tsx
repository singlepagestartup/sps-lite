import { ISpsLiteBackendFeaturesSectionBlock } from "types/components/page-blocks/sps-lite";
import CenteredTwoXTwoGrid from "./CenteredTwoXTwoGrid";
import WithProductScreenshot from "./WithProductScreenshot";
import { FC } from "react";

export interface ISpsLiteFeaturesSectionBlock
  extends ISpsLiteBackendFeaturesSectionBlock {}

export const variants = {
  "with-product-screenshot": WithProductScreenshot,
  "centered-two-x-two-grid": CenteredTwoXTwoGrid,
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
