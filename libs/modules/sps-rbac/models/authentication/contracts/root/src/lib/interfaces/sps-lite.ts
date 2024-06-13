export const variants = [
  "default",
  "is-authenticatated-wrapper",
  "set-session-wrapper",
] as const;

export interface IModel {
  id: string;
  variant: (typeof variants)[number];
}
