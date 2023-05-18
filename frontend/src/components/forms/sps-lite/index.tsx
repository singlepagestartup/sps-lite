import { ISpsLiteBackendForm } from "types/collection-types/sps-lite";
import Simple from "./Simple";
import { FC } from "react";

export interface ISpsLiteFormBlock
  extends Omit<ISpsLiteBackendForm, "id" | "className" | "anchor"> {
  className?: string | null;
  anchor?: string | null;
  successCallback?: any;
}

export const variants = {
  simple: Simple,
};

export default function Forms(props: ISpsLiteFormBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteFormBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
