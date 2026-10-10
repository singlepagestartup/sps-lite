import { Component as WebsiteBuilderModuleFeature } from "../../../../website-builder/feature/index";
import { forwardRef as forwardRef } from "react";
import { type SVGProps as SVGProps } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import type IconGlyphs from "../../../../website-builder/feature/singlepage/icon/icons.json";
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

interface IComponentVariantProps {
  variant?: string;
}
export function RbacSubjectAdminV2Settings({
  variant = "admin-v2-settings",
}: IComponentVariantProps = {}) {
  return (
    <section
      className="rounded-2xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-6"
      data-ds-block="rbac.subject.admin-v2-settings"
      data-ds-layer="singlepage"
      data-module="rbac"
      data-model="subject"
      data-variant={variant}
    >
      <p className="text-xs text-[var(--color-sps-muted)]">rbac.subject</p>
      <h2 className="mt-1 text-xl font-semibold text-[var(--color-sps-graphite)]">
        Admin account settings
      </h2>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {[
          {
            icon: UserRound,
            title: "Subject profile",
            copy: "Name, contact, and connected social.profile rows.",
          },
          {
            icon: KeyRound,
            title: "Identities",
            copy: "Linked email/password and provider identities.",
          },
          {
            icon: ShieldCheck,
            title: "Roles",
            copy: "Admin role, permissions, and action history.",
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <article
              className="rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-grey)] p-4"
              key={item.title}
            >
              <Icon className="h-5 w-5 text-[var(--color-sps-graphite)]" />
              <h3 className="mt-3 font-semibold text-[var(--color-sps-graphite)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-sps-muted)]">
                {item.copy}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
const UserRound = createIcon("user");
const ShieldCheck = createIcon("shield-check");
const KeyRound = createIcon("key");
