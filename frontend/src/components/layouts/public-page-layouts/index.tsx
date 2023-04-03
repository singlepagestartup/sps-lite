import { FC } from "react";
import { IBackendPublicPage } from "types";
import Simple from "./Simple";

const variants = {
  simple: Simple,
};

export default function PublicPageLayouts(props: IBackendPublicPage) {
  const Comp = variants[
    props.publicPageLayout?.variant as keyof typeof variants
  ] as FC<IBackendPublicPage>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
