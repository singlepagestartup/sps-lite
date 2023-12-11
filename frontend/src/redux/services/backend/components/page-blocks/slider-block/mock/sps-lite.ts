import { entity as slider } from "~redux/services/backend/api/slider/mock/sps-lite";
import { IBackendComponentPageBlock } from "../interfaces/sps-lite";

export const entity: IBackendComponentPageBlock = {
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
