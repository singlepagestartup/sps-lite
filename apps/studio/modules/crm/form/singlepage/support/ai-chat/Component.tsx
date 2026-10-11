import type { ReactNode } from "react";
import {
  Component as CrmModuleStep,
  type ISupportStepProps,
} from "../../../../step";
import { Component as WebsiteBuilderModuleFeature } from "../../../../../website-builder/feature";
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
    <section
      className="min-w-0 rounded-2xl border border-sps-line bg-sps-white p-5 @[640px]:p-6"
      data-module="crm"
      data-model="form"
      data-variant={variant}
    >
      <h2 className="mb-6 flex items-center gap-3 text-xl font-semibold">
        <span className="grid size-10 place-items-center rounded-xl bg-sps-grey">
          <WebsiteBuilderModuleFeature variant="icon" name="chat-circle" />
        </span>
        {copy.title}
      </h2>
      {!submitted && (
        <CrmModuleStep
          {...fields}
          fields={copy.fields}
          topics={copy.topics}
          variant="support-ai-chat"
        />
      )}
      <div className="mt-5">{children}</div>
    </section>
  );
}
