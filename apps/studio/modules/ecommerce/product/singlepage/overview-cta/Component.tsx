import { Component as WebsiteBuilderModuleFeature } from "../../../../website-builder/feature/index";
import {
  forwardRef,
  type SVGProps,
  forwardRef as forwardRefControl,
  type ButtonHTMLAttributes as ButtonControlProps,
} from "react";
import { twMerge as twMerge } from "tailwind-merge";
import { Component as WebsiteBuilderModuleButton } from "../../../../website-builder/button/index";
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

export interface ProductOverviewCtaProps {
  variant?: string;
  title: string;
  description?: string;
  primaryActionLabel: string;
  secondaryActionLabel: string;
  secondaryHref: string;
  blockId?: string;
  importedBlockId?: string;
  onPrimaryAction?: () => void;
}
export function ProductOverviewCta(props?: Partial<ProductOverviewCtaProps>) {
  const {
    title,
    description,
    primaryActionLabel,
    secondaryActionLabel,
    secondaryHref,
    blockId,
    importedBlockId,
    onPrimaryAction,
  } = { ...defaultProductOverviewCtaProps, ...props };
  return (
    <section
      className="w-full py-12 sm:py-16"
      data-ds-block={blockId ?? "ecommerce.product.overview-cta"}
      data-ds-imports={importedBlockId}
      data-ds-layer="singlepage"
      data-module="ecommerce"
      data-model="product"
      data-variant={props?.variant ?? "overview-cta"}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 rounded-3xl bg-[var(--color-sps-graphite)] p-6 text-[var(--color-sps-white)] sm:p-10 lg:flex-row lg:items-end lg:justify-between lg:p-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-sps-muted-inverse)]">
                {description}
              </p>
            ) : null}
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Button
              onClick={onPrimaryAction}
              disabled={!onPrimaryAction}
              className="focus-visible:outline-[var(--color-sps-white)]"
            >
              <ShoppingCart className="h-5 w-5" />
              {primaryActionLabel}
            </Button>
            <a
              href={secondaryHref}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[var(--color-sps-muted-inverse)]/50 px-5 py-2 text-sm font-semibold text-[var(--color-sps-white)] transition hover:bg-[var(--color-sps-white)]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-white)]"
            >
              {secondaryActionLabel}
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
const ShoppingCart = createIcon("shopping-cart");
const ArrowRight = createIcon("arrow-right");
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
export const defaultProductOverviewCtaProps: ProductOverviewCtaProps = {
  title: "Ready to build your website?",
  description: "Get a free consultation and project estimate within 24 hours.",
  primaryActionLabel: "Add to cart",
  secondaryActionLabel: "Book a call",
  secondaryHref: "/#contact",
};
