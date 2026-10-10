"use client";
import { Component as WebsiteBuilderModuleFeature } from "../../../feature/index";

import { forwardRef as forwardRef } from "react";
import { type SVGProps as SVGProps } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import type IconGlyphs from "../../../feature/singlepage/icon/icons.json";
import { useCallback, useId, useRef, useState, type ReactNode } from "react";
import { Component as WebsiteBuilderModuleLogotype } from "../../../logotype/index";
import { Component as WebsiteBuilderModuleButtonsArray } from "../../../buttons-array/index";
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

export interface NavbarDefaultProps {
  activeHref?: string;
  brand?: string;
  cartButton?: ReactNode;
  subjectAccount?: ReactNode;
}
export function NavbarDefault({
  activeHref = "/",
  brand,
  cartButton,
  subjectAccount,
}: NavbarDefaultProps = {}) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  const closeNavigation = useCallback(() => setOpen(false), []);
  return (
    <header
      className="sticky top-0 z-50 w-full shrink-0 border-b border-[var(--color-sps-line)] bg-[var(--color-sps-white)]/95 backdrop-blur-sm"
      data-ds-block="website-builder.widget.navbar-default"
      data-ds-layer="singlepage"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          closeNavigation();
          trigger.current?.focus();
        }
      }}
    >
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-6">
          <WebsiteBuilderModuleLogotype variant="default" brand={brand} />
          <div className="hidden lg:block">
            <WebsiteBuilderModuleButtonsArray
              variant="navbar-default"
              activeHref={activeHref}
            />
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {cartButton}
          {subjectAccount}
          <button
            ref={trigger}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-xl border border-[var(--color-sps-line)] text-[var(--color-sps-muted)] hover:bg-[var(--color-sps-grey)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-graphite)] lg:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div
          id={menuId}
          className="border-t border-[var(--color-sps-line)] px-4 py-3 lg:hidden"
        >
          <WebsiteBuilderModuleButtonsArray
            variant="navbar-default"
            activeHref={activeHref}
            orientation="vertical"
            onNavigate={closeNavigation}
          />
        </div>
      )}
    </header>
  );
}
const X = createIcon("x");
const Menu = createIcon("list");
export const defaultNavbarDefaultProps: NavbarDefaultProps = {
  activeHref: "/",
  brand: "SinglePageStartup",
};
