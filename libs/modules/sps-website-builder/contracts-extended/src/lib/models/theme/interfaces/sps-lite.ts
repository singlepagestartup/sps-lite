import type { IModel as IParentEntity } from "@sps/sps-website-builder-contracts/lib/models/theme/interfaces";
import type { IModel as IFont } from "@sps/sps-website-builder-contracts/lib/models/font/interfaces";

export interface IEntity extends IParentEntity {
  fonts?: IFont[] | null;
}
