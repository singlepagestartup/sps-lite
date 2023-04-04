import { FC } from "react";
import { IBackendIncentivesBlock } from "types/components/page-blocks";
import { spsLiteVariants } from "./sps-lite";

export interface IIncentivesBlock extends IBackendIncentivesBlock {}

const variants = {
  ...spsLiteVariants,
};

export default function Incentives(props: IIncentivesBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IIncentivesBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
