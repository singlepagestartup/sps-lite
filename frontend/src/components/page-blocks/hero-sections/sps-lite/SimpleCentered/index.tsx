import { ISpsLiteHeroSectionBlock } from "..";
import Component from "./Component";
import ErrorBoundary from "~components/wrappers/error-boundary";
import Skeleton from "./Skeleton";
import Error from "./Error";

export default function SimpleCentered(props: ISpsLiteHeroSectionBlock) {
  return (
    <ErrorBoundary fallback={Error}>
      {props.showSkeletons ? <Skeleton {...props} /> : <Component {...props} />}
    </ErrorBoundary>
  );
}
