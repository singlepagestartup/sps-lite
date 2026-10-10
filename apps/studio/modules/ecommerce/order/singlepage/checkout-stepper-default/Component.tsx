import { Component as WebsiteBuilderModuleFeature } from "../../../../website-builder/feature/index";
import { forwardRef as forwardRef } from "react";
import { type SVGProps as SVGProps } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import type IconGlyphs from "../../../../website-builder/feature/singlepage/icon/icons.json";
import { checkoutSteps, type CheckoutStep } from "../../shared";
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

export interface OrderCheckoutStepperDefaultProps {
  currentStep: CheckoutStep;
  showBreadcrumb?: boolean;
}
export function OrderCheckoutStepperDefault(
  props?: Partial<OrderCheckoutStepperDefaultProps>,
) {
  const { currentStep, showBreadcrumb } = {
    ...defaultOrderCheckoutStepperDefaultProps,
    ...props,
  };
  const currentIndex = checkoutSteps.findIndex(
    (step) => step.key === currentStep,
  );
  return (
    <section
      className="w-full py-8 sm:py-12"
      data-ds-block="ecommerce.order.checkout-stepper-default"
      data-ds-layer="singlepage"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {showBreadcrumb ? (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[var(--color-sps-muted)]"
          >
            <a
              className="rounded hover:text-[var(--color-sps-graphite)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-graphite)]"
              href="/"
            >
              Home
            </a>
            <ChevronRight className="h-5 w-5" />
            <a
              className="rounded hover:text-[var(--color-sps-graphite)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-graphite)]"
              href="/ecommerce/products"
            >
              Services
            </a>
            <ChevronRight className="h-5 w-5" />
            <span aria-current="page">Checkout</span>
          </nav>
        ) : null}
        <h1 className="text-4xl font-semibold leading-tight text-[var(--color-sps-graphite)] sm:text-5xl">
          Checkout
        </h1>
        <nav aria-label="Checkout progress" className="mt-8">
          <ol className="grid w-full grid-cols-3 gap-2 rounded-2xl bg-[var(--color-sps-line)]/50 p-2">
            {checkoutSteps.map((step, index) => {
              const done = index < currentIndex;
              const active = step.key === currentStep;
              return (
                <li
                  key={step.key}
                  aria-current={active ? "step" : undefined}
                  className={`flex min-w-0 flex-col items-center gap-2 rounded-xl p-3 sm:flex-row sm:gap-3 ${active ? "bg-[var(--color-sps-white)]" : ""}`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${done ? "bg-[var(--color-sps-green)] text-[var(--color-sps-graphite)]" : active ? "bg-[var(--color-sps-graphite)] text-[var(--color-sps-white)]" : "bg-[var(--color-sps-white)] text-[var(--color-sps-muted)]"}`}
                  >
                    {done ? <Check className="h-5 w-5" /> : step.number}
                  </span>
                  <span
                    className={`text-center text-xs sm:text-sm ${active ? "font-semibold text-[var(--color-sps-graphite)]" : "text-[var(--color-sps-muted)]"}`}
                  >
                    {step.label}
                  </span>
                  {done ? <span className="sr-only">Completed</span> : null}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}
const ChevronRight = createIcon("caret-right");
const Check = createIcon("check");
export const defaultOrderCheckoutStepperDefaultProps: OrderCheckoutStepperDefaultProps =
  {
    currentStep: "details",
    showBreadcrumb: true,
  };
