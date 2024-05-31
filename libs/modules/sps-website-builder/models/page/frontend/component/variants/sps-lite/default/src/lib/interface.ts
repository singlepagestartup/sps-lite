import { Dispatch, SetStateAction } from "react";
import type { IModel as IModelExtended } from "@sps/sps-website-builder-models-page-contracts-extended";

const variant = "default" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
  isEditing?: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  url?: string[];
  searchParams?: { [key: string]: any };
  query?: { [key: string]: any };
}

export interface IComponentPropsExtended extends IComponentProps {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
  data: IModelExtended;
}
