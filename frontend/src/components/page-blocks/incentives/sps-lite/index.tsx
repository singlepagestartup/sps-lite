import FourColumnWithIllustrations from "./FourColumnWithIllustrations";
import { IPageBlock } from "..";

export const variants = {
  "four-column-with-illustrations": FourColumnWithIllustrations,
};

export default function Incentives(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
