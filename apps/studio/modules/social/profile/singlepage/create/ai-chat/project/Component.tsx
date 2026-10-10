"use client";
import { Component as WebsiteBuilderModuleFeature } from "../../../../../../website-builder/feature/index";

import { type ImgHTMLAttributes as ImgHTMLAttributes } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import { type InputHTMLAttributes as InputHTMLAttributes } from "react";
import { useId as useId } from "react";
import { Component as WebsiteBuilderModuleButton } from "../../../../../../website-builder/button/index";
import {
  forwardRef as forwardRefControl,
  type ButtonHTMLAttributes as ButtonControlProps,
} from "react";
import type IconGlyphs from "../../../../../../website-builder/feature/singlepage/icon/icons.json";
import { useState, type FormEvent } from "react";
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
interface ISquareImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}
function SquareImage({
  alt,
  className,
  loading = "lazy",
  ...props
}: ISquareImageProps) {
  return (
    <img
      alt={alt}
      loading={loading}
      className={twMerge("block aspect-square w-full object-cover", className)}
      {...props}
    />
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

export interface IProfileCreateProps {
  onCreate: (name: string) => void;
  onCancel?: () => void;
}
export function Component({ onCreate, onCancel }: IProfileCreateProps) {
  const [name, setName] = useState("");
  function submit(event: FormEvent) {
    event.preventDefault();
    if (name.trim()) onCreate(name.trim());
  }
  return (
    <main className="mx-auto max-w-6xl px-4 py-6 @[640px]:px-5">
      <div className="grid min-w-0 overflow-hidden rounded-2xl border border-sps-line bg-sps-white @[760px]:grid-cols-2">
        <section className="flex flex-col justify-center p-6 @[640px]:p-10">
          <span className="mb-5 h-1 w-10 rounded-full bg-sps-green" />
          <h1 className="text-3xl font-semibold leading-tight">
            Start with a name.
          </h1>
          <p className={`mt-4 text-sm leading-6 ${kit.muted}`}>
            Create a project and start working in its Products thread. Add
            knowledge and files whenever you need them.
          </p>
          <form onSubmit={submit} className="mt-8 grid gap-4">
            <TextField
              label="Project name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="What are you working on?"
              required
              autoComplete="off"
              maxLength={100}
            />
            <Button type="submit" disabled={!name.trim()}>
              <Icon name="plus" />
              Create project
            </Button>
            {onCancel && (
              <Button variant="plain" onClick={onCancel}>
                Back to my project
              </Button>
            )}
          </form>
        </section>
        <div className="relative hidden min-w-0 @[760px]:block">
          <SquareImage
            src="/module-assets/images/singlepage/generated/living-focus/singlepagestartup-photography-project-start-v1-square.png"
            alt="A person working on their project at a desk"
            className="h-full min-h-96 w-full rounded-none object-cover"
          />
          <div className="absolute inset-x-5 bottom-5 rounded-xl bg-sps-graphite p-5 text-white">
            <p className="font-semibold">Your files. Your project.</p>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Describe your products, attach useful files and work with the
              product assistant in one conversation.
            </p>
          </div>
        </div>
      </div>
    </main>
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
