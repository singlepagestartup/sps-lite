import { Dispatch, SetStateAction } from "react";
import type { IModel } from "@sps/sps-website-builder-models-page-contracts";
import type { IModel as IModelExtended } from "@sps/sps-website-builder-models-page-contracts-extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

const variant = "default" as const;

/**
 * hostUrl: The host url of the page, will pass to children
 * url: The url for searching the page
 */
export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  hostUrl: string;
  data: Partial<IModel>;
}

export interface IComponentPropsExtended extends IComponentProps {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
  data: IModelExtended;
}
