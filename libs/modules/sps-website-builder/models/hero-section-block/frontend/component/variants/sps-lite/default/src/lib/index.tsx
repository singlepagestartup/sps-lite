import { IComponentProps } from "./interface";
import Client from "./client";
import Server from "./server";
import { Provider as ApiProvider } from "@sps/sps-website-builder/models/hero-section-block/frontend/api/client";
// import { ReduxProvider } from "@sps/sps-website-builder/models/hero-section-block/frontend/redux";

export function Component(props: IComponentProps) {
  // const Comp: any = props.isServer ? Server : Client;
  const Comp: any = Client;

  return (
    <ApiProvider>
      <Comp {...props} />
    </ApiProvider>
  );
}
