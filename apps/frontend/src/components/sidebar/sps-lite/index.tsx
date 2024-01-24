import OneQuarter from "./OneQuarter";
import { ISidebar } from "..";

export const variants = {
  "one-quarter": OneQuarter,
};

export default function SpsLite(props: ISidebar) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
