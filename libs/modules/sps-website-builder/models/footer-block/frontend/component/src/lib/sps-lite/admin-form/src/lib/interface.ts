import { IModel } from "@sps/sps-website-builder/models/footer-block/sdk/model";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindByIdActionProps } from "@sps/shared-frontend-api";
import { ReactNode } from "react";

export const variant = "admin-form" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  className?: string;
  data?: Partial<IModel>;
  setOpen?: (open: boolean) => void;
  apiProps?: {
    params?: IFindByIdActionProps["params"];
    options?: IFindByIdActionProps["options"];
  };
  footerBlocksToButtonsArrays?: (
    props: ISpsComponentBase & { data?: IModel },
  ) => ReactNode;
  footerBlocksToLogotypes?: (
    props: ISpsComponentBase & { data?: IModel },
  ) => ReactNode;
  widgetsToFooterBlocks?: (
    props: ISpsComponentBase & { data?: IModel },
  ) => ReactNode;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IModel;
}
