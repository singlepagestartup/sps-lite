import { Component as WebsiteBuilderModuleFeature } from "../../../../website-builder/feature/index";
import { forwardRef as forwardRef } from "react";
import { type SVGProps as SVGProps } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import type IconGlyphs from "../../../../website-builder/feature/singlepage/icon/icons.json";
import { Component as EcommerceModuleProduct } from "../../../product/index";
import {
  formatCartMoney,
  getCartTotals,
  type CartItem,
} from "../../../cart/shared";
import { defaultCheckoutItems } from "../../shared";
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

export interface OrderSummaryDefaultProps {
  variant?: string;
  items: CartItem[];
  compact?: boolean;
  editable?: boolean;
  onDecrease?: (item: CartItem) => void;
  onIncrease?: (item: CartItem) => void;
  onRemove?: (item: CartItem) => void;
}
export function OrderSummaryDefault(props?: Partial<OrderSummaryDefaultProps>) {
  const { items, compact, editable, onDecrease, onIncrease, onRemove } = {
    ...defaultOrderSummaryDefaultProps,
    ...props,
  };
  const totals = getCartTotals(items);
  return (
    <aside
      className="min-w-0 overflow-hidden rounded-3xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)]"
      data-ds-block="ecommerce.order.summary-default"
      data-ds-imports="ecommerce.product.cart-default"
      data-ds-layer="singlepage"
      data-module="ecommerce"
      data-model="order"
      data-variant={props?.variant ?? "summary-default"}
    >
      <div className="border-b border-[var(--color-sps-line)] px-6 py-5">
        <h3 className="text-xl font-semibold text-[var(--color-sps-graphite)]">
          Order summary
        </h3>
        <p className="mt-1 text-sm text-[var(--color-sps-muted)]">
          {totals.itemCount} {totals.itemCount === 1 ? "item" : "items"}
        </p>
      </div>

      {items.length === 0 ? (
        <p className="px-6 py-8 text-sm text-[var(--color-sps-muted)]">
          Your order has no items.
        </p>
      ) : null}
      <ul className="divide-y divide-[var(--color-sps-line)] px-6">
        {items.map((item) => (
          <li key={item.id} className="py-5">
            <EcommerceModuleProduct
              variant="cart-default"
              compact={compact}
              href={productOverviewStoryHref}
              item={item}
              onDecrease={onDecrease}
              onIncrease={onIncrease}
              onRemove={onRemove}
              showRemove={editable}
              target="_top"
            />
          </li>
        ))}
      </ul>

      <div className="space-y-3 border-t border-[var(--color-sps-line)] px-6 py-5">
        <div className="flex justify-between text-sm text-[var(--color-sps-muted)]">
          <span>Subtotal</span>
          <span>{formatCartMoney(totals.subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm text-[var(--color-sps-muted)]">
          <span>Consultation discount</span>
          <span className="text-[var(--color-sps-graphite)]">
            -{formatCartMoney(totals.discount)}
          </span>
        </div>
        <div className="flex justify-between text-sm text-[var(--color-sps-muted)]">
          <span>Tax</span>
          <span>$0</span>
        </div>
        <div className="rounded-2xl bg-[var(--color-sps-grey)] p-4">
          <div className="flex items-center justify-between">
            <span className="text-lg text-[var(--color-sps-graphite)]">
              Total
            </span>
            <span className="text-3xl font-semibold text-[var(--color-sps-graphite)]">
              {formatCartMoney(totals.total)}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-sps-line)] px-6 py-5">
        <div className="flex flex-wrap items-center gap-5 text-sm text-[var(--color-sps-muted)]">
          <span className="inline-flex items-center gap-2">
            <Lock className="h-5 w-5" />
            SSL Secured
          </span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-5 w-5" />
            Money-Back Guarantee
          </span>
        </div>
      </div>
    </aside>
  );
}
const ShieldCheck = createIcon("shield-check");
const Lock = createIcon("lock-key");
const productOverviewStoryHref =
  "/?path=/story/modules-host-models-page-singlepage-ecommerce-products-ecommerce-products-slug--default";
export const defaultOrderSummaryDefaultProps: OrderSummaryDefaultProps = {
  items: defaultCheckoutItems,
  compact: false,
  editable: true,
};
