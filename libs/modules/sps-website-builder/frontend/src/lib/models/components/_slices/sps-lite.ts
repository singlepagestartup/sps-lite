import { slices as elementsSlices } from "../elements/_slices";
import { slices as pageBlocksSlices } from "../page-blocks/_slices";

export const slices = {
  middlewares: [...elementsSlices.middlewares, ...pageBlocksSlices.middlewares],
  reducer: {
    ...elementsSlices.reducer,
    ...pageBlocksSlices.reducer,
  },
};
