import { Component as CrmModuleInput } from "../../../input/index";
import {
  type CrmInputRecord,
  type CrmStepRecord,
  defaultCrmForm,
} from "../../../shared/demo-crm";

export interface CrmStepDefaultProps {
  variant?: string;
  step: CrmStepRecord;
  disabled?: boolean;
  namePrefix?: string;
}

export const defaultCrmStepDefaultProps: CrmStepDefaultProps = {
  step: defaultCrmForm.steps[0],
  disabled: false,
  namePrefix: "crm",
};

function CrmStepInput({
  disabled,
  input,
  namePrefix,
}: {
  disabled?: boolean;
  input: CrmInputRecord;
  namePrefix: string;
}) {
  if (input.variant === "textarea-default") {
    return (
      <CrmModuleInput
        variant="textarea-default"
        disabled={disabled}
        input={input}
        namePrefix={namePrefix}
      />
    );
  }

  if (input.variant === "select-option-default") {
    return (
      <CrmModuleInput
        variant="select-option-default"
        disabled={disabled}
        input={input}
        namePrefix={namePrefix}
      />
    );
  }

  return (
    <CrmModuleInput
      variant="text-default"
      disabled={disabled}
      input={input}
      namePrefix={namePrefix}
    />
  );
}

export function CrmStepDefault(props?: Partial<CrmStepDefaultProps>) {
  const { step, disabled, namePrefix } = {
    ...defaultCrmStepDefaultProps,
    ...props,
  };

  return (
    <fieldset
      className="min-w-0 rounded-2xl bg-[var(--color-sps-grey)] p-5 sm:p-6"
      data-ds-block="crm.step.default"
      data-ds-layer="singlepage"
      data-module="crm"
      data-model="step"
      data-variant={props?.variant ?? "default"}
    >
      <legend className="sr-only">{step.title}</legend>
      <h2 className="mb-5 text-lg font-semibold text-[var(--color-sps-graphite)]">
        {step.title}
      </h2>
      <div className="grid min-w-0 gap-5 sm:grid-cols-2">
        {step.inputs.map((input) => (
          <div
            className={
              input.variant === "textarea-default"
                ? "min-w-0 sm:col-span-2"
                : "min-w-0"
            }
            key={input.id}
          >
            <CrmStepInput
              disabled={disabled}
              input={input}
              namePrefix={`${namePrefix}-${step.id}`}
            />
          </div>
        ))}
      </div>
    </fieldset>
  );
}
