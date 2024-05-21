import { IComponentPropsExtended } from "./interface";
import { Component as Page } from "@sps/sps-website-builder-models-page-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <section data-module="frontend" className="w-full py-10 bg-dotted">
      <div className="w-full mx-auto max-w-7xl">
        <Page {...props} variant="admin-panel" />
      </div>
    </section>
  );
}
