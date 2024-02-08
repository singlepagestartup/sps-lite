import { FC } from "react";
import { ITable } from "..";

export const variants = {};

export default function Startup(props: ITable) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<ITable>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
