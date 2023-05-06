import { ISpsLiteBackendIncentivesBlock } from "types/components/page-blocks/sps-lite";
import FourColumnWithIllustrations from "./FourColumnWithIllustrations";
import { FC } from "react";

export interface ISpsLiteIncentivesBlock
  extends ISpsLiteBackendIncentivesBlock {
  showSkeletons?: boolean;
}

export const variants = {
  "four-column-with-illustrations": FourColumnWithIllustrations,
};

export default function Incentives(props: ISpsLiteIncentivesBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteIncentivesBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
