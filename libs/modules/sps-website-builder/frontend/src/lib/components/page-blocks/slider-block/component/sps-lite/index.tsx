import Simple from "./Simple";
import { IPageBlock, IPageBlockExtended } from "..";

export const variants = {
  simple: Simple,
};

export default function SpsLite(props: IPageBlock | IPageBlockExtended) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
