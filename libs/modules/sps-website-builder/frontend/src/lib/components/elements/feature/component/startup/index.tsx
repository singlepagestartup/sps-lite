import { FC } from "react";
import { IComponentProps, IComponentPropsExtended } from "..";

export const variants = {};

export default function Startup(
  props: IComponentProps | IComponentPropsExtended,
) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<
    IComponentProps | IComponentPropsExtended
  >;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
