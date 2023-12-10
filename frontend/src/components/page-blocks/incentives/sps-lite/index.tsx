import { ISpsLiteBackendComponentIncentivesBlock } from "~redux/services/backend/components/page-blocks/incentives-block/interfaces/sps-lite";
import FourColumnWithIllustrations from "./FourColumnWithIllustrations";
import { FC } from "react";

export interface ISpsLiteIncentivesBlock
  extends ISpsLiteBackendComponentIncentivesBlock {
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
