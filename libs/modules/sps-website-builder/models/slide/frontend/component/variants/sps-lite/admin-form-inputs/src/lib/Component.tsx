import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-website-builder/models/slide/contracts/root";
import { Component as SlidesToSpsFileStorageWidgets } from "@sps/sps-website-builder/relations/slides-to-sps-file-storage-module-widgets/frontend/component/root";
import { Component as SlidesToButtonsArrays } from "@sps/sps-website-builder/relations/slides-to-buttons-arrays/frontend/component/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="slide"
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
          placeholder="Select variant"
          options={variants.map((variant) => [variant, variant])}
        />
        <ModelEntitiesListCard title="slides-to-sps-file-storage-modules-widgets">
          <div className="flex flex-col gap-6">
            {props.data?.slidesToSpsFileStorageWidgets.map((entity, index) => {
              return (
                <SlidesToSpsFileStorageWidgets
                  key={index}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant="select-right"
                  data={entity}
                />
              );
            })}
            <SlidesToSpsFileStorageWidgets
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant="select-right"
              slideId={props.data?.id}
              data={undefined}
            />
          </div>
        </ModelEntitiesListCard>
        <ModelEntitiesListCard title="slides-to-buttons-arrays">
          <div className="flex flex-col gap-6">
            {props.data?.slidesToButtonsArrays.map((entity, index) => {
              return (
                <SlidesToButtonsArrays
                  key={index}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant="select-right"
                  data={entity}
                />
              );
            })}
            <SlidesToButtonsArrays
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant="select-right"
              slideId={props.data?.id}
              data={undefined}
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
