import { FC } from "react";
import Simple from "./Simple";
import OffWhiteGrid from "./OffWhiteGrid";
import SimpleWithHeading from "./SimpleWithHeading";
import SimpleWithHeadingOnBrand from "./SimpleWithHeadingOnBrand";
import SplitWithGridOnRight from "./SplitWithGridOnRight";
import { IBackendButton, IBackendLogotype } from "types/components";

export interface ILogotypesCloudBlock {
  variant: keyof typeof variants;
  title?: string;
  logotypes?: IBackendLogotype[];
  buttons?: IBackendButton[];
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

export default function LogotypesClouds(props: ILogotypesCloudBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ILogotypesCloudBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
