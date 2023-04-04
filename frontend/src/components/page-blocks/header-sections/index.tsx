import { FC } from "react";
import { IBackendHeaderSectionBlock } from "types/components/page-blocks";
import { spsLiteVariants } from "./sps-lite";

export interface IHeaderSectionBlock extends IBackendHeaderSectionBlock {}

const variants = {
  ...spsLiteVariants,
};

export default function HeaderSections(props: IHeaderSectionBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IHeaderSectionBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
