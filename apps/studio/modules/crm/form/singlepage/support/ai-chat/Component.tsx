import type { ReactNode } from "react";
import {
  Component as CrmModuleStep,
  type ISupportStepProps,
} from "../../../../step";
import defaultCopy from "./content.json";
export interface ISupportFormCopy {
  title: string;
  fields: ISupportStepProps["fields"];
  topics: string[];
}
export interface ISupportFormProps
  extends Pick<ISupportStepProps, "id" | "values" | "errors" | "onChange"> {
  variant?: string;
  copy?: ISupportFormCopy;
  submitted?: boolean;
  children?: ReactNode;
}
export function Component({
  variant = "support-ai-chat",
  copy = defaultCopy,
  submitted,
  children,
  ...fields
}: ISupportFormProps) {
  return (
    <div
      className="min-w-0"
      data-module="crm"
      data-model="form"
      data-variant={variant}
    >
      {!submitted && (
        <CrmModuleStep
          {...fields}
          fields={copy.fields}
          topics={copy.topics}
          variant="support-ai-chat"
        />
      )}
      <div className="mt-5">{children}</div>
    </div>
  );
}
