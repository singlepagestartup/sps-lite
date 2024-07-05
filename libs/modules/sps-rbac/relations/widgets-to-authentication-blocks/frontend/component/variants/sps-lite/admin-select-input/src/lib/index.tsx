import { IComponentProps } from "./interface";
import Client from "./client";
import Server from "./server";
import { Provider as ApiProvider } from "@sps/sps-rbac/relations/widgets-to-authentication-blocks/frontend/api/client";

export function Component(props: IComponentProps) {
  const Comp: any = props.isServer ? Server : Client;

  return (
    <ApiProvider>
      <Comp {...props} />
    </ApiProvider>
  );
}
