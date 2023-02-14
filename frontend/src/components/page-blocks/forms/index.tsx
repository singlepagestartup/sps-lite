import { FC } from "react";
import { IForms } from "types";
import Simple from "./Simple";

const variants = {
  simple: Simple,
};

export default function Forms(props: IForms) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<IForms>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
