import { FC } from "react";
import ClientOnlyWrapper from "~components/wrappers/client-only";
import { IBackendButton } from "types/components/elements";
import { spsLiteVariants } from "./sps-lite";

export interface IButton
  extends Omit<
    IBackendButton,
    | `id`
    | `url`
    | `description`
    | `className`
    | `additionalAttributes`
    | `__component`
  > {
  url?: string | null;
  description?: string | null;
  className?: string | null;
  additionalAttributes?: any | null;
  onClick?: any;
  __component?: IBackendButton[`__component`];
}

const variants = {
  ...spsLiteVariants,
};

export default function SimpleButtons(props: IButton) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<IButton>;

  if (!Comp) {
    return <></>;
  }

  return (
    <ClientOnlyWrapper>
      <Comp {...props} />
    </ClientOnlyWrapper>
  );
}
