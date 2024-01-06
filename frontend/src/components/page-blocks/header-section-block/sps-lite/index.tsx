import { IPageBlock } from "..";
import SimpleCentered from "./SimpleCentered";

export const variants = {
  "simple-centered": SimpleCentered,
};

export default function SpsLite(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
