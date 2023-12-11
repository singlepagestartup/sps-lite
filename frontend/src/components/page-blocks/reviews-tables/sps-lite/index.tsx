import { IPageBlock } from "..";
import Simple from "./Simple";

export const variants = {
  simple: Simple,
};

export default function ReviewsTables(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
