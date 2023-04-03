import { FC } from "react";
import { IBackendPublicPageNavbar } from "types/single-types";
import SimpleLinksOnLeft from "./SimpleLinksOnLeft";

export interface INavbarBlock extends IBackendPublicPageNavbar {}

const variants = {
  "simple-links-on-left": SimpleLinksOnLeft,
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
