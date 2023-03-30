import { FC } from "react";
import { IBackendButton } from "types/components";
import Simple from "./Simple";

export interface INotFoundBlock {
  variant: keyof typeof variants;
  title?: string;
  subtitle?: string;
  description?: string;
  buttons?: IBackendButton[];
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
