import { slices as componentsSlices } from "../../components/slices";
import { slices as entitiesSlices } from "../../entities/slices";

export const slices = {
  middlewares: [...componentsSlices.middlewares, ...entitiesSlices.middlewares],
  reducer: {
    ...componentsSlices.reducer,
    ...entitiesSlices.reducer,
  },
};
