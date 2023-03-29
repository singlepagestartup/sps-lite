import { FC } from "react";
import SimpleCentered from "./SimpleCentered";
import WithAppScreenshot from "./WithAppScreenshot";
import Split from "./Split";
import SplitWithScreenshotOnDark from "./SplitWithScreenshotOnDark";
import WithAngledImageOnRight from "./WithAngledImageOnRight";
import { IButton } from "~components/buttons/simple-buttons";
import { IMedia } from "types/models";

export interface IHeroSectionBlock {
  variant: keyof typeof variants;
  title?: string;
  description?: string;
  buttons?: IButton[];
  media?: IMedia[];
  anchor?: string;
  background?: IMedia;
}

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
