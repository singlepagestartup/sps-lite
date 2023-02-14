import { FC } from "react";
import { IFeatureSections } from "types";
import SimpleThreeColumn from "./SimpleThreeColumn";
import ThreeColumnWithSlider from "./ThreeColumnWithSlider";
import WithProductScreenshotOnLeft from "./WithProductScreenshotOnLeft";

const variants = {
  "simple-three-column": SimpleThreeColumn,
  "with-product-screenshot-on-left": WithProductScreenshotOnLeft,
  "three-column-with-slider": ThreeColumnWithSlider,
};

export default function FeatureSections(props: IFeatureSections) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IFeatureSections>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
