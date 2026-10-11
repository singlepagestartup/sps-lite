import { Component as WebsiteBuilderModuleFeature } from "../../../../../../../../website-builder/feature/index";
import {
  forwardRef,
  type SVGProps,
  type ButtonHTMLAttributes as ButtonControlProps,
  useState,
} from "react";
import {
  twMerge as mergeButtonClass,
  twMerge as twMerge,
} from "tailwind-merge";
import type IconGlyphs from "../../../../../../../../website-builder/feature/singlepage/icon/icons.json";
interface IModuleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}
type IconName = keyof typeof IconGlyphs;
function createIcon(name: IconName) {
  const Component = forwardRef<SVGSVGElement, IModuleIconProps>(
    function ModuleGlyph({ className, size = 20, children, ...props }, ref) {
      return (
        <span className="contents">
          <Icon
            name={name}
            className={twMerge("h-5 w-5", className)}
            svgProps={{ ...props, ref, width: size, height: size }}
          />
        </span>
      );
    },
  );
  Component.displayName = `Phosphor(${name})`;
  return Component;
}
function Icon(props: {
  name: keyof typeof IconGlyphs;
  size?: 20 | 24;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}) {
  return <WebsiteBuilderModuleFeature {...props} variant="icon" />;
}

export interface ISubjectResetPasswordFormDefaultProps {
  variant?: string;
  title: string;
  description: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  confirmPasswordLabel: string;
  confirmPasswordPlaceholder: string;
  submitLabel: string;
  backLabel: string;
  backHref: string;
  backStoryHref?: string;
}
function getStoryLinkProps(href: string, storyHref?: string) {
  if (storyHref) {
    return { href: storyHref, target: "_top" as const };
  }
  return { href };
}
export function Component(
  props?: Partial<ISubjectResetPasswordFormDefaultProps>,
) {
  const {
    title,
    description,
    passwordLabel,
    passwordPlaceholder,
    confirmPasswordLabel,
    confirmPasswordPlaceholder,
    submitLabel,
    backLabel,
    backHref,
    backStoryHref,
  } = {
    ...defaultSubjectResetPasswordFormDefaultProps,
    ...props,
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <section
      className="w-full bg-[var(--color-sps-grey)] py-12 sm:py-16"
      data-ds-block="rbac.subject.me-authentication-email-and-password-reset-password-form-default"
      data-ds-layer="singlepage"
      data-module="rbac"
      data-model="subject"
      data-variant={
        props?.variant ??
        "me-authentication-email-and-password-reset-password-form-default"
      }
    >
      <div className="mx-auto w-full max-w-lg px-4 sm:px-6 lg:px-0">
        <div className="overflow-hidden rounded-3xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] shadow-sm">
          <div className="px-6 pb-2 pt-8 sm:px-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-sps-green)] text-[var(--color-sps-graphite)]">
              <KeyRound className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-sps-graphite)]">
              {title}
            </h1>
            <p className="mt-1.5 text-sm text-[var(--color-sps-muted)]">
              {description}
            </p>
          </div>

          <div className="space-y-6 px-6 py-6 sm:px-8">
            <div>
              <label
                className="mb-1.5 block text-sm font-medium text-[var(--color-sps-muted)]"
                htmlFor="rbac-reset-password"
              >
                {passwordLabel}
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-sps-muted)]" />
                <input
                  className="w-full rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] min-h-12 py-3 pl-12 pr-14 text-base text-[var(--color-sps-graphite)] outline-none transition placeholder:text-[var(--color-sps-muted)] focus:border-[var(--color-sps-line)] focus:ring-1 focus:ring-[var(--color-sps-graphite)] focus-visible:border-[var(--color-sps-graphite)] focus-visible:ring-2 focus-visible:ring-[var(--color-sps-graphite)]"
                  id="rbac-reset-password"
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
                htmlFor="rbac-reset-password-confirm"
              >
                {confirmPasswordLabel}
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-sps-muted)]" />
                <input
                  className="w-full rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] min-h-12 py-3 pl-12 pr-14 text-base text-[var(--color-sps-graphite)] outline-none transition placeholder:text-[var(--color-sps-muted)] focus:border-[var(--color-sps-line)] focus:ring-1 focus:ring-[var(--color-sps-graphite)] focus-visible:border-[var(--color-sps-graphite)] focus-visible:ring-2 focus-visible:ring-[var(--color-sps-graphite)]"
                  id="rbac-reset-password-confirm"
                  placeholder={confirmPasswordPlaceholder}
                  readOnly
                  type={showConfirmPassword ? "text" : "password"}
                />
                <button
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                  className="absolute right-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg text-[var(--color-sps-muted)] transition hover:text-[var(--color-sps-muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-graphite)] min-h-11"
                  onClick={() => setShowConfirmPassword((value) => !value)}
                  type="button"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <Button className="w-full" type="button">
              {submitLabel}
            </Button>
          </div>

          <div className="border-t border-[var(--color-sps-line)] px-6 py-5 text-center sm:px-8">
            <a
              className="inline-flex items-center gap-1.5 text-xs text-[var(--color-sps-muted)] transition hover:text-[var(--color-sps-graphite)]"
              {...getStoryLinkProps(backHref, backStoryHref)}
            >
              <ArrowLeft className="h-5 w-5" />
              {backLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
const Lock = createIcon("lock-key");
const KeyRound = createIcon("key");
const EyeOff = createIcon("eye-slash");
const Eye = createIcon("eye");
const ArrowLeft = createIcon("arrow-left");
function Button({
  variant = "primary",
  type = "button",
  className,
  ...props
}: ButtonControlProps<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "plain" | "danger";
  ref?: React.Ref<HTMLButtonElement>;
}) {
  const appearances = {
    primary: "bg-sps-green text-sps-graphite enabled:hover:brightness-95",
    secondary:
      "border border-sps-line bg-sps-white text-sps-graphite enabled:hover:bg-sps-grey",
    plain: "text-sps-muted enabled:hover:text-sps-graphite",
    danger:
      "border border-sps-danger-line bg-sps-danger-surface text-sps-danger enabled:hover:brightness-95",
  };
  return (
    <button
      {...props}
      type={type}
      className={mergeButtonClass(
        "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sps-graphite",
        appearances[variant],
        className,
      )}
    />
  );
}
export const defaultSubjectResetPasswordFormDefaultProps: ISubjectResetPasswordFormDefaultProps =
  {
    title: "Reset password",
    description: "Enter a new password and confirm it to continue",
    passwordLabel: "New password",
    passwordPlaceholder: "Create a new password",
    confirmPasswordLabel: "Confirm password",
    confirmPasswordPlaceholder: "Repeat your new password",
    submitLabel: "Update Password",
    backLabel: "Back to Sign in",
    backHref: "/rbac/subject/authentication/select-method",
  };
