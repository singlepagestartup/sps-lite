import { createApi } from "@reduxjs/toolkit/query/react";
import {
  strapiFetchBaseQueryBuilder,
  BACKEND_URL,
  strapiFindOne,
} from "@sps/utils";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/button/populate";
import type { IComponent } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/button/interfaces";

const model = "components/elements.button";
const rtkType = "Button";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-website-builder`,
  ),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    findOne: strapiFindOne<IComponent>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
