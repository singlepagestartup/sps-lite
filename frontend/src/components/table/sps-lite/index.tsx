import { ITable } from "..";
import Simple from "./Simple";

export const variants = {
  simple: Simple,
};

export default function SpsLite(props: ITable) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
