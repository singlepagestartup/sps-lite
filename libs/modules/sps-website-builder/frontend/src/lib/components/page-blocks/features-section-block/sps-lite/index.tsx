import { IPageBlock } from "..";
import WithIcon from "./WithIcon";

export const variants = {
  "with-icon": WithIcon,
};

export default function SpsLite(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
