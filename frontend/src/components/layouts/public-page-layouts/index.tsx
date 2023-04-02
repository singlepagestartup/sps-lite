import { FC } from "react";
import { IPublicPage } from "types";
import Simple from "./Simple";

export interface IPublicPageLayout {
  id: number;
  variant: keyof typeof variants;
}

const variants = {
  simple: Simple,
};

export default function PublicPageLayouts(props: IPublicPage) {
  const Comp = variants[
    props.publicPageLayout?.variant as keyof typeof variants
  ] as FC<IPublicPage>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
