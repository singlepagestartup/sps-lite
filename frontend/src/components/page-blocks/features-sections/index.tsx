import { FC } from "react";
import SimpleThreeColumn from "./SimpleThreeColumn";
import ThreeColumnWithSlider from "./ThreeColumnWithSlider";
import WithProductScreenshotOnLeft from "./WithProductScreenshotOnLeft";
import { IBackendFeaturesSectionBlock } from "types/components/page-blocks";

export interface IFeaturesSectionBlock extends IBackendFeaturesSectionBlock {}

const variants = {
  "simple-three-column": SimpleThreeColumn,
  "with-product-screenshot-on-left": WithProductScreenshotOnLeft,
  "three-column-with-slider": ThreeColumnWithSlider,
};

export default function FeaturesSections(props: IFeaturesSectionBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IFeaturesSectionBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
