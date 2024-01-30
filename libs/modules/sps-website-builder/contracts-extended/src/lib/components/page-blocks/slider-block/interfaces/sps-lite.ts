import { IComponent as IParentComponent } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/slider-block/interfaces";
import type { IEntity as ISlider } from "@sps/sps-website-builder-contracts/lib/entities/slider/interfaces";

export interface IComponent extends IParentComponent {
  slider?: ISlider | null;
}
