export const variants = [
  "default",
  "simple-links-on-left",
  "centered-logotype",
] as const;

export interface IModel {
  id: string;
  __component: "page-blocks.navbar-block";
  variant: (typeof variants)[number];
  className: string | null;
  description: string | null;
}
