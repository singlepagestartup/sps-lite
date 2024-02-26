import { IComponentProps } from "./interface";
import { Component as Client } from "./Component";
import { ReduxProvider } from "../../redux";

export function Component(props: IComponentProps) {
  const Comp = Client;

  return (
    <ReduxProvider>
      <Comp {...props} />
    </ReduxProvider>
  );
}
