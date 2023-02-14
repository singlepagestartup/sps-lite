import { FC, useMemo } from "react";
import { ILogoCloud, INotFound } from "types";
import Simple from "./Simple";

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
