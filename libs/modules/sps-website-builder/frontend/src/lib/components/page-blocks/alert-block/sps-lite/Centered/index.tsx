import Component from "./Component";
import ErrorBoundary from "../../../../../../../../../../shared/ui/adapter/src/lib/wrappers/error-boundary";
import Skeleton from "./Skeleton";
import Error from "./Error";
import { IPageBlock } from "../..";

export default function Centered(props: IPageBlock) {
  return (
    <ErrorBoundary fallback={Error}>
      {props.showSkeletons ? <Skeleton {...props} /> : <Component {...props} />}
    </ErrorBoundary>
  );
}
