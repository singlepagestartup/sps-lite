import Simple from "./Simple";
import { IModal } from "..";

export const variants = {
  simple: Simple,
};

export default function SpsLite(props: IModal) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
