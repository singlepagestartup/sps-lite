import type { IHostRecord } from "../page/singlepage/composition/HostRecords/state/interface";
export interface IModel extends IHostRecord {
  adminTitle: string;
  title: string | null;
  slug: string;
  className: string | null;
}
