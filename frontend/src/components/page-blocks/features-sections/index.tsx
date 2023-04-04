import { FC } from "react";
import { IBackendFeaturesSectionBlock } from "types/components/page-blocks";
import { spsLiteVariants } from "./sps-lite";

export interface IFeaturesSectionBlock extends IBackendFeaturesSectionBlock {}

const variants = {
  ...spsLiteVariants,
};

export default function FeaturesSections(props: IFeaturesSectionBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IFeaturesSectionBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
