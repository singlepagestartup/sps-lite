import { IBackendApiEntity as IBackendApiSlider } from "~redux/services/backend/api/slider/interfaces";

export interface IBackendComponentPageBlock {
  id: number;
  __component: "page-blocks.slider-block";
  variant: "simple";
  anchor: string | null;
  className: string | null;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  slider?: IBackendApiSlider | null;
}
