import Simple from "./Simple";
import { IForm } from "..";

export const variants = {
  simple: Simple,
};

export default function SpsLite(props: IForm) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
