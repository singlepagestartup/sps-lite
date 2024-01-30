import Component from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import Error from "./Error";
import Skeleton from "./Skeleton";
import { IPageBlock, IPageBlockExtended } from "../..";

export default function FourColumnsWithCompanyMission(
  props: IPageBlock | IPageBlockExtended,
) {
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
