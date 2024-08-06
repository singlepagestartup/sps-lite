import { Provider as ApiProvider } from "@sps/sps-file-storage/relations/widgets-to-files/sdk/client";
import { IComponentProps } from "./interface";
import Client from "./client";
import Server from "./server";
import { Skeleton } from "./Skeleton";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/default";

export function Component(props: IComponentProps) {
  return (
    <ParentComponent
      Client={Client}
      Server={Server}
      Skeleton={Skeleton}
      Provider={ApiProvider}
      {...props}
    />
  );
}
