import { IComponentProps } from "./interface";
import Client from "./client";
import { ReduxProvider } from "@sps/sps-website-builder-slider-component-redux";

export function Component(props: IComponentProps) {
  const Comp = Client;

  return (
    <ReduxProvider>
      <Comp {...props} />
    </ReduxProvider>
  );
}
