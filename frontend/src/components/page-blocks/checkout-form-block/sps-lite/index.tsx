import SingleStepWithTier from "./SingleStepWithTier";
import { IPageBlock } from "..";

export const variants = {
  "single-step-with-tier": SingleStepWithTier,
};

export default function SpsLite(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
