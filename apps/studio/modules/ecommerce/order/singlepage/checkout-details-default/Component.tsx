import { Component as WebsiteBuilderModuleFeature } from "../../../../website-builder/feature/index";
import { forwardRef, type SVGProps } from "react";
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

export interface OrderCheckoutDetailsField {
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
}
export interface OrderCheckoutDetailsDefaultProps {
  variant?: string;
  contactFields: OrderCheckoutDetailsField[];
  billingFields: OrderCheckoutDetailsField[];
  notesLabel: string;
  notesPlaceholder: string;
  actionLabel: string;
  actionDisabled?: boolean;
}
function CheckoutInput({ field }: { field: OrderCheckoutDetailsField }) {
  return (
    <div
      className={
        field.id === "company" || field.id === "street-address"
          ? "md:col-span-2"
          : ""
      }
    >
      <label
        className="mb-2 block text-sm font-semibold text-[var(--color-sps-graphite)]"
        htmlFor={field.id}
      >
        {field.label}
        {field.required ? (
          <span className="ml-1 text-[var(--color-sps-danger)]">*</span>
        ) : null}
      </label>
      <input
        className={kit.field}
        id={field.id}
        placeholder={field.placeholder}
        readOnly
        aria-required={field.required}
        type={
          field.id === "email" ? "email" : field.id === "phone" ? "tel" : "text"
        }
      />
    </div>
  );
}
export function OrderCheckoutDetailsDefault(
  props?: Partial<OrderCheckoutDetailsDefaultProps>,
) {
  const {
    contactFields,
    billingFields,
    notesLabel,
    notesPlaceholder,
    actionLabel,
    actionDisabled,
  } = {
    ...defaultOrderCheckoutDetailsDefaultProps,
    ...props,
  };
  return (
    <div
      className="w-full min-w-0 space-y-6 lg:space-y-8"
      data-ds-block="ecommerce.order.checkout-details-default"
      data-ds-layer="singlepage"
      data-module="ecommerce"
      data-model="order"
      data-variant={props?.variant ?? "checkout-details-default"}
    >
      <section className="rounded-3xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-5 sm:p-8">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-sps-graphite)]">
          Contact information
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {contactFields.map((field) => (
            <CheckoutInput field={field} key={field.id} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-5 sm:p-8">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-sps-graphite)]">
          Billing address
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {billingFields.map((field) => (
            <CheckoutInput field={field} key={field.id} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-5 sm:p-8">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-sps-graphite)]">
          {notesLabel}
        </h2>
        <textarea
          className={`${kit.field} min-h-32 resize-y`}
          aria-label={notesLabel}
          placeholder={notesPlaceholder}
          readOnly
        />
      </section>

      <button
        className={kit.button + " w-full"}
        disabled={actionDisabled}
        type="button"
      >
        {actionLabel}
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
}
const ArrowRight = createIcon("arrow-right");
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-graphite)]";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  button: `${buttonBase} bg-[var(--color-sps-green)] text-[var(--color-sps-graphite)] enabled:hover:brightness-95 ${focus}`,
  field:
    "min-h-12 w-full min-w-0 rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] px-4 py-2 text-base text-[var(--color-sps-graphite)] outline-none transition motion-reduce:transition-none placeholder:text-[var(--color-sps-muted)] focus-visible:border-[var(--color-sps-graphite)] focus-visible:ring-2 focus-visible:ring-[var(--color-sps-graphite)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-sps-white)] disabled:cursor-not-allowed disabled:bg-[var(--color-sps-grey)] disabled:text-[var(--color-sps-muted)] disabled:opacity-60 [&[readonly]]:bg-[var(--color-sps-grey)] aria-invalid:border-[var(--color-sps-danger)] aria-invalid:focus-visible:ring-[var(--color-sps-danger)]",
};
export const defaultOrderCheckoutDetailsDefaultProps: OrderCheckoutDetailsDefaultProps =
  {
    contactFields: [
      {
        id: "first-name",
        label: "First name",
        placeholder: "John",
        required: true,
      },
      {
        id: "last-name",
        label: "Last name",
        placeholder: "Doe",
        required: true,
      },
      {
        id: "email",
        label: "Email",
        placeholder: "john@example.com",
        required: true,
      },
      {
        id: "phone",
        label: "Phone",
        placeholder: "+1 (555) 000-0000",
      },
      {
        id: "company",
        label: "Company",
        placeholder: "Acme Inc.",
      },
    ],
    billingFields: [
      {
        id: "street-address",
        label: "Street address",
        placeholder: "123 Main St",
      },
      {
        id: "city",
        label: "City",
        placeholder: "New York",
      },
      {
        id: "state",
        label: "State / Region",
        placeholder: "NY",
      },
      {
        id: "zip",
        label: "ZIP / Postal Code",
        placeholder: "10001",
      },
      {
        id: "country",
        label: "Country",
        placeholder: "United States",
      },
    ],
    notesLabel: "Additional notes",
    notesPlaceholder: "Anything we should know about your project...",
    actionLabel: "Continue to payment",
    actionDisabled: true,
  };
