import { IPageBlock } from "..";
import DarkWithImage from "./DarkWithImage";

export const variants = {
  "dark-with-image": DarkWithImage,
};

export default function SpsLite(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
