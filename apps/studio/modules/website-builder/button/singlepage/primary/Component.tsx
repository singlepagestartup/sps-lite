import { forwardRef, type SVGProps } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import IconGlyphs from "../../../feature/singlepage/icon/icons.json";
type ModuleIcon = ReturnType<typeof createIcon>;
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
function Icon({
  name,
  size = 20,
  className = "",
  svgProps,
}: {
  name: keyof typeof IconGlyphs;
  size?: 20 | 24;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}) {
  const geometry = IconGlyphs[name]
    ?.replace(/^\s*<svg\b[^>]*>/, "")
    .replace(/<\/svg>\s*$/, "");
  if (!geometry) throw new Error("Missing Phosphor icon: " + name);
  return (
    <svg
      className={`shrink-0 ${size === 24 ? "size-6" : "size-5"} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="currentColor"
      data-icon-family="phosphor"
      data-icon-name={name}
      data-icon-weight="regular"
      aria-hidden="true"
      focusable="false"
      {...svgProps}
      dangerouslySetInnerHTML={{ __html: geometry }}
    />
  );
}
export interface ButtonPrimaryProps {
  variant?: string;
  label: string;
  href: string;
  icon?: ModuleIcon;
  target?: "_self" | "_top";
}
export function ButtonPrimary(props?: Partial<ButtonPrimaryProps>) {
  const label = props?.label ?? defaultButtonPrimaryProps.label;
  const href = props?.href ?? defaultButtonPrimaryProps.href;
  const Icon = props?.icon ?? ArrowRight;
  return (
    <a
      className={`${kit.button} no-underline hover:brightness-95`}
      data-ds-block="website-builder.button.primary"
      data-ds-layer="singlepage"
      href={href}
      target={props?.target}
      data-module="website-builder"
      data-model="button"
      data-variant={props?.variant ?? "primary"}
    >
      {label}
      <Icon className="h-5 w-5 shrink-0" />
    </a>
  );
}
const ArrowRight = createIcon("arrow-right");
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-graphite)]";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  button: `${buttonBase} bg-[var(--color-sps-green)] text-[var(--color-sps-graphite)] enabled:hover:brightness-95 ${focus}`,
};
export const defaultButtonPrimaryProps: ButtonPrimaryProps = {
  label: "Open admin panel",
  href: "/admin",
  icon: ArrowRight,
};
