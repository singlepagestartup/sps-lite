import { slices as componentsSlices } from "../../models/components/_slices";
import { slices as entitiesSlices } from "../../models/entities/_slices";

export const slices = {
  middlewares: [...componentsSlices.middlewares, ...entitiesSlices.middlewares],
  reducer: {
    ...componentsSlices.reducer,
    ...entitiesSlices.reducer,
  },
};
