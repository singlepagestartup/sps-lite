import { slices as spsRbacSlices } from "@sps/sps-rbac-frontend/lib/redux/slices";

export const slices = {
  middlewares: [...spsRbacSlices.middlewares],
  reducer: {
    ...spsRbacSlices.reducer,
  },
};
