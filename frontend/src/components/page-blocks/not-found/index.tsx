import { FC } from "react";
import { IButton } from "~components/buttons/simple-buttons";
import Simple from "./Simple";

export interface INotFoundBlock {
  variant: keyof typeof variants;
  title?: string;
  subtitle?: string;
  description?: string;
  buttons?: IButton[];
}

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
