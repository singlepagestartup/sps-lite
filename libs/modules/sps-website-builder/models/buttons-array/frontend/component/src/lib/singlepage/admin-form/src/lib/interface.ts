import { IModel } from "@sps/sps-website-builder/models/buttons-array/sdk/model";
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
  buttonsArraysToButtons?: (
    props: ISpsComponentBase & { data?: IModel },
  ) => ReactNode;
  footerBlocksToButtonsArrays?: (
    props: ISpsComponentBase & { data?: IModel },
  ) => ReactNode;
  heroSectionBlocksToButtonsArrays?: (
    props: ISpsComponentBase & { data?: IModel },
  ) => ReactNode;
  navbarBlocksToButtonsArrays?: (
    props: ISpsComponentBase & { data?: IModel },
  ) => ReactNode;
  slidesToButtonsArrays?: (
    props: ISpsComponentBase & { data?: IModel },
  ) => ReactNode;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IModel;
}
