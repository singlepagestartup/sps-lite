import {
  HostRecordPreview,
  HostStudioProvider,
  type IHostStudioProviderProps,
} from "../../../page/singlepage/composition/HostRecords/index";
import { createHostStudioState } from "../../../page/singlepage/composition/HostRecords/state/index";
export interface IHostMetadataDefaultProps
  extends Omit<IHostStudioProviderProps, "children"> {
  variant?: string;
  id?: string;
}
export function HostMetadataDefault({
  variant = "default",
  id,
  ...provider
}: IHostMetadataDefaultProps = {}) {
  return (
    <HostStudioProvider {...provider}>
      <HostRecordPreview
        variant={variant}
        model="metadata"
        id={
          id ??
          (provider.state ?? provider.initialState ?? createHostStudioState())
            .models.metadata[0]?.id ??
          ""
        }
      />
    </HostStudioProvider>
  );
}
