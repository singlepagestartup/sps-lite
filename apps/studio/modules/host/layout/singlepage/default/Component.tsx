import {
  HostRecordPreview,
  HostStudioProvider,
  type IHostStudioProviderProps,
} from "../../../page/singlepage/composition/HostRecords/index";
import { createHostStudioState } from "../../../page/singlepage/composition/HostRecords/state/index";
export interface IHostLayoutDefaultProps
  extends Omit<IHostStudioProviderProps, "children"> {
  variant?: string;
  id?: string;
}
export function HostLayoutDefault({
  variant = "default",
  id,
  ...provider
}: IHostLayoutDefaultProps = {}) {
  return (
    <HostStudioProvider {...provider}>
      <HostRecordPreview
        variant={variant}
        model="layout"
        id={
          id ??
          (provider.state ?? provider.initialState ?? createHostStudioState())
            .models.layout[0]?.id ??
          ""
        }
      />
    </HostStudioProvider>
  );
}
