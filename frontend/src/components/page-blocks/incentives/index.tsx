import { FC } from "react";
import { IIncentives } from "types";
import FourColumnWithIllustrations from "./FourColumnWithIllustrations";

const variants = {
  "four-column-with-illustrations": FourColumnWithIllustrations,
};

export default function Incentives(props: IIncentives) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IIncentives>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
