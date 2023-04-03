import { FC } from "react";
import SimpleCentered from "./SimpleCentered";
import BrandedWithBackgroundImage from "./BrandedWithBackgroundImage";
import SimpleWithSelectMenu from "./SimpleWithSelectMenu";
import SimpleWithSelectMenuDark from "./SimpleWithSelectMenuDark";
import WithBackgroundImageAndOverlappingCards from "./WithBackgroundImageAndOverlappingCards";
import { IBackendHeaderSectionBlock } from "types/components/page-blocks/sps-lite";

export interface IHeaderSectionBlock extends IBackendHeaderSectionBlock {}

const variants = {
  "simple-centered": SimpleCentered,
  "simple-with-select-menu-dark": SimpleWithSelectMenuDark,
  "simple-with-select-menu": SimpleWithSelectMenu,
  "branded-with-background-image": BrandedWithBackgroundImage,
  "with-background-image-and-overlapping-cards":
    WithBackgroundImageAndOverlappingCards,
};

export default function HeaderSections(props: IHeaderSectionBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IHeaderSectionBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
