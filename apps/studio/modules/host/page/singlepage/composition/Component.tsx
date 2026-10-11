import {
  HostWorkbench,
  HostStudioProvider,
  type IHostStudioProviderProps,
} from "./HostRecords/index";
export interface IHostPageCompositionProps
  extends Omit<IHostStudioProviderProps, "children"> {
  variant?: string;
}
export function HostPageComposition({
  variant = "composition",
  ...props
}: IHostPageCompositionProps = {}) {
  return (
    <HostStudioProvider {...props}>
      <HostWorkbench variant={variant} />
    </HostStudioProvider>
  );
}
