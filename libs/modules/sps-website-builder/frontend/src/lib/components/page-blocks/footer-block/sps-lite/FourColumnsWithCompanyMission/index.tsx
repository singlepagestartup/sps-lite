import Component from "./Component";
import ErrorBoundary from "../../../../../../../../../../shared/ui/adapter/src/lib/wrappers/error-boundary";
import Error from "./Error";
import Skeleton from "./Skeleton";
import { IPageBlock } from "../..";

export default function FourColumnsWithCompanyMission(props: IPageBlock) {
  return (
    <ErrorBoundary fallback={Error}>
      {props.showSkeletons ? <Skeleton {...props} /> : <Component {...props} />}
    </ErrorBoundary>
  );
}
