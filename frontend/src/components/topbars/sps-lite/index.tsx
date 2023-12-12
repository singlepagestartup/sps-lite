import Boxed from "./Boxed";
import { ITopbar } from "..";

export const variants = {
  boxed: Boxed,
};

export default function PublicPageTopbars(props: ITopbar) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
