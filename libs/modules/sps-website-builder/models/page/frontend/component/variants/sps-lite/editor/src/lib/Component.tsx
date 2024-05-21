import { IComponentPropsExtended } from "./interface";
import { Component as SpsLiteAdminPanelPage } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin-panel";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page"
      data-variant={props.variant}
      className="bg-dotted"
    >
      <div className="max-w-7xl py-10 w-full mx-auto">
        <SpsLiteAdminPanelPage
          isServer={props.isServer}
          variant="admin-panel"
        />
      </div>
    </div>
  );
}
