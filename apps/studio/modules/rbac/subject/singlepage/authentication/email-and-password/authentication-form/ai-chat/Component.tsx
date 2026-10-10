"use client";
import { Component as WebsiteBuilderModuleFeature } from "../../../../../../../website-builder/feature/index";

import { type ReactNode as ReactNode } from "react";
import { type InputHTMLAttributes as InputHTMLAttributes } from "react";
import { useId as useIdPresentation } from "react";
import { useState as useStatePresentation } from "react";
import { Component as WebsiteBuilderModuleButton } from "../../../../../../../website-builder/button/index";
import {
  forwardRef as forwardRefControl,
  type ButtonHTMLAttributes as ButtonControlProps,
} from "react";
import type IconGlyphs from "../../../../../../../website-builder/feature/singlepage/icon/icons.json";
import { useId, useState, type FormEvent } from "react";
import {
  AccountPage,
  PageSection,
} from "../../registration-form/ai-chat/Component";
import { useStudioAccount } from "../../../../account/Account";
import defaultCopy from "./content.json";
import type { IAIChatServicePageContent } from "../../../../../../../website-builder/widget/singlepage/content/ai-chat/content";
function TextField({
  label,
  hint,
  error,
  id: suppliedId,
  className = "",
  ...props
}: ITextFieldProps) {
  const generatedId = useIdPresentation();
  const id = suppliedId ?? generatedId;
  return (
    <div className="min-w-0 space-y-2">
      <label htmlFor={id} className={`block ${kit.label}`}>
        {label}
      </label>
      <input
        {...props}
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          [hint ? `${id}-hint` : "", error ? `${id}-error` : ""]
            .filter(Boolean)
            .join(" ") || undefined
        }
        className={`${kit.field} ${className}`}
      />
      {hint ? (
        <p id={`${id}-hint`} className={`text-xs leading-relaxed ${kit.muted}`}>
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
      <label htmlFor={id} className={`block ${kit.label}`}>
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
          className={`${kit.field} pr-14`}
        />
        <Button
          variant="plain"
          onClick={() => setVisible(!visible)}
          aria-label={`${visible ? "Hide" : "Show"} ${label.toLowerCase()}`}
          aria-pressed={visible}
          className="absolute top-0.5 right-1 min-h-11 w-11 px-2"
        >
          <Icon name={visible ? "eye-slash" : "eye"} />
        </Button>
      </div>
      {hint ? (
        <p id={`${id}-hint`} className={`text-xs leading-relaxed ${kit.muted}`}>
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
interface IFeedbackProps {
  children: ReactNode;
  kind?: "success" | "error" | "info";
}
function Feedback({ children, kind = "success" }: IFeedbackProps) {
  return (
    <div
      role={kind === "error" ? "alert" : "status"}
      className={`flex items-start gap-3 rounded-xl border p-4 text-sm leading-relaxed ${kind === "error" ? "border-sps-danger-line bg-sps-danger-surface text-sps-danger" : "border-sps-line bg-sps-grey"}`}
    >
      <Icon
        name={
          kind === "error"
            ? "warning"
            : kind === "info"
              ? "question"
              : "check-circle"
        }
        className={kind === "success" ? "text-sps-graphite" : ""}
      />
      <div className="min-w-0">{children}</div>
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

export interface ILoginProps {
  copy?: IAIChatServicePageContent;
  onSuccess?: (email: string) => void;
}
export interface ILoginErrors {
  email?: string;
  password?: string;
}
export function Component({ copy = defaultCopy, onSuccess }: ILoginProps = {}) {
  const { signIn } = useStudioAccount();
  const label = copy.labels;
  const id = useId();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<ILoginErrors>({});
  const [submitted, setSubmitted] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = event.currentTarget.elements.namedItem("email");
    const nextErrors: ILoginErrors = {};
    if (
      !email.trim() ||
      (input instanceof HTMLInputElement && input.validity.typeMismatch)
    ) {
      nextErrors.email = label["email-error"];
    }
    if (!password) nextErrors.password = label["password-error"];
    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      const field = event.currentTarget.elements.namedItem(firstError);
      if (field instanceof HTMLElement) field.focus();
    }
    const valid = Object.keys(nextErrors).length === 0;
    setSubmitted(valid);
    if (valid) onSuccess?.(email.trim());
  }
  return (
    <AccountPage copy={copy} page="login">
      <PageSection section={copy.sections.account} icon="sign-in">
        <form noValidate onSubmit={submit} className="mt-6 grid gap-5">
          <TextField
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            label={label["email-label"]}
            placeholder={label["email-placeholder"]}
            value={email}
            error={errors.email}
            onChange={(event) => {
              setEmail(event.target.value);
              setErrors((current) => ({ ...current, email: undefined }));
              setSubmitted(false);
            }}
          />
          <PasswordField
            id={`${id}-password`}
            name="password"
            autoComplete="current-password"
            required
            label={label["password-label"]}
            value={password}
            error={errors.password}
            onChange={(event) => {
              setPassword(event.target.value);
              setErrors((current) => ({ ...current, password: undefined }));
              setSubmitted(false);
            }}
          />
          <a
            className={`w-fit text-sm underline decoration-sps-line underline-offset-4 ${kit.focus}`}
            href={label["forgot-href"]}
          >
            {label["forgot-label"]}
          </a>
          <Button type="submit" className="w-full justify-center">
            {label.submit}
            <Icon name="arrow-right" />
          </Button>
          <p className="text-center text-sm leading-6 text-sps-muted">
            {label["no-account"]}{" "}
            <a
              className={`font-semibold text-sps-graphite underline underline-offset-4 ${kit.focus}`}
              href={label["register-href"]}
            >
              {label["register-label"]}
            </a>
          </p>
        </form>
        {submitted ? (
          <div className="mt-6 grid gap-4">
            <Feedback kind="success">{label["success-message"]}</Feedback>
            <p className="text-sm leading-6 text-sps-muted">
              {copy.sections.success.paragraphs.join(" ")}
            </p>
            <a
              className={`${kit.secondary} w-fit`}
              href={label["continue-href"]}
            >
              {label["continue-label"]}
              <Icon name="arrow-right" />
            </a>
          </div>
        ) : null}
      </PageSection>
    </AccountPage>
  );
}
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sps-graphite";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  secondary: `${buttonBase} border border-sps-line bg-sps-white text-sps-graphite enabled:hover:bg-sps-grey ${focus}`,
  field:
    "min-h-12 w-full min-w-0 rounded-xl border border-sps-line bg-sps-white px-4 py-2 text-base text-sps-graphite outline-none transition motion-reduce:transition-none placeholder:text-sps-muted focus-visible:border-sps-graphite focus-visible:ring-2 focus-visible:ring-sps-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-sps-white disabled:cursor-not-allowed disabled:bg-sps-grey disabled:text-sps-muted disabled:opacity-60 [&[readonly]]:bg-sps-grey aria-invalid:border-sps-danger aria-invalid:focus-visible:ring-sps-danger",
  muted: "text-sps-muted",
  label: "text-sm font-semibold text-sps-graphite",
  focus: focus,
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
