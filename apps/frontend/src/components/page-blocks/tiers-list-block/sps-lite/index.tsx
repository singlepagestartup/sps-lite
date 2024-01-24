import { IPageBlock } from "..";
import TwoColumnsCard from "./TwoColumnsCard";

export const variants = {
  "two-columns-card": TwoColumnsCard,
};

export default function SpsLite(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
