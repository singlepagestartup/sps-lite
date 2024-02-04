import { pageBlocks as spsLitePageBlocks } from "./sps-lite";
import { pageBlockComponents as startupPageBlockComponents } from "./startup";

export const pageBlocks = {
  ...spsLitePageBlocks,
  ...startupPageBlockComponents,
};
