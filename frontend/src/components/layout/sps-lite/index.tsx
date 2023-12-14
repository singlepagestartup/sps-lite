import Wide from "./Wide";
import Boxed from "./Boxed";
import { ILayout } from "..";

export const variants = {
  wide: Wide,
  boxed: Boxed,
};

export default function SpsLite(props: ILayout) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
