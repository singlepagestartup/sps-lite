import { FC } from "react";
import FourColumnsWithCompanyMission from "./FourColumnsWithCompanyMission";
import { ISpsLiteBackendComponentFooterBlock } from "~redux/services/backend/components/page-blocks/footer-block/interfaces/sps-lite";

export interface ISpsLiteFooterBlock
  extends ISpsLiteBackendComponentFooterBlock {
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
