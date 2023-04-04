import { FC } from "react";
import { IBackendPublicPageNavbar } from "types/single-types";
import { spsLiteVariants } from "./sps-lite";

export interface INavbarBlock extends IBackendPublicPageNavbar {}

const variants = {
  ...spsLiteVariants,
};

export default function PublicPageNavbars(props: INavbarBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<INavbarBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
