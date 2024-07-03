import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { queryClient } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/frontend/api/client";
import { variants } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/contracts/root";
import { route } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/frontend/api/model";
import { Button } from "@sps/shared-ui-shadcn";
import { Component as HeroSectionBlockAdminSelectInput } from "@sps/sps-website-builder/models/hero-section-block/frontend/component/variants/sps-lite/admin-select-input";
import { Component as WidgetAdminSelectInput } from "@sps/sps-website-builder/models/widget/frontend/component/variants/sps-lite/admin-select-input";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="widget-to-hero-section-block"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={`${props.className || ""}`}
    >
      <div className="flex flex-col gap-6">
        <Button
          variant="primary"
          onClick={() => {
            if (!props.data?.id) {
              return;
            }
            queryClient.invalidateQueries({
              queryKey: [`${route}/${props.data.id}`],
            });
          }}
        >
          Invalidate widget-to-hero-section-block
        </Button>
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
          label="Class name"
          name="className"
          form={props.form}
          placeholder="Type class name"
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
        <ModelEntitiesListCard title="widget">
          <div className="flex flex-col gap-6">
            {props.data?.heroSectionBlock ? (
              <WidgetAdminSelectInput
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant="admin-select-input"
                formFieldName="widgetId"
                form={props.form}
              />
            ) : (
              <WidgetAdminSelectInput
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant="admin-select-input"
                formFieldName="widgetId"
                form={props.form}
              />
            )}
          </div>
        </ModelEntitiesListCard>

        <ModelEntitiesListCard title="hero-section-block">
          <div className="flex flex-col gap-6">
            {props.data?.heroSectionBlock ? (
              <HeroSectionBlockAdminSelectInput
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant="admin-select-input"
                formFieldName="heroSectionBlockId"
                form={props.form}
              />
            ) : (
              <HeroSectionBlockAdminSelectInput
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant="admin-select-input"
                formFieldName="heroSectionBlockId"
                form={props.form}
              />
            )}
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
