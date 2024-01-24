import type { IEntity as IBackendForm } from "@sps/sps-crm-frontend/lib/redux/entities/form/interfaces";
import type { IEntity as IBackendFile } from "libs/modules/sps-file-storage/frontend/src/lib/redux/entities/file/interfaces";
import type { IComponent as IBackendComponentButtonsArray } from "../../../elements/buttons-array/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.contact-section-block";
  variant: "centered";
  title: string | null;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  anchor: string | null;
  media?: IBackendFile | null;
  additionalMedia?: IBackendFile[] | null;
  form?: IBackendForm | null;
  buttonsArrays?: IBackendComponentButtonsArray[] | null;
}
