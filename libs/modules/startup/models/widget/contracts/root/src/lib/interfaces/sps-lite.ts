export const variants = [] as const;

export interface IModel {
  id: string;
  variant: (typeof variants)[number];
}
