import {
  HostModelList,
  HostStudioProvider,
  type IHostStudioProviderProps,
} from "../../../page/singlepage/composition/HostRecords/index";
export interface IHostMetadataAdminV2ListProps
  extends Omit<IHostStudioProviderProps, "children"> {
  variant?: string;
  embedded?: boolean;
}
export function HostMetadataAdminV2List({
  variant = "admin-v2-list",
  embedded,
  ...provider
}: IHostMetadataAdminV2ListProps = {}) {
  return (
    <HostStudioProvider {...provider}>
      <HostModelList variant={variant} model="metadata" embedded={embedded} />
    </HostStudioProvider>
  );
}
