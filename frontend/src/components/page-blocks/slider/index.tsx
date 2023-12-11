import { variants as spsLiteVariants } from "./sps-lite";
import { IPageBlock } from "..";

const variants = {
  ...spsLiteVariants,
};

export default function Slider(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
