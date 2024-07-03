import { IComponentPropsExtended } from "./interface";
import { Component as AdminForm } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/frontend/component/variants/sps-lite/admin-form";
import { Component as AdminTableRow } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/frontend/component/variants/sps-lite/admin-table-row";
import { ModelEntitiesListCard } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="widget-to-hero-section-block"
      data-variant={props.variant}
      className={`${props.className || "w-full"}`}
    >
      <ModelEntitiesListCard
        title="widgets-to-hero-section-blocks"
        adminForm={
          <AdminForm
            isServer={props.isServer}
            hostUrl={props.hostUrl}
            variant="admin-form"
          />
        }
      >
        {props.data.map((entity, index) => {
          return (
            <AdminTableRow
              key={index}
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant="admin-table-row"
              data={entity}
            />
          );
        })}
      </ModelEntitiesListCard>
    </div>
  );
}
