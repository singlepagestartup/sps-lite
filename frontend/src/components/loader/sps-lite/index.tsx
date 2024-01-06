import Simple from "./Simple";
import { ILoader } from "..";

export const variants = {
  simple: Simple,
};

export default function SpsLite(props: ILoader) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
