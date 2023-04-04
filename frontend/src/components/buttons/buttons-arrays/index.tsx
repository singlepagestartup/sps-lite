import { FC } from "react";
import { IBackendButtonsArray } from "types/components/elements";
import { spsLiteVariants } from "./sps-lite";

export interface IButtonsArray
  extends Omit<
    IBackendButtonsArray,
    `id` | `description` | `className` | `__component`
  > {
  description?: string | null;
  className?: string | null;
  __component?: IBackendButtonsArray[`__component`];
}

const variants = { ...spsLiteVariants };

export default function ButtonsArrays(props: IButtonsArray) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IButtonsArray>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
