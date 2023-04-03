import { FC } from "react";
import Simple from "./Simple";
import { IPublicPage } from "types/pages/sps-lite";

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
