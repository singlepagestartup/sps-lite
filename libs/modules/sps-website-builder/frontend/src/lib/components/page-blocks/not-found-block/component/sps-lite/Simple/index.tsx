import Component from "./Component";
import Skeleton from "./Skeleton";
import Error from "./Error";
import { IComponentProps, IComponentPropsExtended } from "../..";
import { ErrorBoundary } from "@sps/ui-adapter";

export default function Simple(
  props: IComponentProps | IComponentPropsExtended,
) {
  return (
    <ErrorBoundary fallback={Error}>
      {props.showSkeletons ? (
        <Skeleton {...props} />
      ) : (
        <Component {...(props as IComponentPropsExtended)} />
      )}
    </ErrorBoundary>
  );
}
