import { FC } from "react";
import SimpleCentered from "./SimpleCentered";
import WithAppScreenshot from "./WithAppScreenshot";
import Split from "./Split";
import SplitWithScreenshotOnDark from "./SplitWithScreenshotOnDark";
import WithAngledImageOnRight from "./WithAngledImageOnRight";
import { IBackendHeroSectionBlock } from "types/page-blocks";

export interface IHeroSectionBlock
  extends Omit<IBackendHeroSectionBlock, `id`> {}

const variants = {
  split: Split,
  "simple-centered": SimpleCentered,
  "split-with-screenshot-on-dark": SplitWithScreenshotOnDark,
  "with-app-screenshot": WithAppScreenshot,
  "with-angled-image-on-right": WithAngledImageOnRight,
};

export default function HeroSections(props: IHeroSectionBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IHeroSectionBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
