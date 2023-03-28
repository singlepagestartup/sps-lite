import { FC } from "react";
import { IMedia } from "types";
import { IButtons } from "~components/buttons";
import Topbar, { ITopbar } from "~components/page-blocks/topbar";
import SimpleLinksOnLeft from "./SimpleLinksOnLeft";

export interface IHeader {
  topbar?: ITopbar;
  logo: IMedia;
  buttons?: IButtons[];
  profileButtons?: IButtons[];
  additionalButtons?: IButtons[];
  ctaButtons?: IButtons[];
  position: string;
  variant: keyof typeof variants;
}

const variants = {
  "simple-links-on-left": SimpleLinksOnLeft,
};

export default function HeaderSections(props: IHeader) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<IHeader>;

  if (!Comp) {
    return <></>;
  }

  return (
    <div className={`z-30 ${props.position}`}>
      {props?.topbar ? <Topbar {...props?.topbar} /> : null}
      <Comp {...props} />
    </div>
  );
}
