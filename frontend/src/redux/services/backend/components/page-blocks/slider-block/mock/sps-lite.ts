import { entity as slider } from "~redux/services/backend/api/slider/mock/sps-lite";
import { ISpsLiteBackendComponentSliderBlock } from "../interfaces/sps-lite";

export const entity: ISpsLiteBackendComponentSliderBlock = {
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
