import type { CrmOptionRecord } from "../../../shared/demo-crm";
import { defaultCrmOptions } from "../../../shared/demo-crm";

export interface CrmOptionDefaultProps {
  option: CrmOptionRecord;
}

export const defaultCrmOptionDefaultProps: CrmOptionDefaultProps = {
  option: defaultCrmOptions[0],
};

export function CrmOptionDefault(props?: Partial<CrmOptionDefaultProps>) {
  const { option } = {
    ...defaultCrmOptionDefaultProps,
    ...props,
  };

  return (
    <div
      className="flex w-full flex-col gap-2 rounded-2xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-5 text-left"
      data-ds-block="crm.option.default"
      data-ds-layer="singlepage"
    >
      <span className="text-sm font-medium text-[var(--color-sps-graphite)]">
        {option.title}
      </span>
      {option.description ? (
        <span className="text-xs leading-5 text-[var(--color-sps-muted)]">
          {option.description}
        </span>
      ) : null}
    </div>
  );
}
