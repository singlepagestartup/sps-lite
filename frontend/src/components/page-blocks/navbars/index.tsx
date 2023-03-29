import { FC } from "react";
import { IBackendNavbar } from "types/models";
import SimpleLinksOnLeft from "./SimpleLinksOnLeft";

export interface INavbarBlock extends IBackendNavbar {}

const variants = {
  "simple-links-on-left": SimpleLinksOnLeft,
};

export default function Navbars(props: INavbarBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<INavbarBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
