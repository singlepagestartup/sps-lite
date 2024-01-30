import Component from "./Component";
import Skeleton from "./Skeleton";
import Error from "./Error";
import { IPageBlock } from "../..";
import { ErrorBoundary } from "@sps/ui-adapter";

export default function Simple(props: IPageBlock) {
  return (
    <ErrorBoundary fallback={Error}>
      {props.showSkeletons ? <Skeleton {...props} /> : <Component {...props} />}
    </ErrorBoundary>
  );
}
