"use client";
import { Component as WebsiteBuilderModuleFeature } from "../../../../../../website-builder/feature/index";

import { type InputHTMLAttributes as InputHTMLAttributes } from "react";
import { useId as useId } from "react";
import { type ReactNode as ReactNode } from "react";
import { Component as WebsiteBuilderModuleButton } from "../../../../../../website-builder/button/index";
import {
  forwardRef as forwardRefControl,
  type ButtonHTMLAttributes as ButtonControlProps,
} from "react";
import type IconGlyphs from "../../../../../../website-builder/feature/singlepage/icon/icons.json";
import { useState } from "react";
import { useProfiles } from "../../../scope/ai-chat/project/Profiles";
import { Component as KnowledgeModuleSource } from "../../../../../../knowledge/source/index";
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
interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
}
function TextField({
  label,
  hint,
  error,
  id: suppliedId,
  className = "",
  ...props
}: ITextFieldProps) {
  const generatedId = useId();
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
function Icon(props: {
  name: keyof typeof IconGlyphs;
  size?: 20 | 24;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}) {
  return <WebsiteBuilderModuleFeature {...props} variant="icon" />;
}

export interface IProfileSettingsProps {
  profileId: string;
}
export function Component({ profileId }: IProfileSettingsProps) {
  const { projects, rename } = useProfiles();
  const profile = projects.find((record) => record.id === profileId);
  const [name, setName] = useState(profile?.name ?? "");
  const [saved, setSaved] = useState(false);
  if (!profile) return <p role="status">Project profile unavailable.</p>;
  return (
    <div
      data-ds-block="social.profile.settings-ai-chat-project"
      className="space-y-6 p-5"
    >
      <form
        className="flex max-w-xl flex-wrap items-end gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          if (!name.trim()) return;
          rename(profileId, name.trim());
          setSaved(true);
        }}
      >
        <div className="min-w-0 flex-1">
          <TextField
            label="Project name"
            value={name}
            className="mt-2"
            onChange={(event) => {
              setName(event.target.value);
              setSaved(false);
            }}
          />
        </div>
        <Button
          type="submit"
          disabled={!name.trim() || name.trim() === profile.name}
        >
          Save name
        </Button>
      </form>
      {saved && <Feedback>Project name saved.</Feedback>}
      <div className="border-t border-sps-line pt-5">
        <KnowledgeModuleSource
          variant="download-ai-chat"
          label="Export Products.md"
        />
      </div>
    </div>
  );
}
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sps-graphite";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  field:
    "min-h-12 w-full min-w-0 rounded-xl border border-sps-line bg-sps-white px-4 py-2 text-base text-sps-graphite outline-none transition motion-reduce:transition-none placeholder:text-sps-muted focus-visible:border-sps-graphite focus-visible:ring-2 focus-visible:ring-sps-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-sps-white disabled:cursor-not-allowed disabled:bg-sps-grey disabled:text-sps-muted disabled:opacity-60 [&[readonly]]:bg-sps-grey aria-invalid:border-sps-danger aria-invalid:focus-visible:ring-sps-danger",
  muted: "text-sps-muted",
  label: "text-sm font-semibold text-sps-graphite",
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
