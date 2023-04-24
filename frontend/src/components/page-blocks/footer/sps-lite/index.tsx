import { ISpsLiteBackendFooterBlock } from "types/components/page-blocks/sps-lite";
import { FC } from "react";
import FourColumnsWithCompanyMission from "./FourColumnsWithCompanyMission";

export interface ISpsLiteFooterBlock extends ISpsLiteBackendFooterBlock {
  isLoading?: boolean;
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
