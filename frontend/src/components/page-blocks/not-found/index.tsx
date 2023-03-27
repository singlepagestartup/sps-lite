import { FC } from "react";
import { IButton } from "~components/buttons/simple-buttons";
import Simple from "./Simple";

export interface INotFound {
  variant: `simple`;
  title: string;
  description: string;
  buttons?: IButton[];
}

const variants = {
  simple: Simple,
};

export default function NotFound(props: INotFound) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<INotFound>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
