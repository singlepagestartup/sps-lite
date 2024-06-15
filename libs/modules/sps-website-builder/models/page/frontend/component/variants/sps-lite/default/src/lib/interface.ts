import { Dispatch, SetStateAction } from "react";
import type { IModel } from "@sps/sps-website-builder-models-page-contracts";
import type { IModel as IModelExtended } from "@sps/sps-website-builder-models-page-contracts-extended";

const variant = "default" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
  isEditing?: boolean;
}

/**
 * hostUrl: The host url of the page, will pass to children
 * url: The url for searching the page
 */
export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  hostUrl: string;
  data: Partial<IModel>;
}

export interface IComponentPropsExtended extends IComponentProps {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
  data: IModelExtended;
}
