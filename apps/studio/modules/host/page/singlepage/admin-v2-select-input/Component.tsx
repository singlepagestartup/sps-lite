import {
  HostModelSelect,
  HostStudioProvider,
  type IHostStudioProviderProps,
} from "../composition/HostRecords/index";
export interface IHostPageAdminV2SelectInputProps
  extends Omit<IHostStudioProviderProps, "children"> {
  variant?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
}
export function HostPageAdminV2SelectInput({
  variant = "admin-v2-select-input",
  value,
  onValueChange,
  disabled,
  ...provider
}: IHostPageAdminV2SelectInputProps = {}) {
  return (
    <HostStudioProvider {...provider}>
      <HostModelSelect
        variant={variant}
        model="page"
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
      />
    </HostStudioProvider>
  );
}
