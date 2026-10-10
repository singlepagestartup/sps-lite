"use client";
import { Component as WebsiteBuilderModuleFeature } from "../../../../website-builder/feature/index";

import { forwardRef as forwardRef } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { useState as useStatePresentation } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import { forwardRef as forwardRefPresentation } from "react";
import { type SVGProps as SVGProps } from "react";
import { twMerge as twMergePresentation } from "tailwind-merge";
import { Component as WebsiteBuilderModuleButton } from "../../../../website-builder/button/index";
import {
  forwardRef as forwardRefControl,
  type ButtonHTMLAttributes as ButtonControlProps,
} from "react";
import type IconGlyphs from "../../../../website-builder/feature/singlepage/icon/icons.json";
import type { IAIChatServicePageContent } from "../../../../website-builder/widget/singlepage/content/ai-chat/content";
import { useId, useState } from "react";
import { Component as RbacModuleSubject } from "../../../subject/index";
import {
  useStudioAccount,
  useAIChatProjectHref,
} from "../../../subject/singlepage/account/Account";
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
interface ISelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}
interface ISelectProps extends SelectPrimitive.SelectProps {
  id?: string;
  className?: string;
  placeholder?: string;
  "aria-label"?: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
  options: ISelectOption[];
}
function Icon(props: {
  name: keyof typeof IconGlyphs;
  size?: 20 | 24;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}) {
  return <WebsiteBuilderModuleFeature {...props} variant="icon" />;
}

export interface SubjectMeAccountSettingsProps {
  variant?: string;
  copy?: IAIChatServicePageContent;
  showTokens?: boolean;
  initialSection?: "profile" | "sign-in" | "purchases" | "data";
}
export function SubjectMeAccountSettings({
  variant = "subject-me-account-settings",
  copy,
  showTokens = false,
  initialSection = "profile",
}: SubjectMeAccountSettingsProps = {}) {
  const session = useStudioAccount();
  const projectHref = useAIChatProjectHref();
  const [activeSection, setActiveSection] = useState<string>(initialSection);
  const [signedOut, setSignedOut] = useState(false);
  const id = useId();
  const sections = [
    {
      id: "profile",
      label: "Profile",
      content: <RbacModuleSubject variant="me-profile-information" />,
    },
    {
      id: "sign-in",
      label: "Sign-in methods",
      content: <RbacModuleSubject variant="me-identity-find-information" />,
    },
    {
      id: "purchases",
      label: showTokens ? "Tokens and purchases" : "Purchases",
      content: (
        <RbacModuleSubject
          variant="account-data"
          copy={copy}
          section="purchases"
          showTokens={showTokens}
        />
      ),
    },
    {
      id: "data",
      label: "Data and privacy",
      content: (
        <RbacModuleSubject
          variant="account-data"
          copy={copy}
          section="data"
          showTokens={showTokens}
        />
      ),
    },
  ];
  return (
    <section
      className="w-full bg-sps-grey py-6 font-sps text-sps-graphite sm:py-8"
      data-ds-block="rbac.widget.subject-me-account-settings"
      data-ds-imports="rbac.subject.me-profile-information rbac.subject.me-identity-find-information rbac.subject.account-data"
      data-ds-layer="singlepage"
      data-module="rbac"
      data-model="widget"
      data-variant={variant}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {showTokens && (
          <a
            href={projectHref}
            className="mb-6 inline-flex min-h-11 items-center gap-2 text-sm text-sps-muted"
          >
            <ArrowLeft className="size-4" />
            Back to workspace
          </a>
        )}
        <header className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Account settings
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-sps-muted">
              Edit your profile, manage how you sign in and review your account
              data.
            </p>
          </div>
          <Button
            variant="secondary"
            type="button"
            disabled={signedOut}
            onClick={() => {
              session.signOut();
              setSignedOut(true);
            }}
          >
            <LogOut className="size-4" />
            {signedOut ? "Signed out" : "Sign out"}
          </Button>
        </header>
        {signedOut ? (
          <p
            role="status"
            className="rounded-xl border border-sps-line bg-sps-white p-6"
          >
            You are signed out.{" "}
            <a
              className="underline"
              href={
                showTokens
                  ? "/ai-chat/rbac/subjects/authentication/select-method"
                  : "/?path=/story/modules-host-models-page-singlepage-rbac-subject-authentication-select-method--default"
              }
              target={showTokens ? undefined : "_top"}
            >
              Sign in again
            </a>
          </p>
        ) : (
          <div className="grid min-w-0 items-start gap-6 md:grid-cols-[12rem_minmax(0,1fr)]">
            <div className="min-w-0 md:hidden">
              <label
                className="mb-2 block text-sm font-medium"
                htmlFor={`${id}-select`}
              >
                Settings section
              </label>
              <Select
                id={`${id}-select`}
                aria-label="Settings section"
                value={activeSection}
                onValueChange={setActiveSection}
                options={sections.map(({ id, label }) => ({
                  value: id,
                  label,
                }))}
              />
            </div>
            <nav
              aria-label="Settings"
              className="sticky top-24 hidden space-y-1 md:block"
            >
              {sections.map(({ id: sectionId, label }) => (
                <button
                  key={sectionId}
                  id={`${id}-nav-${sectionId}`}
                  aria-controls={`${id}-panel-${sectionId}`}
                  aria-current={
                    activeSection === sectionId ? "page" : undefined
                  }
                  onClick={() => setActiveSection(sectionId)}
                  type="button"
                  className={`flex min-h-12 w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sps-graphite ${activeSection === sectionId ? "bg-sps-white" : "text-sps-muted hover:bg-sps-white"}`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-5 w-1 shrink-0 rounded-full ${activeSection === sectionId ? "bg-sps-green" : "bg-transparent"}`}
                  />
                  {label}
                </button>
              ))}
            </nav>
            <div className="min-w-0">
              {sections.map(({ id: sectionId, label, content }) => (
                <div
                  key={sectionId}
                  id={`${id}-panel-${sectionId}`}
                  role="region"
                  aria-label={label}
                  hidden={activeSection !== sectionId}
                  className="min-w-0"
                >
                  {content}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
const LogOut = createIcon("sign-out");
const ArrowLeft = createIcon("arrow-left");
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-graphite)]";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  field:
    "min-h-12 w-full min-w-0 rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] px-4 py-2 text-base text-[var(--color-sps-graphite)] outline-none transition motion-reduce:transition-none placeholder:text-[var(--color-sps-muted)] focus-visible:border-[var(--color-sps-graphite)] focus-visible:ring-2 focus-visible:ring-[var(--color-sps-graphite)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-sps-white)] disabled:cursor-not-allowed disabled:bg-[var(--color-sps-grey)] disabled:text-[var(--color-sps-muted)] disabled:opacity-60 [&[readonly]]:bg-[var(--color-sps-grey)] aria-invalid:border-[var(--color-sps-danger)] aria-invalid:focus-visible:ring-[var(--color-sps-danger)]",
};
const picker = {
  trigger: `${kit.field} flex h-12 items-center justify-between gap-3 rounded-lg text-left text-sm font-normal shadow-sm focus-visible:ring-[3px] focus-visible:ring-[var(--color-sps-graphite)]/20 focus-visible:ring-offset-0 [&>span]:truncate`,
  icon: "pointer-events-none text-[var(--color-sps-muted)]",
  content:
    "z-[60] max-h-[var(--radix-select-content-available-height)] w-[var(--radix-select-trigger-width)] overflow-hidden rounded-lg border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] font-[family-name:var(--font-sps)] text-[var(--color-sps-graphite)] shadow-md",
  item: "relative flex min-h-9 w-full cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-3 text-sm outline-none data-[highlighted]:bg-[var(--color-sps-grey)] data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
};
// shadcn Select composition, themed with module tokens and Phosphor icons.
// https://ui.shadcn.com/docs/components/radix/select
export const Select = forwardRef<HTMLButtonElement, ISelectProps>(
  function Select(
    {
      id,
      className,
      placeholder,
      options,
      "aria-label": ariaLabel,
      "aria-invalid": ariaInvalid,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref,
  ) {
    const [projection, setProjection] = useStatePresentation("singlepage");
    const [editorDepth, setEditorDepth] = useStatePresentation(0);
    return (
      <div
        ref={(node) => {
          if (node) {
            setProjection(
              node
                .closest("[data-sps-theme]")
                ?.getAttribute("data-sps-theme") ?? "singlepage",
            );
            setEditorDepth(
              Number(
                node
                  .closest("[data-ds-panel-depth]")
                  ?.getAttribute("data-ds-panel-depth") ?? 0,
              ),
            );
          }
        }}
        className="min-w-0"
      >
        <SelectPrimitive.Root
          {...props}
          onValueChange={(value) => {
            // Radix's hidden form select can emit an empty value while newly
            // created options register. Empty values are placeholders, not options.
            if (value) props.onValueChange?.(value);
          }}
        >
          <SelectPrimitive.Trigger
            ref={ref}
            id={id}
            aria-label={ariaLabel}
            aria-invalid={ariaInvalid}
            aria-describedby={ariaDescribedBy}
            className={twMerge(picker.trigger, className)}
          >
            <SelectPrimitive.Value placeholder={placeholder} />
            <SelectPrimitive.Icon asChild>
              <Icon name="caret-down" className={picker.icon} />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>
          {/* Keep fixed positioning outside CSS containers while retaining the project theme. */}
          <SelectPrimitive.Portal>
            <SelectPrimitive.Content
              data-sps-theme={projection}
              position="popper"
              align="start"
              sideOffset={6}
              collisionPadding={12}
              className={twMerge(
                picker.content,
                ["z-60", "z-80", "z-[100]", "z-[120]"][
                  Math.min(editorDepth, 3)
                ],
              )}
            >
              <SelectPrimitive.ScrollUpButton className="flex h-7 items-center justify-center">
                <Icon name="caret-down" className="rotate-180" />
              </SelectPrimitive.ScrollUpButton>
              <SelectPrimitive.Viewport className="p-1">
                {options.map((option) => (
                  <SelectPrimitive.Item
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className={picker.item}
                  >
                    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
                      <SelectPrimitive.ItemIndicator>
                        <Icon name="check" className="h-4 w-4" />
                      </SelectPrimitive.ItemIndicator>
                    </span>
                    <SelectPrimitive.ItemText>
                      {option.label}
                    </SelectPrimitive.ItemText>
                  </SelectPrimitive.Item>
                ))}
              </SelectPrimitive.Viewport>
              <SelectPrimitive.ScrollDownButton className="flex h-7 items-center justify-center">
                <Icon name="caret-down" />
              </SelectPrimitive.ScrollDownButton>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
      </div>
    );
  },
);
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
export const defaultSubjectMeAccountSettingsProps: SubjectMeAccountSettingsProps =
  { showTokens: false, initialSection: "profile" };
