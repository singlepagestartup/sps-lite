import { Component as CrmModuleInput } from "../../../../input";
export interface ISupportStepProps {
  variant?: string;
  id: string;
  fields: Record<
    "topic" | "details" | "result",
    { label: string; placeholder: string }
  >;
  topics: string[];
  values: Record<"topic" | "details" | "result", string>;
  errors?: Partial<Record<"topic" | "details" | "result", string>>;
  onChange: (field: "topic" | "details" | "result", value: string) => void;
}
export function Component({
  variant = "support-ai-chat",
  id,
  fields,
  topics,
  values,
  errors,
  onChange,
}: ISupportStepProps) {
  return (
    <fieldset
      className="grid min-w-0 gap-5"
      data-module="crm"
      data-model="step"
      data-variant={variant}
    >
      <legend className="sr-only">Support request details</legend>
      {(["topic", "details", "result"] as const).map((field) => (
        <CrmModuleInput
          key={field}
          id={`${id}-${field}`}
          name={field}
          {...fields[field]}
          value={values[field]}
          error={errors?.[field]}
          options={field === "topic" ? topics : undefined}
          onChange={(value) => onChange(field, value)}
          variant="support-ai-chat"
        />
      ))}
    </fieldset>
  );
}
