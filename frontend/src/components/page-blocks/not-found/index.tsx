import { FC } from "react";
import Simple from "./Simple";
import { IBackendNotFoundBlock } from "types/components/page-blocks";

export interface INotFoundBlock extends IBackendNotFoundBlock {}

const variants = {
  simple: Simple,
};

export default function NotFound(props: INotFoundBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<INotFoundBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
