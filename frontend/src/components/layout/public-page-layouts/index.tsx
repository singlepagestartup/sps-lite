import { FC } from "react";
import { IPageProps } from "types";
import Simple from "./Simple";

const variants = {
  simple: Simple,
};

export default function PublicPageLayouts(props: IPageProps) {
  const Comp = variants[
    props.publicPageLayout?.variant as keyof typeof variants
  ] as FC<IPageProps>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
