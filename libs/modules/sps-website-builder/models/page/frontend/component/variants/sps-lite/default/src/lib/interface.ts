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
  params: {
    locale: string | string[];
    url?: string | string[];
    [key: string]: any;
  };
  searchParams?: { [key: string]: any };
}

export interface IComponentPropsExtended extends IComponentProps {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
  data: IModelExtended;
}
