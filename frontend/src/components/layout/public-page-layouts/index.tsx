import { FC } from "react";
import { IPage } from "types";
import Simple from "./Simple";

export interface IPublicPageLayout {
  id: number;
  variant: keyof typeof variants;
}

const variants = {
  simple: Simple,
};

export default function PublicPageLayouts(props: IPage) {
  const Comp = variants[
    props.publicPageLayout?.variant as keyof typeof variants
  ] as FC<IPage>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
