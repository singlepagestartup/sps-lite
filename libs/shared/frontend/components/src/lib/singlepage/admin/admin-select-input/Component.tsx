import { cn } from "@sps/shared-frontend-client-utils";
import { FormField } from "@sps/ui-adapter";
import { UseFormReturn } from "react-hook-form";

interface IComponentProps<T> {
  label?: string;
  className?: string;
  variant?: string;
  module: string;
  name: string;
  type?: "model" | "relation";
  form: UseFormReturn<any>;
  formFieldName: string;
  data: T[];
  renderField?: keyof T;
  renderFunction?: (entity: T) => string;
}

export function Component<T extends { id: string }>(props: IComponentProps<T>) {
  return (
    <div
      data-module={props.module}
      data-variant={props.variant}
      className={cn("relative w-full", props.className)}
      {...(props.type === "relation"
        ? {
            "data-relation": props.name,
          }
        : {
            "data-model": props.name,
          })}
    >
      <FormField
        ui="shadcn"
        type="select"
        name={props.formFieldName}
        label={props.label}
        form={props.form}
        placeholder={`Select ${props.name}`}
        options={props.data.map((entity) => {
          if (props.renderFunction) {
            return [entity.id, props.renderFunction(entity)];
          }
          if (props.renderField && entity[props.renderField]) {
            const renderValue = entity[props.renderField];
            if (typeof renderValue === "string") {
              return [entity.id, renderValue];
            }
          }

          return [entity.id, entity.id];
        })}
      />
    </div>
  );
}
