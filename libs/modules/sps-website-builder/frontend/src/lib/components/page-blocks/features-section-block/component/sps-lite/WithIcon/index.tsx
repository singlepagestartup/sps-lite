import Component from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import Error from "./Error";
import Skeleton from "./Skeleton";
import { IPageBlock } from "../..";

export default function WithIcon(props: IPageBlock) {
  return (
    <ErrorBoundary fallback={Error}>
      {props.showSkeletons ? <Skeleton {...props} /> : <Component {...props} />}
    </ErrorBoundary>
  );
}
