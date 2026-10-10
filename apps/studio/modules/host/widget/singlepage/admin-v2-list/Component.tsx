import {
  HostModelList,
  HostStudioProvider,
  type IHostStudioProviderProps,
} from "../../../page/singlepage/composition/HostRecords/index";
export interface IHostWidgetAdminV2ListProps
  extends Omit<IHostStudioProviderProps, "children"> {
  variant?: string;
  embedded?: boolean;
}
export function HostWidgetAdminV2List({
  variant = "admin-v2-list",
  embedded,
  ...provider
}: IHostWidgetAdminV2ListProps = {}) {
  return (
    <HostStudioProvider {...provider}>
      <HostModelList variant={variant} model="widget" embedded={embedded} />
    </HostStudioProvider>
  );
}
