import Simple from "./Simple";
import { IPageBlock } from "..";

export const variants = {
  simple: Simple,
};

export default function SpsLite(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
