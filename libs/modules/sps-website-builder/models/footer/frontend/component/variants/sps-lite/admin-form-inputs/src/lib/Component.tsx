import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-website-builder/models/footer/contracts/root";
import { Component as FootersToWidgetsSpsLiteSelectRight } from "@sps/sps-website-builder/relations/footers-to-widgets/frontend/component/variants/sps-lite/select-right";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="footer"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={`${props.className || ""}`}
    >
      <div className="flex flex-col gap-6">
        <FormField
          ui="shadcn"
          type="text"
          label="Title"
          name="title"
          form={props.form}
          placeholder="Enter title"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Class Name"
          name="className"
          form={props.form}
          placeholder="Enter class name"
        />
        <FormField
          ui="shadcn"
          type="select"
          label="Variant"
          name="variant"
          form={props.form}
          placeholder="Select variant"
          options={variants.map((variant) => [variant, variant])}
        />
        <ModelEntitiesListCard title="footers-to-widgets">
          <div className="flex flex-col gap-6">
            {props.data?.footersToWidgets.map((footerToWidget, index) => {
              return (
                <FootersToWidgetsSpsLiteSelectRight
                  key={index}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  data={footerToWidget}
                  variant="select-right"
                />
              );
            })}

            <FootersToWidgetsSpsLiteSelectRight
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant="select-right"
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
