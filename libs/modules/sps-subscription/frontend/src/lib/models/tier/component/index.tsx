import { IComponentProps as IFindOneComponentProps } from "./find-one/interface";
import { IComponentProps as IFindManyComponentProps } from "./find-many/interface";
import { ReduxProvider } from "../../../redux";
import Client from "./client";
import Server from "./server";

export function Component(
  props: IFindOneComponentProps | IFindManyComponentProps,
) {
  const Comp = props.isServer ? Server : Client;

  return (
    <ReduxProvider>
      <Comp {...props} />
    </ReduxProvider>
  );
}
