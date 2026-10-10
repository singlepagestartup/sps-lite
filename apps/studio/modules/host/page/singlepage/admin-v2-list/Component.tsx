import {
  HostModelList,
  HostStudioProvider,
  type IHostStudioProviderProps,
} from "../composition/HostRecords/index";
export interface IHostPageAdminV2ListProps
  extends Omit<IHostStudioProviderProps, "children"> {
  variant?: string;
  embedded?: boolean;
}
export function HostPageAdminV2List({
  variant = "admin-v2-list",
  embedded,
  ...provider
}: IHostPageAdminV2ListProps = {}) {
  return (
    <HostStudioProvider {...provider}>
      <HostModelList variant={variant} model="page" embedded={embedded} />
    </HostStudioProvider>
  );
}
