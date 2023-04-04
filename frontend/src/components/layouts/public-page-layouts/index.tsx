import { FC } from "react";
import { IPublicPage } from "types/pages";
import { spsLiteVariants } from "./sps-lite";

const variants = {
  ...spsLiteVariants,
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
