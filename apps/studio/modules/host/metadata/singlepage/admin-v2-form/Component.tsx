import {
  HostModelForm,
  HostStudioProvider,
  type IHostStudioProviderProps,
} from "../../../page/singlepage/composition/HostRecords/index";
import type { IModel } from "../../interface";
import { createHostStudioState } from "../../../page/singlepage/composition/HostRecords/state/index";
export interface IHostMetadataAdminV2FormProps
  extends Omit<IHostStudioProviderProps, "children"> {
  variant?: string;
  record?: IModel;
  onSave?: (record: IModel) => void;
  embedded?: boolean;
}
export function HostMetadataAdminV2Form({
  variant = "admin-v2-form",
  record,
  onSave,
  embedded,
  ...provider
}: IHostMetadataAdminV2FormProps = {}) {
  return (
    <HostStudioProvider {...provider}>
      <HostModelForm
        variant={variant}
        model="metadata"
        record={record ?? createHostStudioState().models.metadata[0]}
        onSaved={(saved) => onSave?.(saved as IModel)}
        embedded={embedded}
      />
    </HostStudioProvider>
  );
}
