import { IComponentPropsExtended } from "./interface";
import Server from "./server";
import { ReduxProvider } from "@sps/sps-website-builder-models-page-frontend-redux";

export function Component(props: IComponentPropsExtended) {
  const Comp = Server;

  return (
    <ReduxProvider>
      <Comp {...props} />
    </ReduxProvider>
  );
}
