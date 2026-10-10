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

export interface CartButtonDefaultProps {
  variant?: string;
  count: number;
  label: string;
  onClick?: () => void;
}
export function CartButtonDefault(props?: Partial<CartButtonDefaultProps>) {
  const { count, label, onClick } = {
    ...defaultCartButtonDefaultProps,
    ...props,
  };
  return (
    <button
      aria-label={label}
      className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] text-[var(--color-sps-muted)] transition hover:bg-[var(--color-sps-grey)] hover:text-[var(--color-sps-graphite)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-graphite)]"
      data-ds-block="ecommerce.cart.button-default"
      data-ds-layer="singlepage"
      onClick={onClick}
      type="button"
      data-module="ecommerce"
      data-model="cart"
      data-variant={props?.variant ?? "button-default"}
    >
      <ShoppingCart className="h-5 w-5" />
      {count > 0 ? (
        <span className="absolute -right-1.5 -top-1.5 inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[var(--color-sps-green)] px-1 text-xs font-semibold text-[var(--color-sps-graphite)]">
          {count}
        </span>
      ) : null}
    </button>
  );
}
const ShoppingCart = createIcon("shopping-cart");
export const defaultCartButtonDefaultProps: CartButtonDefaultProps = {
  count: 1,
  label: "Open cart",
};
