import { type CrmInputRecord, defaultCrmForm } from "../../../shared/demo-crm";

export interface CrmInputTextareaDefaultProps {
  variant?: string;
  input: CrmInputRecord;
  disabled?: boolean;
  namePrefix?: string;
}

export const defaultCrmInputTextareaDefaultProps: CrmInputTextareaDefaultProps =
  {
    input: defaultCrmForm.steps[1].inputs[2],
    disabled: false,
    namePrefix: "crm",
  };

export function CrmInputTextareaDefault(
  props?: Partial<CrmInputTextareaDefaultProps>,
) {
  const { input, disabled, namePrefix } = {
    ...defaultCrmInputTextareaDefaultProps,
    ...props,
  };
  const inputId = `${namePrefix}-${input.slug}`;

  return (
    <label
      className="block min-w-0"
      data-ds-block="crm.input.textarea-default"
      data-ds-layer="singlepage"
      data-module="crm"
      data-model="input"
      data-variant={props?.variant ?? "textarea-default"}
    >
      <span className="mb-1 block text-sm font-medium text-[var(--color-sps-graphite)]">
        {input.label}
        {input.required ? (
          <span className="ml-1 text-[var(--color-sps-danger)]">*</span>
        ) : null}
      </span>
      <textarea
        className="min-h-28 w-full resize-y rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] px-4 py-2 text-base text-[var(--color-sps-graphite)] outline-none transition placeholder:text-[var(--color-sps-muted)] focus:border-[var(--color-sps-graphite)] focus:ring-2 focus:ring-[var(--color-sps-graphite)] disabled:bg-[var(--color-sps-grey)] focus-visible:border-[var(--color-sps-graphite)] focus-visible:ring-2 focus-visible:ring-[var(--color-sps-graphite)]"
        disabled={disabled}
        id={inputId}
        name={inputId}
        placeholder={input.placeholder}
        required={input.required}
      />
    </label>
  );
}
