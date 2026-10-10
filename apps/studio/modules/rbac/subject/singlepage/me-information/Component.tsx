import { Component as WebsiteBuilderModuleFeature } from "../../../../website-builder/feature/index";
import { forwardRef as forwardRef } from "react";
import { type SVGProps as SVGProps } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import type IconGlyphs from "../../../../website-builder/feature/singlepage/icon/icons.json";
import {
  defaultRbacSubject,
  formatRbacDateTime,
  type RbacSubject,
} from "../../../shared";
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

export interface SubjectMeInformationProps {
  variant?: string;
  subject: RbacSubject;
  title: string;
  description: string;
}
function MetadataValue({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="min-w-0">
      <span className="block text-xs text-[var(--color-sps-muted)]">
        {label}
      </span>
      {mono ? (
        <code className="mt-1 block break-all rounded-lg border border-[var(--color-sps-line)] bg-[var(--color-sps-grey)] px-3 py-2 font-[family-name:var(--font-sps)] text-xs text-[var(--color-sps-graphite)]">
          {value}
        </code>
      ) : (
        <p className="mt-1 break-words text-sm text-[var(--color-sps-graphite)]">
          {value}
        </p>
      )}
    </div>
  );
}
export function SubjectMeInformation(
  props?: Partial<SubjectMeInformationProps>,
) {
  const { subject, title, description } = {
    ...defaultSubjectMeInformationProps,
    ...props,
  };
  return (
    <article
      className="min-w-0 rounded-2xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-5 sm:p-6"
      data-ds-block="rbac.subject.me-information"
      data-ds-layer="singlepage"
      data-module="rbac"
      data-model="subject"
      data-variant={props?.variant ?? "me-information"}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-grey)] text-[var(--color-sps-muted)]">
            <Shield className="h-5 w-5" />
          </div>
          <h2 className="mt-3 text-xl font-semibold text-[var(--color-sps-graphite)]">
            {title}
          </h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-[var(--color-sps-muted)]">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-6 grid min-w-0 gap-5 border-t border-[var(--color-sps-line)] pt-6 sm:grid-cols-2">
        <MetadataValue label="Subject ID" mono value={subject.id} />
        <MetadataValue label="Slug" value={subject.slug} />
        <MetadataValue label="Variant" value={subject.variant} />
        <MetadataValue
          label="Created"
          value={formatRbacDateTime(subject.createdAt)}
        />
        <MetadataValue
          label="Updated"
          value={formatRbacDateTime(subject.updatedAt)}
        />
      </div>
    </article>
  );
}
const Shield = createIcon("shield");
export const defaultSubjectMeInformationProps: SubjectMeInformationProps = {
  subject: defaultRbacSubject,
  title: "Account details",
  description: "Identifiers and dates for your account.",
};
