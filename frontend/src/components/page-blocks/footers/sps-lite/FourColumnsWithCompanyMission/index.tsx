import { ISpsLiteFooterBlock } from "..";
import Component from "./Component";
import ErrorBoundary from "~components/wrappers/error-boundary";
import Error from "./Error";
import Skeleton from "./Skeleton";

export default function FourColumnsWithCompanyMission(
  props: ISpsLiteFooterBlock,
) {
  return (
    <ErrorBoundary fallback={Error}>
      {props.showSkeletons ? <Skeleton {...props} /> : <Component {...props} />}
    </ErrorBoundary>
  );
}
