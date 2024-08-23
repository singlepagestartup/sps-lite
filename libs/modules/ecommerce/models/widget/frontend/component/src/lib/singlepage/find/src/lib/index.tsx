import { Provider } from "@sps/ecommerce/models/widget/sdk/client";
import { IComponentProps } from "./interface";
import Client from "./client";
import Server from "./server";
import { Skeleton } from "./Skeleton";
import { Suspense } from "react";

export function Component(props: IComponentProps) {
  const Comp: any = props.isServer ? Server : Client;

  return (
    <Suspense fallback={<Skeleton />}>
      <Provider>
        <Comp {...props} />
      </Provider>
    </Suspense>
  );
}
