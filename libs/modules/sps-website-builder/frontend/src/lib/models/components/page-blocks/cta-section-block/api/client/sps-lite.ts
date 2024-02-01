import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk, BACKEND_URL } from "@sps/utils";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/cta-section-block/populate";
import type { IComponent } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/cta-section-block/interfaces";

const model = "components/page-blocks.cta-section-block";
const rtkType = "CtaSectionBlock";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-website-builder`,
  ),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    findOne: rtk.api.findOne<IComponent>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
