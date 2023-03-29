import { FC } from "react";
import { IBackendForm } from "types/models";
import Simple from "./Simple";

export interface IFormBlock {
  variant: keyof typeof variants;
  form: IBackendForm;
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
