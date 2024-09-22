import { Suspense } from "react";
import { IComponentProps } from "./interface";
import { Provider as ParentProvider } from "@sps/shared-frontend-client-api";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Error } from "./Error";

export function Component<M extends { id: string }, V>(
  props: IComponentProps<M, V> & {
    Provider: typeof ParentProvider;
    Client: (props: IComponentProps<M, V>) => React.ReactElement;
    Server: (props: IComponentProps<M, V>) => Promise<React.ReactElement>;
    Skeleton: () => React.ReactElement;
  },
) {
  const Server = props.Server;
  const Client = props.Client;
  const Skeleton = props.Skeleton;

  const Comp: any = props.isServer ? Server : Client;

  const Provider = props.Provider;

  return (
    <ErrorBoundary fallback={Error}>
      <Suspense fallback={<Skeleton />}>
        <Provider>
          <Comp {...props} />
        </Provider>
      </Suspense>
    </ErrorBoundary>
  );
}
