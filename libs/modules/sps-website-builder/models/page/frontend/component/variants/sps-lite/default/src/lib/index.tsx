import { IComponentPropsExtended } from "./interface";
import Server from "./server";
import { ReduxProvider } from "@sps/sps-website-builder-models-page-frontend-redux";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Error } from "./Error";

export function Component(props: IComponentPropsExtended) {
  const Comp: any = Server;

  return (
    <ErrorBoundary fallback={Error}>
      <ReduxProvider>
        <Comp {...props} />
      </ReduxProvider>
    </ErrorBoundary>
  );
}
