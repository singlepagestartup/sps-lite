import type { IEntity as IParentEntity } from "@sps/sps-website-builder-contracts/lib/entities/slider/interfaces";
import type { IComponent as ISlide } from "@sps/sps-website-builder-contracts/lib/components/elements/slide/interfaces";

export interface IEntity extends IParentEntity {
  slides: ISlide[];
}
