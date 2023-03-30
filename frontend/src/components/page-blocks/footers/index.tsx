import { FC } from "react";
import { IBackendFooter } from "types/models";
import FourColumnsSimple from "./FourColumnsSimple";
import FourColumnsWithCompanyMission from "./FourColumnsWithCompanyMission";
import FourColumnsSimpleDark from "./FourColunsSimpleDark";

export interface IFooterBlock extends IBackendFooter {}

const variants = {
  "four-columns-simple": FourColumnsSimple,
  "four-columns-simple-dark": FourColumnsSimpleDark,
  "four-columns-with-company-mission": FourColumnsWithCompanyMission,
};

export default function Footers(props: IFooterBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IFooterBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
