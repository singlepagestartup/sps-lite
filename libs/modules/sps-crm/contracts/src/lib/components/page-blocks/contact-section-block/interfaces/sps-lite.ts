import type { IEntity as IForm } from "../../../../entities/form/interfaces";
import type { IEntity as IFile } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/interfaces";
import type { IComponent as IButtonsArray } from "@sps/sps-website-builder-contracts/lib/components/elements/buttons-array/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.contact-section-block";
  variant: "centered";
  title: string | null;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  anchor: string | null;
  media?: IFile | null;
  additionalMedia?: IFile[] | null;
  form?: IForm | null;
  buttonsArrays?: IButtonsArray[] | null;
}
