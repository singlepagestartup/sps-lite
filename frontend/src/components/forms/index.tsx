import { FC } from "react";
import { spsLiteVariants } from "./sps-lite";
import { IBackendForm } from "types/collection-types";

export interface IForm
  extends Omit<IBackendForm, `id` | `className` | `anchor`> {
  className?: string | null;
  anchor?: string | null;
}

const variants = {
  ...spsLiteVariants,
};

export default function Forms(props: IForm) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<IForm>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
