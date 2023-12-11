import { ISpsLiteBackendApiSlider } from "~redux/services/backend/api/slider/interfaces/sps-lite";

export interface IBackendComponentPageBlock {
  id: number;
  __component: "page-blocks.slider-block";
  variant: "simple";
  anchor: string | null;
  className: string | null;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  slider?: ISpsLiteBackendApiSlider | null;
}
