export const variants = [
  "change-password",
  "forgot-password",
  "login",
  "logout",
  "registration",
  "reset-password",
] as const;

export interface IModel {
  className?: string;
  anchor?: string;
  description?: string;
  subtitle?: string;
  title?: string;
  id: string;
  variant: (typeof variants)[number];
}
