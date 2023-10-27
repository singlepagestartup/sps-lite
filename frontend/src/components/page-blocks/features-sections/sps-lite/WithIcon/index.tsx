import { ISpsLiteFeaturesSectionBlock } from "..";
import Component from "./Component";
import ErrorBoundary from "~components/wrappers/error-boundary";
import Error from "./Error";
import Skeleton from "./Skeleton";

export default function WithIcon(props: ISpsLiteFeaturesSectionBlock) {
  return (
    <ErrorBoundary fallback={Error}>
      {props.showSkeletons ? <Skeleton {...props} /> : <Component {...props} />}
    </ErrorBoundary>
  );
}
