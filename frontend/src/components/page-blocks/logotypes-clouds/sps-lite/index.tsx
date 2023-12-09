import { ISpsLiteBackendLogotypesCloudBlock } from "~redux/services/backend/components/page-blocks/logotypes-cloud-block/interfaces/sps-lite";
import SimpleWithHeading from "./SimpleWithHeading";
import { FC } from "react";

export interface ISpsLiteLogotypesCloudBlock
  extends ISpsLiteBackendLogotypesCloudBlock {
  showSkeletons?: boolean;
}

export const variants = {
  "simple-with-heading": SimpleWithHeading,
};

export default function LogotypesClouds(props: ISpsLiteLogotypesCloudBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteLogotypesCloudBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
