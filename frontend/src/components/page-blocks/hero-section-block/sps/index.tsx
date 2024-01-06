import { IPageBlock } from "..";
import Split from "./Split";

export const variants = {
  split: Split,
};

export default function Sps(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
