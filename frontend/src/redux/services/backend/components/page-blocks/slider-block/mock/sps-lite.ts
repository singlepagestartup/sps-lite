import { ISpsLiteBackendSliderBlock } from "../interfaces/sps-lite";
import { entity as slider } from "~redux/services/backend/models/slider/mock/sps-lite";

export const entity: ISpsLiteBackendSliderBlock = {
  id: 2,
  __component: "page-blocks.slider-block",
  variant: "simple",
  className: null,
  title: null,
  subtitle: null,
  description: null,
  slider: { ...slider },
  anchor: null,
};
