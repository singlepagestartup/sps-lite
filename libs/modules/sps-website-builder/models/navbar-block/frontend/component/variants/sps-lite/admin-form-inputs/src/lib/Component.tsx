import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-website-builder/models/navbar-block/contracts/root";
import { Component as NavbarBlocksToButtonsArraySpsLiteSelectRight } from "@sps/sps-website-builder/relations/navbar-blocks-to-buttons-arrays/frontend/component/variants/sps-lite/select-right";
import { Component as NavbarBlocksToLogotypes } from "@sps/sps-website-builder/relations/navbar-blocks-to-logotypes/frontend/component/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="navbar-block"
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
          placeholder="Type title"
        />

        <FormField
          ui="shadcn"
          type="text"
          label="Subtitle"
          name="subtitle"
          form={props.form}
          placeholder="Type subtitle"
        />

        <FormField
          ui="shadcn"
          type="text"
          label="Description"
          name="description"
          form={props.form}
          placeholder="Type description"
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

        <FormField
          ui="shadcn"
          type="text"
          label="Class name"
          name="className"
          form={props.form}
          placeholder="Type class name"
        />

        <ModelEntitiesListCard title="navbar-blocks-to-buttons-arrays">
          <div className="flex flex-col gap-6">
            {props.data?.navbarBlocksToButtonsArrays.map((entity, index) => {
              return (
                <NavbarBlocksToButtonsArraySpsLiteSelectRight
                  key={index}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant="select-right"
                  data={entity}
                />
              );
            })}
            <NavbarBlocksToButtonsArraySpsLiteSelectRight
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant="select-right"
            />
          </div>
        </ModelEntitiesListCard>

        <ModelEntitiesListCard title="navbar-blocks-to-logotypes">
          <div className="flex flex-col gap-6">
            {props.data?.navbarBlocksToLogotypes.map(
              (navbarBlocksToLogotypes, index) => {
                return (
                  <NavbarBlocksToLogotypes
                    key={index}
                    variant="select-right"
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    data={navbarBlocksToLogotypes}
                  />
                );
              },
            )}
            <NavbarBlocksToLogotypes
              variant="select-right"
              isServer={props.isServer}
              hostUrl={props.hostUrl}
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
