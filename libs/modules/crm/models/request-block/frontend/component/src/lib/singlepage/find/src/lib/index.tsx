import {
  Provider,
  api as clientApi,
} from "@sps/crm/models/request-block/sdk/client";
import { api as serverApi } from "@sps/crm/models/request-block/sdk/server";
import { IComponentProps } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/find2";

export function Component(props: IComponentProps) {
  return (
    <ParentComponent
      Provider={Provider}
      clientApi={clientApi}
      serverApi={serverApi}
      {...props}
    />
  );
}
