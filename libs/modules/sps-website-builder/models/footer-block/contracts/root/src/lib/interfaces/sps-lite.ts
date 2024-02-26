export const variants = ["four-columns-with-company-mission"] as const;

export interface IModel {
  id: number;
  __component: "page-blocks.footer-block";
  variant: (typeof variants)[number];
  className: string | null;
  copyrights: string | null;
  description: string | null;
}
