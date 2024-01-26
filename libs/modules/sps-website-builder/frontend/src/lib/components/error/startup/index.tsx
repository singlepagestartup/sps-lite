import { FC } from "react";
import { IError } from "..";

export const variants = {};

export default function Startup(props: IError) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<IError>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
