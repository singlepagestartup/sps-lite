import { FC } from "react";
import { IBackendPublicPageFooter } from "types/single-types";
import { spsLiteVariants } from "./sps-lite";

export interface IPublicPageFooterBlock extends IBackendPublicPageFooter {}

const variants = {
  ...spsLiteVariants,
};

export default function PublicPageFooters(props: IPublicPageFooterBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IPublicPageFooterBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
