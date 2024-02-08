export interface IModel {
  id: number;
  title: string | null;
  variant: "simple";
  className: string | null;
  dialogPanelClassName: string | null;
  uid: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
