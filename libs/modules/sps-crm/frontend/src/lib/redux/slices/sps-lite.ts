import { api as contactSectionBlockApi } from "../../models/contact-section-block/api/client";
import { api as inputApi } from "../../models/input/api/client";
import { api as formApi } from "../../models/form/api/client";
import { api as formRequestApi } from "../../models/form-request/api/client";
import { api as reviewApi } from "../../models/review/api/client";
import { api as reviewsListBlockApi } from "../../models/reviews-list-block/api/client";
import { api as reviewsTableBlockApi } from "../../models/reviews-table-block/api/client";

export const slices = {
  middlewares: [
    contactSectionBlockApi.middleware,
    inputApi.middleware,
    formApi.middleware,
    formRequestApi.middleware,
    reviewApi.middleware,
    reviewsListBlockApi.middleware,
    reviewsTableBlockApi.middleware,
  ],
  reducer: {
    [contactSectionBlockApi.reducerPath]: contactSectionBlockApi.reducer,
    [reviewsListBlockApi.reducerPath]: reviewsListBlockApi.reducer,
    [reviewsTableBlockApi.reducerPath]: reviewsTableBlockApi.reducer,
    [inputApi.reducerPath]: inputApi.reducer,
    [formApi.reducerPath]: formApi.reducer,
    [formRequestApi.reducerPath]: formRequestApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
  },
};
