import type { IModel as IParentEntity } from "@sps/sps-website-builder-contracts/lib/models/slider/interfaces";
import type { IModel as ISlide } from "@sps/sps-website-builder-contracts/lib/models/slide/interfaces";

export interface IEntity extends IParentEntity {
  slides: ISlide[];
}
