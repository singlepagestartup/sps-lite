import {
  HostModelSelect,
  HostStudioProvider,
  type IHostStudioProviderProps,
} from "../../../page/singlepage/composition/HostRecords/index";
export interface IHostWidgetAdminV2SelectInputProps
  extends Omit<IHostStudioProviderProps, "children"> {
  variant?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
}
export function HostWidgetAdminV2SelectInput({
  variant = "admin-v2-select-input",
  value,
  onValueChange,
  disabled,
  ...provider
}: IHostWidgetAdminV2SelectInputProps = {}) {
  return (
    <HostStudioProvider {...provider}>
      <HostModelSelect
        variant={variant}
        model="widget"
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
      />
    </HostStudioProvider>
  );
}
