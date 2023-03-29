import { FC } from "react";
import { IMedia } from "types";
import { IBackendFeature } from "types/components";
import SimpleThreeColumn from "./SimpleThreeColumn";
import ThreeColumnWithSlider from "./ThreeColumnWithSlider";
import WithProductScreenshotOnLeft from "./WithProductScreenshotOnLeft";

export interface IFeaturesSectionBlock {
  features: IBackendFeature[];
  variant: keyof typeof variants;
  title?: string;
  subtitle?: string;
  description?: string;
  anchor?: string;
  media?: IMedia[];
}

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
