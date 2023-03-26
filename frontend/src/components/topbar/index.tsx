import { FC } from "react";
import { IButtons } from "types";
import Simple from "./Simple";

export interface ITopbar {
  variant: `simple`;
  title?: string;
  buttons?: IButtons[];
}

const variants = {
  simple: Simple,
};

export default function Topbar(props: ITopbar) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<ITopbar>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
