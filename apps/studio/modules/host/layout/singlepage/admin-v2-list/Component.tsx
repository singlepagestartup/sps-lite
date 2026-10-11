import {
  HostModelList,
  HostStudioProvider,
  type IHostStudioProviderProps,
} from "../../../page/singlepage/composition/HostRecords/index";
export interface IHostLayoutAdminV2ListProps
  extends Omit<IHostStudioProviderProps, "children"> {
  variant?: string;
  embedded?: boolean;
}
export function HostLayoutAdminV2List({
  variant = "admin-v2-list",
  embedded,
  ...provider
}: IHostLayoutAdminV2ListProps = {}) {
  return (
    <HostStudioProvider {...provider}>
      <HostModelList variant={variant} model="layout" embedded={embedded} />
    </HostStudioProvider>
  );
}
