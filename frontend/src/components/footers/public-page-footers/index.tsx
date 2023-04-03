import { FC } from "react";
import FourColumnsSimple from "./FourColumnsSimple";
import FourColumnsWithCompanyMission from "./FourColumnsWithCompanyMission";
import FourColumnsSimpleDark from "./FourColunsSimpleDark";
import { IBackendPublicPageFooter } from "types/single-types/sps-lite";

export interface IPublicPageFooterBlock extends IBackendPublicPageFooter {}

const variants = {
  "four-columns-simple": FourColumnsSimple,
  "four-columns-simple-dark": FourColumnsSimpleDark,
  "four-columns-with-company-mission": FourColumnsWithCompanyMission,
};

export default function PublicPageFooters(props: IPublicPageFooterBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IPublicPageFooterBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
