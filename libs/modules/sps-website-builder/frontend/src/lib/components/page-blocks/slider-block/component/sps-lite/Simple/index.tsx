import Component from "./Component";
import Skeleton from "./Skeleton";
import Error from "./Error";
import { IPageBlock, IPageBlockExtended } from "../..";
import { ErrorBoundary } from "@sps/ui-adapter";

export default function Simple(props: IPageBlock | IPageBlockExtended) {
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
