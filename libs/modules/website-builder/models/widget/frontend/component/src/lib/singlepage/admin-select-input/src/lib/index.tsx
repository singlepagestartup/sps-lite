import {
  Provider,
  api as clientApi,
} from "@sps/website-builder/models/widget/sdk/client";
import { api as serverApi } from "@sps/website-builder/models/widget/sdk/server";
import { IComponentProps } from "./interface";
// import Client from "./client";
// import Server from "./server";
// import { Skeleton } from "./Skeleton";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin-select-input2";
import { Component as InnerComponent } from "./Component";

export function Component(props: IComponentProps) {
  return (
    <ParentComponent
      // Client={Client}
      // Server={Server}
      // Skeleton={<Skeleton />}
      Component={InnerComponent}
      Provider={Provider}
      clientApi={clientApi}
      serverApi={serverApi}
      {...props}
    />
  );
}
