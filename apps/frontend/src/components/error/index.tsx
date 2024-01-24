import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { ErrorBoundaryState } from "~components/wrappers/error-boundary";

export interface IError extends ErrorBoundaryState {
  variant: "simple";
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export default function Error(props: IError) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
