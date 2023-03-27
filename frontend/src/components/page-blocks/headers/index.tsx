import { FC } from "react";
import { IPageProps } from "types";
import Topbar from "~components/page-blocks/topbar";
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

  return (
    <div className={`z-30 ${props.header.position}`}>
      {props.header?.topbar ? <Topbar {...props.header?.topbar} /> : null}
      <Comp {...props} />
    </div>
  );
}
