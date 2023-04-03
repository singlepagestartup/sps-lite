import { FC } from "react";
import { IBackendPublicPageTopbar } from "types/single-types";
import Simple from "./Simple";

export interface IBackendPublicPageBlock extends IBackendPublicPageTopbar {}

const variants = {
  simple: Simple,
};

export default function PublicPageTopbars(props: IBackendPublicPageBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IBackendPublicPageBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
