import Boxed from "./Boxed";
import { INavbar } from "..";

export const variants = {
  boxed: Boxed,
};

export default function Navbars(props: INavbar) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
