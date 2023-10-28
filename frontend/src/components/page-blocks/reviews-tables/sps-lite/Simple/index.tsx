import { ISpsLiteReviewsTableBlock } from "..";
import Component from "./Component";
import ErrorBoundary from "~components/wrappers/error-boundary";
import Skeleton from "./Skeleton";
import Error from "./Error";

export default function Simple(props: ISpsLiteReviewsTableBlock) {
  return (
    <ErrorBoundary fallback={Error}>
      {props.showSkeletons ? <Skeleton {...props} /> : <Component {...props} />}
    </ErrorBoundary>
  );
}
