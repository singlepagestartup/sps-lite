import { IComponentProps } from "./interface";
import { ReduxProvider } from "../../../redux";
import Client from "./client";
import Server from "./server";

export function Component<T>(props: IComponentProps<T>) {
  const Comp = props.isServer ? Server : Client;

  return (
    <ReduxProvider>
      <Comp<any> {...props} />
    </ReduxProvider>
  );
}
