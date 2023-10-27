import { FC } from "react";
import Simple from "./Simple";
import { ErrorBoundaryState } from "~components/wrappers/error-boundary";

export interface ISpsLiteError extends ErrorBoundaryState {
  variant: "simple";
}

export const variants = {
  simple: Simple,
};

export default function Errors(props: ISpsLiteError) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteError>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
