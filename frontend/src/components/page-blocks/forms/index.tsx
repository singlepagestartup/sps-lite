import { FC } from "react";
import Simple from "./Simple";
import { IBackendFormBlock } from "types/components/page-blocks";

export interface IFormBlock
  extends Omit<IBackendFormBlock, `id` | `className` | `anchor`> {
  className?: string | null;
  anchor?: string | null;
}

const variants = {
  simple: Simple,
};

export default function Forms(props: IFormBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IFormBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
