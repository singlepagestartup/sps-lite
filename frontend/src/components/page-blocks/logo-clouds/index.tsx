import { FC } from "react";
import { IButton } from "~components/buttons/simple-buttons";
import Simple from "./Simple";
import OffWhiteGrid from "./OffWhiteGrid";
import SimpleWithHeading from "./SimpleWithHeading";
import SimpleWithHeadingOnBrand from "./SimpleWithHeadingOnBrand";
import SplitWithGridOnRight from "./SplitWithGridOnRight";
import { IBackendLogo } from "types/components";

export interface ILogoCloudBlock {
  variant: keyof typeof variants;
  title?: string;
  logos?: IBackendLogo[];
  buttons?: IButton[];
  description?: string;
  anchor?: string;
}

const variants = {
  simple: Simple,
  "simple-with-heading": SimpleWithHeading,
  "simple-with-heading-on-brang": SimpleWithHeadingOnBrand,
  "off-white-grid": OffWhiteGrid,
  "split-with-grid-on-right": SplitWithGridOnRight,
};

export default function LogoClouds(props: ILogoCloudBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ILogoCloudBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
