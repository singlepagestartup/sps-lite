import { FC } from "react";
import { IHeaderSection } from "types";
import BrandedWithBackgroundImage from "./BrandedWithBackgroundImage";
import SimpleCentered from "./SimpleCentered";
import SimpleWithSelectMenu from "./SimpleWithSelectMenu";
import SimpleWithSelectMenuDark from "./SimpleWithSelectMenuDark";
import WithBackgroundImageAndOverlappingCards from "./WithBackgroundImageAndOverlappingCards";

const variants = {
  "simple-centered": SimpleCentered,
  "simple-with-select-menu-dark": SimpleWithSelectMenuDark,
  "simple-with-select-menu": SimpleWithSelectMenu,
  "branded-with-background-image": BrandedWithBackgroundImage,
  "with-background-image-and-overlapping-cards":
    WithBackgroundImageAndOverlappingCards,
};

export default function HeaderSections(props: IHeaderSection) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IHeaderSection>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
