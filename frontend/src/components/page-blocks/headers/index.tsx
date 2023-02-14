import { FC } from "react";
import { IHeaderSection, IPageProps } from "types";
import SimpleLinksOnLeft from "./SimpleLinksOnLeft";

const variants = {
  "simple-links-on-left": SimpleLinksOnLeft,
};

export default function HeaderSections(props: IPageProps) {
  const Comp = variants[
    props.header.variant as keyof typeof variants
  ] as FC<IPageProps>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
