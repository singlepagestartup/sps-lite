import { FC, useMemo } from "react";
import { ILogoCloud } from "types";
import OffWhiteGrid from "./OffWhiteGrid";
import Simple from "./Simple";
import SimpleWithHeading from "./SimpleWithHeading";
import SimpleWithHeadingOnBrand from "./SimpleWithHeadingOnBrand";
import SplitWithGridOnRight from "./SplitWithGridOnRight";

const variants = {
  simple: Simple,
  "simple-with-heading": SimpleWithHeading,
  "simple-with-heading-on-brang": SimpleWithHeadingOnBrand,
  "off-white-grid": OffWhiteGrid,
  "split-with-grid-on-right": SplitWithGridOnRight,
};

export default function LogoClouds(props: ILogoCloud) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ILogoCloud>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
