import { Component as WebsiteBuilderModuleButton } from "../../../../website-builder/button/index";
import {
  forwardRef as forwardRefControl,
  type ButtonHTMLAttributes as ButtonControlProps,
} from "react";
import { Component as CrmModuleStep } from "../../../step/index";
import { useState } from "react";
import type { CrmFormRecord } from "../../../shared/demo-crm";
import { defaultCrmForm } from "../../../shared/demo-crm";
export interface CrmFormDefaultProps {
  form: CrmFormRecord;
  disabled?: boolean;
  subjectName?: string;
  embedded?: boolean;
}
export function CrmFormDefault(props?: Partial<CrmFormDefaultProps>) {
  const { form, disabled, embedded } = {
    ...defaultCrmFormDefaultProps,
    ...props,
  };
  const [submitted, setSubmitted] = useState(false);
  const [invalid, setInvalid] = useState(false);
  return (
    <form
      className={
        embedded
          ? "min-w-0 w-full"
          : "mx-auto w-full max-w-3xl rounded-3xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-6 sm:p-8"
      }
      data-ds-block="crm.form.default"
      data-ds-layer="singlepage"
      onInvalidCapture={() => {
        setInvalid(true);
        setSubmitted(false);
      }}
      onSubmit={(event) => {
        event.preventDefault();
        setInvalid(false);
        setSubmitted(true);
      }}
    >
      <div className="mb-6">
        <h2 className=" text-2xl font-semibold text-[var(--color-sps-graphite)]">
          {form.title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-[var(--color-sps-muted)]">
          {form.description}
        </p>
      </div>
      <div className="space-y-8">
        {form.steps.map((step) => (
          <CrmModuleStep
            variant="default"
            disabled={disabled}
            key={step.id}
            namePrefix={form.id}
            step={step}
          />
        ))}
      </div>
      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          {invalid ? (
            <p role="alert" className="text-sm text-[var(--color-sps-danger)]">
              Complete the required fields and check your email address.
            </p>
          ) : null}
          {submitted ? (
            <p
              role="status"
              className="text-sm font-medium text-[var(--color-sps-graphite)]"
            >
              {form.successLabel}
            </p>
          ) : null}
        </div>
        <Button disabled={disabled} type="submit">
          {form.submitLabel}
        </Button>
      </div>
    </form>
  );
}
const Button = forwardRefControl<
  HTMLButtonElement,
  ButtonControlProps<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "plain" | "danger";
  }
>(function Button({ variant = "primary", ...props }, ref) {
  return (
    <WebsiteBuilderModuleButton
      {...props}
      variant="control"
      appearance={variant}
      ref={ref}
    />
  );
});
export const defaultCrmFormDefaultProps: CrmFormDefaultProps = {
  form: defaultCrmForm,
  disabled: false,
  subjectName: "Your account",
};
