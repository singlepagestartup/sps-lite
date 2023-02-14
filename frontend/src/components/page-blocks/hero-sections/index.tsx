import { FC } from "react";
import { IHeroSection } from "types";
import SimpleCentered from "./SimpleCentered";
import WithAppScreenshot from "./WithAppScreenshot";
import Split from "./Split";
import SplitWithScreenshotOnDark from "./SplitWithScreenshotOnDark";
import WithAngledImageOnRight from "./WithAngledImageOnRight";

const variants = {
  split: Split,
  "simple-centered": SimpleCentered,
  "split-with-screenshot-on-dark": SplitWithScreenshotOnDark,
  "with-app-screenshot": WithAppScreenshot,
  "with-angled-image-on-right": WithAngledImageOnRight,
};

export default function HeroSections(props: IHeroSection) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IHeroSection>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
