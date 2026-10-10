import {
  HostModelSelect,
  HostStudioProvider,
  type IHostStudioProviderProps,
} from "../../../page/singlepage/composition/HostRecords/index";
export interface IHostMetadataAdminV2SelectInputProps
  extends Omit<IHostStudioProviderProps, "children"> {
  variant?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
}
export function HostMetadataAdminV2SelectInput({
  variant = "admin-v2-select-input",
  value,
  onValueChange,
  disabled,
  ...provider
}: IHostMetadataAdminV2SelectInputProps = {}) {
  return (
    <HostStudioProvider {...provider}>
      <HostModelSelect
        variant={variant}
        model="metadata"
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
      />
    </HostStudioProvider>
  );
}
