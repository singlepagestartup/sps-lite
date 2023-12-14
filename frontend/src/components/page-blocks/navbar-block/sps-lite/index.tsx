import { IPageBlock } from "..";
import SimpleLinksOnLeft from "./SimpleLinksOnLeft";

export const variants = {
  "simple-links-on-left": SimpleLinksOnLeft,
};

export default function SpsLite(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
