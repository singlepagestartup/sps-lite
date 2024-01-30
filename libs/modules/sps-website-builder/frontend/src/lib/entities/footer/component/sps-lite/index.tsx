import Boxed from "./Boxed";
import { IFooter } from "..";

export const variants = {
  boxed: Boxed,
};

export default function SpsLite(props: IFooter) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
