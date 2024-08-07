import { Component as Subscription } from "@sps/sps-broadcast/models/channel/frontend/component/variants/sps-lite/subscription";
import { Component as FindById } from "@sps/sps-broadcast/models/channel/frontend/component/variants/sps-lite/find-by-id";
import { Component as Find } from "@sps/sps-broadcast/models/channel/frontend/component/variants/sps-lite/find";
import { Component as AdminTableRow } from "@sps/sps-broadcast/models/channel/frontend/component/variants/sps-lite/admin-table-row";
import { Component as AdminTable } from "@sps/sps-broadcast/models/channel/frontend/component/variants/sps-lite/admin-table";
import { Component as AdminSelectInput } from "@sps/sps-broadcast/models/channel/frontend/component/variants/sps-lite/admin-select-input";
import { Component as AdminForm } from "@sps/sps-broadcast/models/channel/frontend/component/variants/sps-lite/admin-form";
import { Component as Default } from "@sps/sps-broadcast/models/channel/frontend/component/variants/sps-lite/default";
export const variants = {
  subscription: Subscription,
  "find-by-id": FindById,
  find: Find,
  "admin-table-row": AdminTableRow,
  "admin-table": AdminTable,
  "admin-select-input": AdminSelectInput,
  "admin-form": AdminForm,
  default: Default,
};
