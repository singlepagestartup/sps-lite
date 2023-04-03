import { FC } from "react";
import Simple from "./Simple";
import OffWhiteGrid from "./OffWhiteGrid";
import SimpleWithHeading from "./SimpleWithHeading";
import SimpleWithHeadingOnBrand from "./SimpleWithHeadingOnBrand";
import SplitWithGridOnRight from "./SplitWithGridOnRight";
import { IBackendLogotypesCloudBlock } from "types/components/page-blocks";

export interface ILogotypesCloudBlock extends IBackendLogotypesCloudBlock {}

const variants = {
  simple: Simple,
  "simple-with-heading": SimpleWithHeading,
  "simple-with-heading-on-brang": SimpleWithHeadingOnBrand,
  "off-white-grid": OffWhiteGrid,
  "split-with-grid-on-right": SplitWithGridOnRight,
};

export default function LogotypesClouds(props: ILogotypesCloudBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ILogotypesCloudBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
