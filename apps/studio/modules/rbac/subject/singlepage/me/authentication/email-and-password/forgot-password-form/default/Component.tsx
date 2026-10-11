import { Component as WebsiteBuilderModuleFeature } from "../../../../../../../../website-builder/feature/index";
import {
  forwardRef,
  type SVGProps,
  type ButtonHTMLAttributes as ButtonControlProps,
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

export interface ISubjectForgotPasswordFormDefaultProps {
  variant?: string;
  title: string;
  description: string;
  emailLabel: string;
  emailPlaceholder: string;
  submitLabel: string;
  backLabel: string;
  backHref: string;
  backStoryHref?: string;
  sent?: boolean;
  sentTitle: string;
  sentDescription: string;
  sentEmail: string;
}
function getStoryLinkProps(href: string, storyHref?: string) {
  if (storyHref) {
    return { href: storyHref, target: "_top" as const };
  }
  return { href };
}
export function Component(
  props?: Partial<ISubjectForgotPasswordFormDefaultProps>,
) {
  const {
    title,
    description,
    emailLabel,
    emailPlaceholder,
    submitLabel,
    backLabel,
    backHref,
    backStoryHref,
    sent,
    sentTitle,
    sentDescription,
    sentEmail,
  } = {
    ...defaultSubjectForgotPasswordFormDefaultProps,
    ...props,
  };
  return (
    <section
      className="w-full bg-[var(--color-sps-grey)] py-12 sm:py-16"
      data-ds-block="rbac.subject.me-authentication-email-and-password-forgot-password-form-default"
      data-ds-layer="singlepage"
      data-module="rbac"
      data-model="subject"
      data-variant={
        props?.variant ??
        "me-authentication-email-and-password-forgot-password-form-default"
      }
    >
      <div className="mx-auto w-full max-w-lg px-4 sm:px-6 lg:px-0">
        <div className="overflow-hidden rounded-3xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] shadow-sm">
          <div className="px-6 pb-2 pt-8 sm:px-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-sps-green)] text-[var(--color-sps-graphite)]">
              <Mail className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-sps-graphite)]">
              {title}
            </h1>
            <p className="mt-1.5 text-sm text-[var(--color-sps-muted)]">
              {description}
            </p>
          </div>

          <div className="px-6 py-6 sm:px-8">
            {sent ? (
              <div className="space-y-5 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-sps-grey)]">
                  <CheckCircle2 className="h-11 w-11 text-[var(--color-sps-graphite)]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--color-sps-graphite)]">
                    {sentTitle}
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-sps-muted)]">
                    {sentDescription}{" "}
                    <strong className="text-[var(--color-sps-graphite)]">
                      {sentEmail}
                    </strong>
                  </p>
                </div>
                <a
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--color-sps-graphite)] transition hover:text-[var(--color-sps-graphite)]"
                  {...getStoryLinkProps(backHref, backStoryHref)}
                >
                  <ArrowLeft className="h-5 w-5" />
                  {backLabel}
                </a>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <label
                    className="mb-1.5 block text-sm font-medium text-[var(--color-sps-muted)]"
                    htmlFor="rbac-password-reset-email"
                  >
                    {emailLabel}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-sps-muted)]" />
                    <input
                      className="w-full rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] min-h-12 py-3 pl-12 pr-4 text-base text-[var(--color-sps-graphite)] outline-none transition placeholder:text-[var(--color-sps-muted)] focus:border-[var(--color-sps-line)] focus:ring-1 focus:ring-[var(--color-sps-graphite)] focus-visible:border-[var(--color-sps-graphite)] focus-visible:ring-2 focus-visible:ring-[var(--color-sps-graphite)]"
                      id="rbac-password-reset-email"
                      placeholder={emailPlaceholder}
                      readOnly
                      type="email"
                    />
                  </div>
                </div>

                <Button className="w-full" type="button">
                  {submitLabel}
                </Button>
              </div>
            )}
          </div>

          {!sent ? (
            <div className="border-t border-[var(--color-sps-line)] px-6 py-5 text-center sm:px-8">
              <a
                className="inline-flex items-center gap-1.5 text-xs text-[var(--color-sps-muted)] transition hover:text-[var(--color-sps-graphite)]"
                {...getStoryLinkProps(backHref, backStoryHref)}
              >
                <ArrowLeft className="h-5 w-5" />
                {backLabel}
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
const Mail = createIcon("envelope");
const CheckCircle2 = createIcon("check-circle");
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
export const defaultSubjectForgotPasswordFormDefaultProps: ISubjectForgotPasswordFormDefaultProps =
  {
    title: "Forgot password?",
    description: "Enter your email and we will send you a reset link",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    submitLabel: "Send Reset Link",
    backLabel: "Back to Sign in",
    backHref: "/rbac/subject/authentication/select-method",
    sent: false,
    sentTitle: "Check your inbox",
    sentDescription: "We sent a password reset link to",
    sentEmail: "sarah@sps.dev",
  };
