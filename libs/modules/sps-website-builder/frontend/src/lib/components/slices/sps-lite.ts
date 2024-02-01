import { slices as elementsSlices } from "../elements/slices";
import { slices as pageBlocksSlices } from "../page-blocks/slices";

export const slices = {
  middlewares: [...elementsSlices.middlewares, ...pageBlocksSlices.middlewares],
  reducer: {
    ...elementsSlices.reducer,
    ...pageBlocksSlices.reducer,
  },
};
