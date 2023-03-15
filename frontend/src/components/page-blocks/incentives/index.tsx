import { FC } from "react";
import { IFeature, IMedia } from "types";
import FourColumnWithIllustrations from "./FourColumnWithIllustrations";

export interface IIncentives {
  features: IFeature[];
  title?: string;
  description?: string;
  media?: IMedia[];
  variant: `four-column-with-illustrations`;
  anchor?: string;
}

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
