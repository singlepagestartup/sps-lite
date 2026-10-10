"use client";
import { Component as WebsiteBuilderModuleFeature } from "../../../../../../../website-builder/feature/index";

import { type InputHTMLAttributes as InputHTMLAttributes } from "react";
import { useId as useIdPresentation } from "react";
import { useState as useStatePresentation } from "react";
import { forwardRef as forwardRef } from "react";
import { type SVGProps as SVGProps } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import { Component as WebsiteBuilderModuleButton } from "../../../../../../../website-builder/button/index";
import {
  forwardRef as forwardRefControl,
  type ButtonHTMLAttributes as ButtonControlProps,
} from "react";
import type IconGlyphs from "../../../../../../../website-builder/feature/singlepage/icon/icons.json";
import IconPresentationGlyphs from "../../../../../../../website-builder/feature/singlepage/icon/icons.json";
import { useId, useState, type FormEvent } from "react";
interface IModuleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}
type IconName = keyof typeof IconGlyphs;
function createIcon(name: IconName) {
  const Component = forwardRef<SVGSVGElement, IModuleIconProps>(
    function ModuleGlyph({ className, size = 20, children, ...props }, ref) {
      return (
        <span className="contents">
          <IconPresentation
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
interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
}
function PasswordField({
  label,
  hint,
  error,
  id: suppliedId,
  ...props
}: ITextFieldProps) {
  const generatedId = useIdPresentation();
  const id = suppliedId ?? generatedId;
  const [visible, setVisible] = useStatePresentation(false);
  return (
    <div className="min-w-0 space-y-2">
      <label htmlFor={id} className={`block ${kitPresentation.label}`}>
        {label}
      </label>
      <div className="relative">
        <input
          {...props}
          id={id}
          type={visible ? "text" : "password"}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            [hint ? `${id}-hint` : "", error ? `${id}-error` : ""]
              .filter(Boolean)
              .join(" ") || undefined
          }
          className={`${kitPresentation.field} pr-14`}
        />
        <ButtonPresentation
          variant="plain"
          onClick={() => setVisible(!visible)}
          aria-label={`${visible ? "Hide" : "Show"} ${label.toLowerCase()}`}
          aria-pressed={visible}
          className="absolute top-0.5 right-1 min-h-11 w-11 px-2"
        >
          <Icon name={visible ? "eye-slash" : "eye"} />
        </ButtonPresentation>
      </div>
      {hint ? (
        <p
          id={`${id}-hint`}
          className={`text-xs leading-relaxed ${kitPresentation.muted}`}
        >
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-sps-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
function Icon(props: {
  name: keyof typeof IconGlyphs;
  size?: 20 | 24;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}) {
  return <WebsiteBuilderModuleFeature {...props} variant="icon" />;
}

function IconPresentation(props: {
  name: keyof typeof IconGlyphs;
  size?: 20 | 24;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}) {
  return <WebsiteBuilderModuleFeature {...props} variant="icon" />;
}

export interface IAccountChangeProps {
  kind?: "email" | "password";
  email?: string;
  onComplete?: (email?: string) => void;
  onCancel?: () => void;
}
export function Component({
  kind = "email",
  email = "alex@example.com",
  onComplete,
  onCancel,
}: IAccountChangeProps = {}) {
  const [step, setStep] = useState<
    "start" | "verify-current" | "details" | "verify-new" | "complete"
  >("start");
  const [code, setCode] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [error, setError] = useState("");
  const [resent, setResent] = useState(false);
  const id = useId();
  const title = kind === "email" ? "Change email" : "Change password";
  const steps =
    kind === "email"
      ? ["Verify current email", "New email", "Verify new email"]
      : ["Verify email", "New password"];
  const active = step === "details" ? 1 : step === "verify-new" ? 2 : 0;
  function advance(next: typeof step) {
    setStep(next);
    setError("");
    setCode("");
    setResent(false);
  }
  function complete(nextEmail?: string) {
    try {
      onComplete?.(nextEmail);
    } catch {
      setError("Could not save the change. Try again.");
      return;
    }
    setCurrentPassword("");
    setPassword("");
    setRepeat("");
    advance("complete");
  }
  function submit(event: FormEvent) {
    event.preventDefault();
    if (step === "verify-current" || step === "verify-new") {
      if (code.trim() !== "123456") {
        setError("That code is incorrect. Use the preview code 123456.");
        return;
      }
      if (step === "verify-new") complete(newEmail.trim().toLowerCase());
      else advance("details");
    } else if (kind === "email") {
      if (newEmail.trim().toLowerCase() === email.toLowerCase()) {
        setError("Enter a different email address.");
        return;
      }
      advance("verify-new");
    } else {
      if (password !== repeat) {
        setError("The new passwords do not match.");
        return;
      }
      if (password === currentPassword) {
        setError("Choose a password different from your current one.");
        return;
      }
      complete();
    }
  }
  return (
    <section
      aria-label={title}
      className="mt-5 min-w-0 rounded-xl border border-sps-line bg-sps-grey p-4 sm:p-5"
      data-ds-block="rbac.subject.authentication-email-and-password-account-change-default"
    >
      <h4 className="text-base font-semibold">{title}</h4>
      {step === "complete" ? (
        <div className="mt-4 space-y-4">
          <p role="status" className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="size-5 shrink-0" />
            {kind === "email"
              ? `Email updated to ${newEmail.trim().toLowerCase()} in this preview.`
              : "Password change completed in this preview. Passwords are not stored."}
          </p>
          <Button variant="secondary" onClick={onCancel}>
            Done
          </Button>
        </div>
      ) : (
        <>
          <ol
            aria-label="Change progress"
            className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-sps-muted"
          >
            {steps.map((label, index) => (
              <li
                key={label}
                aria-current={active === index ? "step" : undefined}
                className={
                  active === index ? "font-semibold text-sps-graphite" : ""
                }
              >
                {index + 1}. {label}
              </li>
            ))}
          </ol>
          {step === "start" ? (
            <div className="mt-5 space-y-4">
              <p className="break-words text-sm leading-6 text-sps-muted">
                First, confirm access to {email}. Then{" "}
                {kind === "email"
                  ? "enter and verify your new email address."
                  : "enter your current password and choose a new one."}
              </p>
              <div className="flex flex-wrap gap-2">
                <Button onClick={() => advance("verify-current")}>
                  <Mail className="size-4" />
                  Send verification code
                </Button>
                <Button variant="secondary" onClick={onCancel}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <form
              key={step}
              className="mt-5 grid min-w-0 max-w-xl gap-4"
              onSubmit={submit}
            >
              {step === "verify-current" || step === "verify-new" ? (
                <>
                  <p className="break-words text-sm leading-6 text-sps-muted">
                    Enter the verification code for{" "}
                    <strong className="font-medium text-sps-graphite">
                      {step === "verify-new"
                        ? newEmail.trim().toLowerCase()
                        : email}
                    </strong>
                    .
                  </p>
                  <label
                    className="grid min-w-0 gap-2 text-sm font-medium"
                    htmlFor={`${id}-code`}
                  >
                    Verification code
                    <input
                      autoFocus
                      id={`${id}-code`}
                      autoComplete="one-time-code"
                      inputMode="numeric"
                      pattern="[0-9]{6}"
                      maxLength={6}
                      required
                      aria-describedby={`${id}-hint`}
                      aria-invalid={Boolean(error)}
                      className={kit.field}
                      value={code}
                      onChange={(event) => {
                        setCode(event.target.value);
                        setError("");
                      }}
                    />
                  </label>
                  <p id={`${id}-hint`} className="text-xs text-sps-muted">
                    Preview code: 123456. No email is sent.
                  </p>
                  <div>
                    <Button
                      variant="plain"
                      type="button"
                      onClick={() => {
                        setResent(true);
                        setCode("");
                        setError("");
                      }}
                    >
                      Resend code
                    </Button>
                    {resent && (
                      <p role="status" className="mt-1 text-xs text-sps-muted">
                        A new preview code is ready: 123456.
                      </p>
                    )}
                  </div>
                </>
              ) : kind === "email" ? (
                <label className="grid min-w-0 gap-2 text-sm font-medium">
                  New email
                  <input
                    autoFocus
                    type="email"
                    required
                    autoComplete="email"
                    className={kit.field}
                    value={newEmail}
                    onChange={(event) => {
                      setNewEmail(event.target.value);
                      setError("");
                    }}
                  />
                </label>
              ) : (
                <>
                  <PasswordField
                    label="Current password"
                    name="current-password"
                    autoComplete="current-password"
                    required
                    value={currentPassword}
                    onChange={(event) => {
                      setCurrentPassword(event.target.value);
                      setError("");
                    }}
                  />
                  <PasswordField
                    label="New password"
                    name="new-password"
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setError("");
                    }}
                  />
                  <PasswordField
                    label="Repeat new password"
                    name="repeat-password"
                    autoComplete="new-password"
                    required
                    value={repeat}
                    onChange={(event) => {
                      setRepeat(event.target.value);
                      setError("");
                    }}
                  />
                </>
              )}
              {error && (
                <p role="alert" className="text-sm text-sps-danger">
                  {error}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                <Button type="submit">
                  {step === "verify-new"
                    ? "Confirm new email"
                    : step === "details"
                      ? kind === "email"
                        ? "Verify new email"
                        : "Change password"
                      : "Verify code"}
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() =>
                    advance(
                      step === "verify-new"
                        ? "details"
                        : step === "details"
                          ? "verify-current"
                          : "start",
                    )
                  }
                >
                  Back
                </Button>
                <Button type="button" variant="plain" onClick={onCancel}>
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </>
      )}
    </section>
  );
}
const Mail = createIcon("envelope");
const CheckCircle2 = createIcon("check-circle");
const focusPresentation =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sps-graphite";
const buttonBasePresentation =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-graphite)]";
const kitPresentation = {
  field:
    "min-h-12 w-full min-w-0 rounded-xl border border-sps-line bg-sps-white px-4 py-2 text-base text-sps-graphite outline-none transition motion-reduce:transition-none placeholder:text-sps-muted focus-visible:border-sps-graphite focus-visible:ring-2 focus-visible:ring-sps-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-sps-white disabled:cursor-not-allowed disabled:bg-sps-grey disabled:text-sps-muted disabled:opacity-60 [&[readonly]]:bg-sps-grey aria-invalid:border-sps-danger aria-invalid:focus-visible:ring-sps-danger",
  muted: "text-sps-muted",
  label: "text-sm font-semibold text-sps-graphite",
};
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  field:
    "min-h-12 w-full min-w-0 rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] px-4 py-2 text-base text-[var(--color-sps-graphite)] outline-none transition motion-reduce:transition-none placeholder:text-[var(--color-sps-muted)] focus-visible:border-[var(--color-sps-graphite)] focus-visible:ring-2 focus-visible:ring-[var(--color-sps-graphite)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-sps-white)] disabled:cursor-not-allowed disabled:bg-[var(--color-sps-grey)] disabled:text-[var(--color-sps-muted)] disabled:opacity-60 [&[readonly]]:bg-[var(--color-sps-grey)] aria-invalid:border-[var(--color-sps-danger)] aria-invalid:focus-visible:ring-[var(--color-sps-danger)]",
};
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
const ButtonPresentation = forwardRefControl<
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
