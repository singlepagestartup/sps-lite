import type { IEntity as ISlider } from "../../../../entities/slider/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.slider-block";
  variant: "simple";
  anchor: string | null;
  className: string | null;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  slider?: ISlider | null;
}
