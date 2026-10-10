import { Component as WebsiteBuilderModuleFeature } from "../../../../website-builder/feature/index";
import { forwardRef as forwardRef } from "react";
import { type InputHTMLAttributes as InputHTMLAttributes } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import { forwardRef as forwardRefPresentation } from "react";
import { type SVGProps as SVGProps } from "react";
import { twMerge as twMergePresentation } from "tailwind-merge";
import type IconGlyphs from "../../../../website-builder/feature/singlepage/icon/icons.json";
import { useState } from "react";
import {
  paymentMethods,
  type PaymentMethod,
  type PaymentMethodItem,
} from "../../shared";
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
interface ICheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {}
function Icon(props: {
  name: keyof typeof IconGlyphs;
  size?: 20 | 24;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}) {
  return <WebsiteBuilderModuleFeature {...props} variant="icon" />;
}

export interface OrderCheckoutPaymentDefaultProps {
  initialMethod: PaymentMethod;
  agreementLabel: string;
  actionLabel: string;
  backLabel: string;
}
function PaymentMethodButton({
  method,
  isActive,
  onClick,
}: {
  method: PaymentMethodItem;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = method.icon;
  return (
    <button
      className={`flex min-h-24 flex-col items-center justify-center gap-3 rounded-xl border p-4 text-center font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-graphite)] ${
        isActive
          ? "border-[var(--color-sps-graphite)] bg-[var(--color-sps-grey)] text-[var(--color-sps-graphite)]"
          : "border-[var(--color-sps-line)] bg-[var(--color-sps-white)] text-[var(--color-sps-muted)] hover:border-[var(--color-sps-line)] hover:text-[var(--color-sps-graphite)]"
      }`}
      aria-pressed={isActive}
      onClick={onClick}
      type="button"
    >
      <Icon className="h-5 w-5" />
      <span className="text-sm">{method.label}</span>
    </button>
  );
}
function CardDetails() {
  return (
    <section className="rounded-3xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-5 sm:p-8">
      <h2 className="mb-8 text-2xl font-semibold text-[var(--color-sps-graphite)]">
        Card details
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {[
          ["card-number", "Card number", "4242 4242 4242 4242", true],
          ["card-name", "Name on card", "John Doe", true],
          ["expiry", "Expiry", "MM/YY", true],
          ["cvc", "CVC", "123", true],
        ].map(([id, label, placeholder, required]) => (
          <div
            className={
              id === "card-number" || id === "card-name" ? "md:col-span-2" : ""
            }
            key={id as string}
          >
            <label
              className="mb-2 block text-sm font-semibold text-[var(--color-sps-graphite)]"
              htmlFor={id as string}
            >
              {label}
              {required ? (
                <span className="ml-1 text-[var(--color-sps-danger)]">*</span>
              ) : null}
            </label>
            <input
              className={kit.field}
              id={id as string}
              placeholder={placeholder as string}
              readOnly
              type="text"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
function WalletNotice({ method }: { method: PaymentMethod }) {
  if (method === "paypal") {
    return (
      <section className="rounded-3xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-5 sm:p-8">
        <div className="flex min-h-56 flex-col items-center justify-center gap-6 text-center">
          <Wallet className="h-5 w-5 text-[var(--color-sps-muted)]" />
          <p className="max-w-2xl text-base leading-7 text-[var(--color-sps-muted)]">
            You will be redirected to PayPal to complete payment.
          </p>
        </div>
      </section>
    );
  }
  if (method === "bank") {
    return (
      <section className="rounded-3xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-5 sm:p-8">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-sps-graphite)]">
          Wire transfer details
        </h2>
        <div className="space-y-4 rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-grey)] p-6 text-base leading-7 text-[var(--color-sps-muted)]">
          {[
            ["Bank", "Silicon Valley Bank"],
            ["Account", "****-****-4821"],
            ["Routing", "121-000-248"],
            ["SWIFT", "SVBKUS6S"],
          ].map(([label, value]) => (
            <div className="flex justify-between gap-6" key={label}>
              <span className="text-[var(--color-sps-muted)]">{label}</span>
              <span className="text-right font-[family-name:var(--font-sps)]">
                {value}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-base text-[var(--color-sps-muted)]">
          Please include your order number as reference. Payment confirmation
          may take 1-3 business days.
        </p>
      </section>
    );
  }
  return (
    <section className="rounded-3xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-5 sm:p-8">
      <div className="flex min-h-56 flex-col items-center justify-center gap-6 text-center">
        <CircleDollarSign className="h-5 w-5 text-[var(--color-sps-muted)]" />
        <p className="max-w-3xl text-base leading-7 text-[var(--color-sps-muted)]">
          After placing the order you'll receive a wallet address and payment
          instructions via email.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-base text-[var(--color-sps-muted)]">
          {["BTC", "ETH", "USDT", "USDC"].map((currency) => (
            <span
              className="rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-grey)] px-4 py-1"
              key={currency}
            >
              {currency}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
export function OrderCheckoutPaymentDefault(
  props?: Partial<OrderCheckoutPaymentDefaultProps>,
) {
  const { initialMethod, agreementLabel, actionLabel, backLabel } = {
    ...defaultOrderCheckoutPaymentDefaultProps,
    ...props,
  };
  const [method, setMethod] = useState<PaymentMethod>(initialMethod);
  return (
    <div
      className="w-full min-w-0 space-y-6 lg:space-y-8"
      data-ds-block="ecommerce.order.checkout-payment-default"
      data-ds-layer="singlepage"
    >
      <section className="rounded-3xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-5 sm:p-8">
        <h2 className="mb-7 text-2xl font-semibold text-[var(--color-sps-graphite)]">
          Payment method
        </h2>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {paymentMethods.map((item) => (
            <PaymentMethodButton
              isActive={item.key === method}
              key={item.key}
              method={item}
              onClick={() => setMethod(item.key)}
            />
          ))}
        </div>
      </section>

      {method === "card" ? <CardDetails /> : <WalletNotice method={method} />}

      <section className="rounded-3xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-5 sm:p-8">
        <label className="flex items-start gap-4">
          <Checkbox className="" defaultChecked readOnly />
          <span className="text-sm leading-6 text-[var(--color-sps-muted)]">
            {agreementLabel}
          </span>
        </label>
      </section>

      <div className="flex gap-5">
        <button
          aria-label={backLabel}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] text-[var(--color-sps-graphite)] transition hover:bg-[var(--color-sps-grey)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-graphite)]"
          type="button"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <button
          className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--color-sps-green)] px-5 py-2 text-sm font-semibold text-[var(--color-sps-graphite)] transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-graphite)]"
          type="button"
        >
          <Lock className="h-6 w-6" />
          {actionLabel}
        </button>
      </div>
    </div>
  );
}
const Wallet = createIcon("wallet");
const Lock = createIcon("lock-key");
const CircleDollarSign = createIcon("currency-circle-dollar");
const ArrowLeft = createIcon("arrow-left");
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-graphite)]";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  field:
    "min-h-12 w-full min-w-0 rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] px-4 py-2 text-base text-[var(--color-sps-graphite)] outline-none transition motion-reduce:transition-none placeholder:text-[var(--color-sps-muted)] focus-visible:border-[var(--color-sps-graphite)] focus-visible:ring-2 focus-visible:ring-[var(--color-sps-graphite)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-sps-white)] disabled:cursor-not-allowed disabled:bg-[var(--color-sps-grey)] disabled:text-[var(--color-sps-muted)] disabled:opacity-60 [&[readonly]]:bg-[var(--color-sps-grey)] aria-invalid:border-[var(--color-sps-danger)] aria-invalid:focus-visible:ring-[var(--color-sps-danger)]",
  checkbox:
    "peer h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-md border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] text-[var(--color-sps-graphite)] checked:border-transparent checked:bg-[var(--color-sps-green)] indeterminate:border-transparent indeterminate:bg-[var(--color-sps-green)] disabled:cursor-not-allowed",
  focus: focus,
};
const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(function Checkbox(
  { className, ...props },
  ref,
) {
  return (
    <span className="relative inline-flex h-5 w-5 shrink-0 items-center justify-center has-[:disabled]:opacity-50">
      <input
        ref={ref}
        type="checkbox"
        className={twMerge(kit.checkbox, kit.focus, className)}
        {...props}
      />
      <Icon
        name="check"
        className="pointer-events-none absolute h-3.5 w-3.5 text-[var(--color-sps-graphite)] opacity-0 peer-checked:opacity-100 peer-indeterminate:hidden"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute hidden h-0.5 w-2.5 rounded-full bg-[var(--color-sps-graphite)] peer-indeterminate:block"
      />
    </span>
  );
});
export const defaultOrderCheckoutPaymentDefaultProps: OrderCheckoutPaymentDefaultProps =
  {
    initialMethod: "card",
    agreementLabel:
      "I agree to the Terms of Service and Privacy Policy. All sales are subject to our refund policy.",
    actionLabel: "Place order",
    backLabel: "Back to details",
  };
