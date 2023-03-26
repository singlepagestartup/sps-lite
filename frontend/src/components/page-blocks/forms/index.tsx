import { FC } from "react";
import { IForm } from "types";
import Simple from "./Simple";

export interface IForms {
  variant: `simple`;
  form: IForm;
  anchor?: string;
}

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
