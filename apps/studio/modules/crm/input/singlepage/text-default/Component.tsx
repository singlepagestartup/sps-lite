import type { CrmInputRecord } from "../../../shared/demo-crm";
import { defaultCrmForm } from "../../../shared/demo-crm";

export interface CrmInputTextDefaultProps {
  input: CrmInputRecord;
  disabled?: boolean;
  namePrefix?: string;
}

export const defaultCrmInputTextDefaultProps: CrmInputTextDefaultProps = {
  input: defaultCrmForm.steps[0].inputs[0],
  disabled: false,
  namePrefix: "crm",
};

export function CrmInputTextDefault(props?: Partial<CrmInputTextDefaultProps>) {
  const { input, disabled, namePrefix } = {
    ...defaultCrmInputTextDefaultProps,
    ...props,
  };
  const inputId = `${namePrefix}-${input.slug}`;

  return (
    <label
      className="block min-w-0"
      data-ds-block="crm.input.text-default"
      data-ds-layer="singlepage"
    >
      <span className="mb-1 block text-sm font-medium text-[var(--color-sps-graphite)]">
        {input.label}
        {input.required ? (
          <span className="ml-1 text-[var(--color-sps-danger)]">*</span>
        ) : null}
      </span>
      <input
        className="min-h-12 w-full min-w-0 rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] px-4 text-base text-[var(--color-sps-graphite)] outline-none transition placeholder:text-[var(--color-sps-muted)] focus:border-[var(--color-sps-graphite)] focus:ring-2 focus:ring-[var(--color-sps-graphite)] disabled:bg-[var(--color-sps-grey)] focus-visible:border-[var(--color-sps-graphite)] focus-visible:ring-2 focus-visible:ring-[var(--color-sps-graphite)]"
        disabled={disabled}
        id={inputId}
        name={inputId}
        placeholder={input.placeholder}
        required={input.required}
        type={input.type ?? "text"}
      />
    </label>
  );
}
