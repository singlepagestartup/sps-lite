import { FC } from "react";
import { IButton } from "~components/buttons/simple-buttons";
import { IInputsProps } from "~components/inputs";
import Simple from "./Simple";

export interface IForm {
  title: string | null;
  inputs: IInputsProps[];
  subtitle: string | null;
  description: string | null;
  button?: IButton;
}

export interface IForms {
  variant: keyof typeof variants;
  form: IForm;
  className: string | null;
  anchor: string | null;
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
