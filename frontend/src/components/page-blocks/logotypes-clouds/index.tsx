import { FC } from "react";
import { IBackendLogotypesCloudBlock } from "types/components/page-blocks";
import { spsLiteVariants } from "./sps-lite";

export interface ILogotypesCloudBlock extends IBackendLogotypesCloudBlock {}

const variants = {
  ...spsLiteVariants,
};

export default function LogotypesClouds(props: ILogotypesCloudBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ILogotypesCloudBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
