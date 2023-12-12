import Simple from "./Simple";
import { ISlider } from "../";

export const variants = {
  simple: Simple,
};

export default function Slider(props: ISlider) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
