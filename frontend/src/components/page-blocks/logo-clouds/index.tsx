import { FC, useMemo } from "react";
import { IButton, ILogo } from "types";
import OffWhiteGrid from "./OffWhiteGrid";
import Simple from "./Simple";
import SimpleWithHeading from "./SimpleWithHeading";
import SimpleWithHeadingOnBrand from "./SimpleWithHeadingOnBrand";
import SplitWithGridOnRight from "./SplitWithGridOnRight";

export interface ILogoCloud {
  variant: keyof typeof variants;
  title: string;
  logos: ILogo[];
  buttons?: IButton[];
  description: string;
  anchor?: string;
}

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
