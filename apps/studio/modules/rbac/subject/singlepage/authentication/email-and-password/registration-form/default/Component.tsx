import { Component as WebsiteBuilderModuleFeature } from "../../../../../../../website-builder/feature/index";
import { forwardRef as forwardRef } from "react";
import { type InputHTMLAttributes as InputHTMLAttributes } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import { forwardRef as forwardRefPresentation } from "react";
import { type SVGProps as SVGProps } from "react";
import { twMerge as twMergePresentation } from "tailwind-merge";
import { Component as WebsiteBuilderModuleButton } from "../../../../../../../website-builder/button/index";
import {
  forwardRef as forwardRefControl,
  type ButtonHTMLAttributes as ButtonControlProps,
} from "react";
import type IconGlyphs from "../../../../../../../website-builder/feature/singlepage/icon/icons.json";
import { useState } from "react";
interface IModuleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}
type IconName = keyof typeof IconGlyphs;
function createIcon(name: IconName) {
  const Component = forwardRefPresentation<SVGSVGElement, IModuleIconProps>(
    function ModuleGlyph({ className, size = 20, children, ...props }, ref) {
      return (
        <span className="contents">
          <Icon
            name={name}
            className={twMergePresentation("h-5 w-5", className)}
            svgProps={{ ...props, ref, width: size, height: size }}
          />
        </span>
      );
    },
  );
  Component.displayName = `Phosphor(${name})`;
  return Component;
}
interface ICheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {}
function Icon(props: {
  name: keyof typeof IconGlyphs;
  size?: 20 | 24;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}) {
  return <WebsiteBuilderModuleFeature {...props} variant="icon" />;
}

export interface ISubjectRegistrationFormDefaultProps {
  variant?: string;
  title: string;
  description: string;
  demoNote: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  confirmLabel: string;
  confirmPlaceholder: string;
  termsLabel: string;
  termsHref: string;
  privacyHref: string;
  submitLabel: string;
  loginPrompt: string;
  loginLabel: string;
  loginHref: string;
}
export function Component(
  props?: Partial<ISubjectRegistrationFormDefaultProps>,
) {
  const {
    title,
    description,
    demoNote,
    nameLabel,
    namePlaceholder,
    emailLabel,
    emailPlaceholder,
    passwordLabel,
    passwordPlaceholder,
    confirmLabel,
    confirmPlaceholder,
    termsLabel,
    termsHref,
    privacyHref,
    submitLabel,
    loginPrompt,
    loginLabel,
    loginHref,
  } = {
    ...defaultSubjectRegistrationFormDefaultProps,
    ...props,
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <section
      className="w-full bg-[var(--color-sps-grey)] py-12 sm:py-16"
      data-ds-block="rbac.subject.authentication-email-and-password-registration-form-default"
      data-ds-layer="singlepage"
      data-module="rbac"
      data-model="subject"
      data-variant={
        props?.variant ??
        "authentication-email-and-password-registration-form-default"
      }
    >
      <div className="mx-auto w-full max-w-lg px-4 sm:px-6 lg:px-0">
        <div className="overflow-hidden rounded-3xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] shadow-sm">
          <div className="px-6 pb-2 pt-8 sm:px-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-sps-green)] text-[var(--color-sps-graphite)]">
              <UserPlus className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-sps-graphite)]">
              {title}
            </h1>
            <p className="mt-1.5 text-sm text-[var(--color-sps-muted)]">
              {description}
            </p>
          </div>

          <div className="space-y-6 px-6 py-6 sm:px-8">
            <div className="rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-grey)] px-4 py-3">
              <p className="text-sm leading-6 text-[var(--color-sps-graphite)]">
                {demoNote}
              </p>
            </div>

            <div>
              <label
                className="mb-1.5 block text-sm font-medium text-[var(--color-sps-muted)]"
                htmlFor="rbac-register-name"
              >
                {nameLabel}
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-sps-muted)]" />
                <input
                  className="w-full rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] min-h-12 py-3 pl-12 pr-4 text-base text-[var(--color-sps-graphite)] outline-none transition placeholder:text-[var(--color-sps-muted)] focus:border-[var(--color-sps-line)] focus:ring-1 focus:ring-[var(--color-sps-graphite)] focus-visible:border-[var(--color-sps-graphite)] focus-visible:ring-2 focus-visible:ring-[var(--color-sps-graphite)]"
                  id="rbac-register-name"
                  placeholder={namePlaceholder}
                  readOnly
                  type="text"
                />
              </div>
            </div>

            <div>
              <label
                className="mb-1.5 block text-sm font-medium text-[var(--color-sps-muted)]"
                htmlFor="rbac-register-email"
              >
                {emailLabel}
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-sps-muted)]" />
                <input
                  className="w-full rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] min-h-12 py-3 pl-12 pr-4 text-base text-[var(--color-sps-graphite)] outline-none transition placeholder:text-[var(--color-sps-muted)] focus:border-[var(--color-sps-line)] focus:ring-1 focus:ring-[var(--color-sps-graphite)] focus-visible:border-[var(--color-sps-graphite)] focus-visible:ring-2 focus-visible:ring-[var(--color-sps-graphite)]"
                  id="rbac-register-email"
                  placeholder={emailPlaceholder}
                  readOnly
                  type="email"
                />
              </div>
            </div>

            <div>
              <label
                className="mb-1.5 block text-sm font-medium text-[var(--color-sps-muted)]"
                htmlFor="rbac-register-password"
              >
                {passwordLabel}
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-sps-muted)]" />
                <input
                  className="w-full rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] min-h-12 py-3 pl-12 pr-14 text-base text-[var(--color-sps-graphite)] outline-none transition placeholder:text-[var(--color-sps-muted)] focus:border-[var(--color-sps-line)] focus:ring-1 focus:ring-[var(--color-sps-graphite)] focus-visible:border-[var(--color-sps-graphite)] focus-visible:ring-2 focus-visible:ring-[var(--color-sps-graphite)]"
                  id="rbac-register-password"
                  placeholder={passwordPlaceholder}
                  readOnly
                  type={showPassword ? "text" : "password"}
                />
                <button
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg text-[var(--color-sps-muted)] transition hover:text-[var(--color-sps-muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-graphite)] min-h-11"
                  onClick={() => setShowPassword((value) => !value)}
                  type="button"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label
                className="mb-1.5 block text-sm font-medium text-[var(--color-sps-muted)]"
                htmlFor="rbac-register-confirm"
              >
                {confirmLabel}
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-sps-muted)]" />
                <input
                  className="w-full rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] min-h-12 py-3 pl-12 pr-14 text-base text-[var(--color-sps-graphite)] outline-none transition placeholder:text-[var(--color-sps-muted)] focus:border-[var(--color-sps-line)] focus:ring-1 focus:ring-[var(--color-sps-graphite)] focus-visible:border-[var(--color-sps-graphite)] focus-visible:ring-2 focus-visible:ring-[var(--color-sps-graphite)]"
                  id="rbac-register-confirm"
                  placeholder={confirmPlaceholder}
                  readOnly
                  type={showConfirm ? "text" : "password"}
                />
                <button
                  aria-label={
                    showConfirm
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                  className="absolute right-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg text-[var(--color-sps-muted)] transition hover:text-[var(--color-sps-muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-graphite)] min-h-11"
                  onClick={() => setShowConfirm((value) => !value)}
                  type="button"
                >
                  {showConfirm ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <label className="flex cursor-pointer items-start gap-2">
              <Checkbox className="" readOnly />
              <span className="text-sm leading-6 text-[var(--color-sps-muted)]">
                {termsLabel.split("Terms of Service")[0]}
                <a
                  className="text-[var(--color-sps-graphite)] underline hover:text-[var(--color-sps-graphite)]"
                  href={termsHref}
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  className="text-[var(--color-sps-graphite)] underline hover:text-[var(--color-sps-graphite)]"
                  href={privacyHref}
                >
                  Privacy Policy
                </a>
              </span>
            </label>

            <Button className="w-full" type="button">
              {submitLabel}
            </Button>
          </div>

          <div className="border-t border-[var(--color-sps-line)] px-6 py-5 text-center sm:px-8">
            <p className="text-xs text-[var(--color-sps-muted)]">
              {loginPrompt}{" "}
              <a
                className="text-[var(--color-sps-graphite)] underline transition hover:text-[var(--color-sps-graphite)]"
                href={loginHref}
              >
                {loginLabel}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
const UserPlus = createIcon("user-plus");
const User = createIcon("user");
const Mail = createIcon("envelope");
const Lock = createIcon("lock-key");
const EyeOff = createIcon("eye-slash");
const Eye = createIcon("eye");
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-graphite)]";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  checkbox:
    "peer h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-md border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] text-[var(--color-sps-graphite)] checked:border-transparent checked:bg-[var(--color-sps-green)] indeterminate:border-transparent indeterminate:bg-[var(--color-sps-green)] disabled:cursor-not-allowed",
  focus: focus,
};
const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(function Checkbox(
  { className, ...props },
  ref,
) {
  return (
    <span className="relative inline-flex h-5 w-5 shrink-0 items-center justify-center has-[:disabled]:opacity-50">
      <input
        ref={ref}
        type="checkbox"
        className={twMerge(kit.checkbox, kit.focus, className)}
        {...props}
      />
      <Icon
        name="check"
        className="pointer-events-none absolute h-3.5 w-3.5 text-[var(--color-sps-graphite)] opacity-0 peer-checked:opacity-100 peer-indeterminate:hidden"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute hidden h-0.5 w-2.5 rounded-full bg-[var(--color-sps-graphite)] peer-indeterminate:block"
      />
    </span>
  );
});
const Button = forwardRefControl<
  HTMLButtonElement,
  ButtonControlProps<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "plain" | "danger";
  }
>(function Button({ variant = "primary", ...props }, ref) {
  return (
    <WebsiteBuilderModuleButton
      {...props}
      variant="control"
      appearance={variant}
      ref={ref}
    />
  );
});
export const defaultSubjectRegistrationFormDefaultProps: ISubjectRegistrationFormDefaultProps =
  {
    title: "Create an account",
    description: "Get started with your free account today",
    demoNote: "Registration preview. No account is created.",
    nameLabel: "Full name",
    namePlaceholder: "John Doe",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    passwordLabel: "Password",
    passwordPlaceholder: "Min. 6 characters",
    confirmLabel: "Confirm password",
    confirmPlaceholder: "Repeat your password",
    termsLabel: "I agree to the Terms of Service and Privacy Policy",
    termsHref: "/terms",
    privacyHref: "/privacy",
    submitLabel: "Create Account",
    loginPrompt: "Already have an account?",
    loginLabel: "Sign in",
    loginHref: "/rbac/subject/authentication/select-method",
  };
