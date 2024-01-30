import Component from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import Skeleton from "./Skeleton";
import Error from "./Error";
import { IPageBlock, IPageBlockExtended } from "../..";

export default function Split(props: IPageBlock | IPageBlockExtended) {
  return (
    <ErrorBoundary fallback={Error}>
      {props.showSkeletons ? (
        <Skeleton {...props} />
      ) : (
        <Component {...(props as IPageBlockExtended)} />
      )}
    </ErrorBoundary>
  );
}
