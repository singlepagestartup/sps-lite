import { ISpsLiteBackendPublicPageFooter } from "types/single-types/sps-lite";
import FourColumnsWithCompanyMission from "./FourColumnsWithCompanyMission";
import { FC } from "react";

export interface ISpsLitePublicPageFooterBlock
  extends ISpsLiteBackendPublicPageFooter {}

export const variants = {
  "four-columns-with-company-mission": FourColumnsWithCompanyMission,
};

export default function PublicPageFooters(
  props: ISpsLitePublicPageFooterBlock
) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLitePublicPageFooterBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
