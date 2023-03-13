import { FC } from "react";
import { ITopbar } from "types";
import Simple from "./Simple";

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
