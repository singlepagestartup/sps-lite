import { Component as ClientComponent } from "./ClientComponent";
import { Component as Subject } from "@sps/rbac/models/subject/frontend/component";
import type { IComponentProps } from "./interface";
export function Component(props: IComponentProps) {
  return (
    <Subject isServer={props.isServer} variant="authentication-me-default">
      {({ data }) => (data ? <ClientComponent data={data} /> : null)}
    </Subject>
  );
}
