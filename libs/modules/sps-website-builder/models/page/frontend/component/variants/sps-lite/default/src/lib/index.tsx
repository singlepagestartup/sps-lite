import { IComponentPropsExtended } from "./interface";
import Server from "./server";
import Client from "./client";
import { ReduxProvider } from "@sps/sps-website-builder-models-page-frontend-redux";

export function Component(props: IComponentPropsExtended) {
  const Comp: any = props.isServer ? Server : Client;

  return (
    <ReduxProvider>
      <Comp {...props} />
    </ReduxProvider>
  );
}
