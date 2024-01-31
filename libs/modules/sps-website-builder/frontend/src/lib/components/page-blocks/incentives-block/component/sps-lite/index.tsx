import FourColumnWithIllustrations from "./FourColumnWithIllustrations";
import { IComponentProps, IComponentPropsExtended } from "..";

export const variants = {
  "four-column-with-illustrations": FourColumnWithIllustrations,
};

export default function SpsLite(
  props: IComponentProps | IComponentPropsExtended,
) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
