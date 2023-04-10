import { FC } from "react";
import { IButtonsArray, variants as spsLiteVariants } from "./sps-lite";
import ClientOnlyWrapper from "~components/wrappers/client-only";

const variants = { ...spsLiteVariants };

export default function ButtonsArrays<T extends IButtonsArray>(props: T) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<T>;

  if (!Comp) {
    return <></>;
  }

  return (
    <ClientOnlyWrapper>
      <Comp {...props} />
    </ClientOnlyWrapper>
  );
}
