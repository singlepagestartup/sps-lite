import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { Component as PagesToWidgetsSpsLiteSelectRight } from "@sps/sps-website-builder/relations/pages-to-widgets/frontend/component/variants/sps-lite/select-right";
import { Component as PagesToLayoutsSelectRight } from "@sps/sps-website-builder/relations/pages-to-layouts/frontend/component/variants/sps-lite/select-right";
import { variants } from "@sps/sps-website-builder/models/page/contracts/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={`${props.className || ""}`}
    >
      <div className="flex flex-col gap-6">
        <FormField
          ui="shadcn"
          type="text"
          name="title"
          label="Title"
          form={props.form}
          placeholder="Type title"
        />
        <FormField
          ui="shadcn"
          type="text"
          name="url"
          label="Url"
          form={props.form}
          placeholder="Type url"
        />
        <FormField
          ui="shadcn"
          type="select"
          label="Variant"
          name="variant"
          form={props.form}
          placeholder="Type title"
          options={variants.map((variant) => [variant, variant])}
        />
        <ModelEntitiesListCard title="pages-to-widgets">
          <div className="flex flex-col gap-6">
            {props.data?.pagesToWidgets.map((entity, index) => {
              return (
                <PagesToWidgetsSpsLiteSelectRight
                  key={index}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant="select-right"
                  pageId={props.data?.id}
                  data={entity}
                />
              );
            })}
            <PagesToWidgetsSpsLiteSelectRight
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant="select-right"
              pageId={props.data?.id}
              data={undefined}
            />
          </div>
        </ModelEntitiesListCard>
        <ModelEntitiesListCard title="pages-to-layouts">
          <div className="flex flex-col gap-6">
            {props.data?.pagesToLayouts.map((entity, index) => {
              return (
                <PagesToLayoutsSelectRight
                  key={index}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant="select-right"
                  pageId={props.data?.id}
                  data={entity}
                />
              );
            })}
            <PagesToLayoutsSelectRight
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant="select-right"
              pageId={props.data?.id}
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
