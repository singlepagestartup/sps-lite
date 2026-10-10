import { Component as WebsiteBuilderModuleFeature } from "../../../../../../../website-builder/feature/index";
import type { ReactNode, HTMLAttributes } from "react";
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
import { writeRbacStudioAuthUser } from "../../../../../../shared";
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

export interface ISubjectAuthenticationFormDefaultProps {
  variant?: string;
  methodSelector?: ReactNode;
  methodContent?: ReactNode;
  showEmailFields?: boolean;
  emailPanelProps?: HTMLAttributes<HTMLDivElement>;
  onSuccess?: (email: string) => void;
  title: string;
  description: string;
  demoNote: string;
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  rememberLabel: string;
  forgotLabel: string;
  forgotHref: string;
  forgotStoryHref?: string;
  submitLabel: string;
  submitHref: string;
  submitStoryHref?: string;
  registerPrompt: string;
  registerLabel: string;
  registerHref: string;
  registerStoryHref?: string;
}
function getStoryLinkProps(href: string, storyHref?: string) {
  if (storyHref) {
    return {
      href: storyHref,
      target: "_top" as const,
    };
  }
  return { href };
}
export function Component(
  props?: Partial<ISubjectAuthenticationFormDefaultProps>,
) {
  const {
    methodSelector,
    methodContent,
    showEmailFields = true,
    emailPanelProps,
    onSuccess,
    title,
    description,
    demoNote,
    emailLabel,
    emailPlaceholder,
    passwordLabel,
    passwordPlaceholder,
    rememberLabel,
    forgotLabel,
    forgotHref,
    forgotStoryHref,
    submitLabel,
    submitHref,
    submitStoryHref,
    registerPrompt,
    registerLabel,
    registerHref,
    registerStoryHref,
  } = {
    ...defaultSubjectAuthenticationFormDefaultProps,
    ...props,
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  function handleSubmit() {
    if (onSuccess) {
      onSuccess(email || "sarah@sps.dev");
      return;
    }
    writeRbacStudioAuthUser(email || "sarah@sps.dev");
    if (typeof window === "undefined") return;
    const targetHref = submitStoryHref ?? submitHref;
    const targetWindow = window.top ?? window;
    targetWindow.location.href = targetHref;
  }
  return (
    <section
      className="w-full bg-[var(--color-sps-grey)] py-12 sm:py-16"
      data-ds-block="rbac.subject.authentication-email-and-password-authentication-form-default"
      data-ds-layer="singlepage"
      data-module="rbac"
      data-model="subject"
      data-variant={
        props?.variant ??
        "authentication-email-and-password-authentication-form-default"
      }
    >
      <div className="mx-auto w-full max-w-lg px-4 sm:px-6 lg:px-0">
        <div className="overflow-hidden rounded-3xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] shadow-sm">
          <div className="px-6 pb-2 pt-8 sm:px-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-sps-green)] text-[var(--color-sps-graphite)]">
              <Lock className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-sps-graphite)]">
              {title}
            </h1>
            <p className="mt-1.5 text-sm text-[var(--color-sps-muted)]">
              {description}
            </p>
          </div>

          <div className="space-y-6 px-6 py-6 sm:px-8">
            {methodSelector}
            <div
              {...emailPanelProps}
              hidden={!showEmailFields}
              className="space-y-6"
            >
              <div className="rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-grey)] px-4 py-3">
                <p className="text-sm leading-6 text-[var(--color-sps-graphite)]">
                  {demoNote}
                </p>
              </div>

              <div>
                <label
                  className="mb-1.5 block text-sm font-medium text-[var(--color-sps-muted)]"
                  htmlFor="rbac-login-email"
                >
                  {emailLabel}
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-sps-muted)]" />
                  <input
                    className="w-full rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] min-h-12 py-3 pl-12 pr-4 text-base text-[var(--color-sps-graphite)] outline-none transition placeholder:text-[var(--color-sps-muted)] focus:border-[var(--color-sps-line)] focus:ring-1 focus:ring-[var(--color-sps-graphite)] focus-visible:border-[var(--color-sps-graphite)] focus-visible:ring-2 focus-visible:ring-[var(--color-sps-graphite)]"
                    id="rbac-login-email"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={emailPlaceholder}
                    type="email"
                    value={email}
                  />
                </div>
              </div>

              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label
                    className="text-sm font-medium text-[var(--color-sps-muted)]"
                    htmlFor="rbac-login-password"
                  >
                    {passwordLabel}
                  </label>
                  <a
                    className="text-xs text-[var(--color-sps-muted)] transition hover:text-[var(--color-sps-graphite)]"
                    {...getStoryLinkProps(forgotHref, forgotStoryHref)}
                  >
                    {forgotLabel}
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-sps-muted)]" />
                  <input
                    className="w-full rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] min-h-12 py-3 pl-12 pr-14 text-base text-[var(--color-sps-graphite)] outline-none transition placeholder:text-[var(--color-sps-muted)] focus:border-[var(--color-sps-line)] focus:ring-1 focus:ring-[var(--color-sps-graphite)] focus-visible:border-[var(--color-sps-graphite)] focus-visible:ring-2 focus-visible:ring-[var(--color-sps-graphite)]"
                    id="rbac-login-password"
                    name="password"
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder={passwordPlaceholder}
                    type={showPassword ? "text" : "password"}
                    value={password}
                  />
                  <button
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
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

              <label className="flex cursor-pointer items-center gap-2">
                <Checkbox
                  checked={rememberMe}
                  className=""
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
                <span className="text-xs text-[var(--color-sps-muted)]">
                  {rememberLabel}
                </span>
              </label>

              <Button className="w-full" onClick={handleSubmit} type="button">
                {submitLabel}
              </Button>
            </div>
            {methodContent}
          </div>

          <div className="border-t border-[var(--color-sps-line)] px-6 py-5 text-center sm:px-8">
            <p className="text-xs text-[var(--color-sps-muted)]">
              {registerPrompt}{" "}
              <a
                className="text-[var(--color-sps-graphite)] underline transition hover:text-[var(--color-sps-graphite)]"
                {...getStoryLinkProps(registerHref, registerStoryHref)}
              >
                {registerLabel}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
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
export const defaultSubjectAuthenticationFormDefaultProps: ISubjectAuthenticationFormDefaultProps =
  {
    title: "Welcome back",
    description: "Sign in to your account to continue",
    demoNote:
      "This is a demo. Any email and password will work. Try sarah@sps.dev, james@sps.dev, or marcus@sps.dev.",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    passwordLabel: "Password",
    passwordPlaceholder: "Password",
    rememberLabel: "Remember me for 30 days",
    forgotLabel: "Forgot password?",
    forgotHref:
      "/rbac/subject/authentication/email-and-password/forgot-password",
    submitLabel: "Sign in",
    submitHref: "/rbac/subject/settings",
    registerPrompt: "Don't have an account?",
    registerLabel: "Sign up for free",
    registerHref:
      "/rbac/subject/authentication/email-and-password/registration",
  };
