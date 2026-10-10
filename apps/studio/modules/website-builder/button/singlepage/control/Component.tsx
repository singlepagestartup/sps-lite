import { forwardRef, type ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
export interface IControlProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: "primary" | "secondary" | "plain" | "danger";
}
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sps-graphite";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
export const kit = {
  button: `${buttonBase} bg-sps-green text-sps-graphite enabled:hover:brightness-95 ${focus}`,
  secondary: `${buttonBase} border border-sps-line bg-sps-white text-sps-graphite enabled:hover:bg-sps-grey ${focus}`,
  plain: `${buttonBase} text-sps-muted enabled:hover:text-sps-graphite ${focus}`,
  danger: `${buttonBase} border border-sps-danger-line bg-sps-danger-surface text-sps-danger enabled:hover:brightness-95 ${focus}`,
};
export const Component = forwardRef<HTMLButtonElement, IControlProps>(
  function Button(
    { appearance = "primary", type = "button", className, ...props },
    ref,
  ) {
    const appearances = {
      primary: kit.button,
      secondary: kit.secondary,
      plain: kit.plain,
      danger: kit.danger,
    };
    return (
      <button
        ref={ref}
        type={type}
        className={twMerge(appearances[appearance], className)}
        {...props}
      />
    );
  },
);
