import type { IEntity as IBackendForm } from "../../../../entities/form/interfaces";
import type { IEntity as IBackendFile } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/interfaces";
import type { IComponent as IBackendComponentButtonsArray } from "@sps/sps-website-builder-frontend/lib/redux/components/elements/buttons-array/interfaces";

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
