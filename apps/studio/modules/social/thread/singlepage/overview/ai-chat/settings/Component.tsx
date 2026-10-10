"use client";
import { Component as WebsiteBuilderModuleFeature } from "../../../../../../website-builder/feature/index";

import { type InputHTMLAttributes as InputHTMLAttributes } from "react";
import { useId as useId } from "react";
import { Component as WebsiteBuilderModuleButton } from "../../../../../../website-builder/button/index";
import {
  forwardRef as forwardRefControl,
  type ButtonHTMLAttributes as ButtonControlProps,
} from "react";
import type IconGlyphs from "../../../../../../website-builder/feature/singlepage/icon/icons.json";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { type IProjectTopic } from "../../../../../profile/singlepage/scope/ai-chat/project/state";
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

export interface IThreadSettingsProps {
  variant?: string;
  topic: IProjectTopic;
  onSave: (title: string) => void;
  onDelete: () => void;
}
export function Component({
  variant = "overview-ai-chat-settings",
  topic,
  onSave,
  onDelete,
}: IThreadSettingsProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(topic.title);
  const [confirmDelete, setConfirmDelete] = useState(false);
  return (
    <div
      className="inline-flex"
      data-module="social"
      data-model="thread"
      data-variant={variant}
    >
      <Dialog.Root
        open={open}
        onOpenChange={(next) => {
          if (next) {
            setTitle(topic.title);
            setConfirmDelete(false);
          }
          setOpen(next);
        }}
      >
        <Dialog.Trigger asChild>
          <Button
            variant="plain"
            className="min-h-9 shrink-0 px-2"
            aria-label="Thread settings"
            title="Thread settings"
          >
            <Icon name="gear-six" />
          </Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay
            className="fixed inset-0 z-50 bg-sps-graphite/40"
            data-module="social"
            data-model="thread"
            data-variant={variant}
          />
          <Dialog.Content
            data-ds-block="social.thread.overview-ai-chat-settings"
            data-id={topic.id}
            className="fixed inset-y-4 right-4 z-50 flex w-[calc(100%-32px)] max-w-xl flex-col overflow-hidden rounded-2xl border border-sps-line bg-sps-white font-sps text-sps-graphite shadow-xl focus:outline-none"
            data-module="social"
            data-model="thread"
            data-variant={variant}
          >
            <div className="flex items-start justify-between gap-3 border-b border-sps-line p-5">
              <div>
                <Dialog.Title className="text-lg font-semibold">
                  Thread settings
                </Dialog.Title>
                <Dialog.Description className="mt-1 text-sm leading-6 text-sps-muted">
                  Rename or delete this thread.
                </Dialog.Description>
              </div>
              <Dialog.Close asChild>
                <Button
                  variant="plain"
                  className="min-h-9 px-2"
                  aria-label="Close thread settings"
                >
                  <Icon name="x" />
                </Button>
              </Dialog.Close>
            </div>
            <div className="min-h-0 space-y-6 overflow-y-auto p-5">
              <form
                className="space-y-5"
                onSubmit={(event) => {
                  event.preventDefault();
                  if (!title.trim()) return;
                  onSave(title.trim());
                  setOpen(false);
                }}
              >
                <TextField
                  label="Thread name"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  required
                  maxLength={100}
                />
                <Button type="submit" disabled={!title.trim()}>
                  <Icon name="floppy-disk" />
                  Save changes
                </Button>
              </form>
              <div className="border-t border-sps-line pt-5">
                {confirmDelete ? (
                  <div className="space-y-3">
                    <p className="break-words text-sm leading-6">
                      Delete “{topic.title}” and its messages?
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="danger"
                        onClick={() => {
                          setOpen(false);
                          onDelete();
                        }}
                      >
                        Delete thread
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => setConfirmDelete(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button
                    variant="danger"
                    onClick={() => setConfirmDelete(true)}
                  >
                    <Icon name="trash" />
                    Delete thread
                  </Button>
                )}
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
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
