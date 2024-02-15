import {
  IComponentProps as IFindManyComponentProps,
  IComponentPropsExtended as IFindManyComponentPropsExtended,
} from "../find-many/interface";
import {
  IComponentProps as IFindOneComponentProps,
  IComponentPropsExtended as IFindOneComponentPropsExtended,
} from "../find-one/interface";
import {
  IComponentProps as IIdFromUrlComponentProps,
  IComponentPropsExtended as IIdFromUrlComponentPropsExtended,
} from "../IdFromUrl/interface";

export type IComponentProps =
  | IIdFromUrlComponentProps
  | IFindManyComponentProps
  | IFindOneComponentProps;

export type IComponentPropsExtended =
  | IIdFromUrlComponentPropsExtended
  | IFindManyComponentPropsExtended
  | IFindOneComponentPropsExtended;
