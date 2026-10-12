import { Component as ClientComponent } from "./ClientComponent";
import type { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <ClientComponent
      isServer={props.isServer}
      variant={props.variant}
      data={props.data}
      className={props.className}
      children={props.children}
      initialProjects={props.initialProjects}
      loading={props.loading}
      renderError={props.renderError}
      renderProjects={props.renderProjects}
    />
  );
}
