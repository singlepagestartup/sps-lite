import { FC } from "react";
import FourColumnsWithCompanyMission from "./FourColumnsWithCompanyMission";
import { ISpsLiteBackendFooterBlock } from "~redux/services/backend/components/page-blocks/footer-block/interfaces/sps-lite";

export interface ISpsLiteFooterBlock extends ISpsLiteBackendFooterBlock {
  showSkeletons?: boolean;
}

export const variants = {
  "four-columns-with-company-mission": FourColumnsWithCompanyMission,
};

export default function Footers(props: ISpsLiteFooterBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteFooterBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
