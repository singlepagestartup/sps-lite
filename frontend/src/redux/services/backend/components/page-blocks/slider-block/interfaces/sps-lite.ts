import { ISpsLiteBackendSlider } from "~redux/services/backend/models/slider/interfaces/sps-lite";

export interface ISpsLiteBackendSliderBlock {
  id: number;
  __component: "page-blocks.slider-block";
  variant: "simple";
  anchor: string | null;
  className: string | null;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  slider?: ISpsLiteBackendSlider | null;
}
