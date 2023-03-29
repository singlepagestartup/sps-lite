import { FC } from "react";
import { IBackendTopbar } from "types/models";
import Simple from "./Simple";

export interface ITopbarBlock extends IBackendTopbar {}

const variants = {
  simple: Simple,
};

export default function Topbars(props: ITopbarBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ITopbarBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
