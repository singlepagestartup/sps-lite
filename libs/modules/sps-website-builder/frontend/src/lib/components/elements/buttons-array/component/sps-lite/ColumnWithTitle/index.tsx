import Component from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import Skeleton from "./Skeleton";
import Error from "./Error";
import { IElement, IElementExtended } from "../..";

export default function ColumnWithTitle(props: IElement | IElementExtended) {
  return (
    <ErrorBoundary fallback={Error}>
      {props.showSkeletons ? (
        <Skeleton {...props} />
      ) : (
        <Component {...(props as IElementExtended)} />
      )}
    </ErrorBoundary>
  );
}
