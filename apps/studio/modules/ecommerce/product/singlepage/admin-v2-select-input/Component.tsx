import { Component as WebsiteBuilderModuleFeature } from "../../../../website-builder/feature/index";
import { forwardRef as forwardRef } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { useState as useState } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import type IconGlyphs from "../../../../website-builder/feature/singlepage/icon/icons.json";
import { useId } from "react";
import { studioProducts, type IStudioProduct } from "../../shared";
interface ISelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}
interface ISelectProps extends SelectPrimitive.SelectProps {
  id?: string;
  className?: string;
  placeholder?: string;
  "aria-label"?: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
  options: ISelectOption[];
}
function Icon(props: {
  name: keyof typeof IconGlyphs;
  size?: 20 | 24;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}) {
  return <WebsiteBuilderModuleFeature {...props} variant="icon" />;
}

export interface IProductSelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  records?: IStudioProduct[];
}
export function EcommerceProductAdminV2SelectInput({
  value,
  onValueChange,
  disabled,
  records = studioProducts,
}: IProductSelectProps = {}) {
  const id = useId();
  return (
    <label
      className="grid min-w-0 gap-2 text-sm"
      htmlFor={id}
      data-ds-block="ecommerce.product.admin-v2-select-input"
      data-ds-layer="singlepage"
    >
      <span className={kit.label}>Product</span>
      <Select
        id={id}
        value={value || undefined}
        onValueChange={onValueChange}
        disabled={disabled}
        required
        name="productId"
        placeholder="Select product"
        options={records.map((record) => ({
          value: record.id,
          label: record.adminTitle,
        }))}
      />
      <span className={`break-all text-xs ${kit.muted}`}>
        {value ? `ID: ${value}` : "Choose an existing record."}
      </span>
    </label>
  );
}
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-graphite)]";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  field:
    "min-h-12 w-full min-w-0 rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] px-4 py-2 text-base text-[var(--color-sps-graphite)] outline-none transition motion-reduce:transition-none placeholder:text-[var(--color-sps-muted)] focus-visible:border-[var(--color-sps-graphite)] focus-visible:ring-2 focus-visible:ring-[var(--color-sps-graphite)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-sps-white)] disabled:cursor-not-allowed disabled:bg-[var(--color-sps-grey)] disabled:text-[var(--color-sps-muted)] disabled:opacity-60 [&[readonly]]:bg-[var(--color-sps-grey)] aria-invalid:border-[var(--color-sps-danger)] aria-invalid:focus-visible:ring-[var(--color-sps-danger)]",
  muted: "text-[var(--color-sps-muted)]",
  label: "text-sm font-semibold text-[var(--color-sps-graphite)]",
};
const picker = {
  trigger: `${kit.field} flex h-12 items-center justify-between gap-3 rounded-lg text-left text-sm font-normal shadow-sm focus-visible:ring-[3px] focus-visible:ring-[var(--color-sps-graphite)]/20 focus-visible:ring-offset-0 [&>span]:truncate`,
  icon: "pointer-events-none text-[var(--color-sps-muted)]",
  content:
    "z-[60] max-h-[var(--radix-select-content-available-height)] w-[var(--radix-select-trigger-width)] overflow-hidden rounded-lg border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] font-[family-name:var(--font-sps)] text-[var(--color-sps-graphite)] shadow-md",
  item: "relative flex min-h-9 w-full cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-3 text-sm outline-none data-[highlighted]:bg-[var(--color-sps-grey)] data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
};
// shadcn Select composition, themed with module tokens and Phosphor icons.
// https://ui.shadcn.com/docs/components/radix/select
export const Select = forwardRef<HTMLButtonElement, ISelectProps>(
  function Select(
    {
      id,
      className,
      placeholder,
      options,
      "aria-label": ariaLabel,
      "aria-invalid": ariaInvalid,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref,
  ) {
    const [projection, setProjection] = useState("singlepage");
    const [editorDepth, setEditorDepth] = useState(0);
    return (
      <div
        ref={(node) => {
          if (node) {
            setProjection(
              node
                .closest("[data-sps-theme]")
                ?.getAttribute("data-sps-theme") ?? "singlepage",
            );
            setEditorDepth(
              Number(
                node
                  .closest("[data-ds-panel-depth]")
                  ?.getAttribute("data-ds-panel-depth") ?? 0,
              ),
            );
          }
        }}
        className="min-w-0"
      >
        <SelectPrimitive.Root
          {...props}
          onValueChange={(value) => {
            // Radix's hidden form select can emit an empty value while newly
            // created options register. Empty values are placeholders, not options.
            if (value) props.onValueChange?.(value);
          }}
        >
          <SelectPrimitive.Trigger
            ref={ref}
            id={id}
            aria-label={ariaLabel}
            aria-invalid={ariaInvalid}
            aria-describedby={ariaDescribedBy}
            className={twMerge(picker.trigger, className)}
          >
            <SelectPrimitive.Value placeholder={placeholder} />
            <SelectPrimitive.Icon asChild>
              <Icon name="caret-down" className={picker.icon} />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>
          {/* Keep fixed positioning outside CSS containers while retaining the project theme. */}
          <SelectPrimitive.Portal>
            <SelectPrimitive.Content
              data-sps-theme={projection}
              position="popper"
              align="start"
              sideOffset={6}
              collisionPadding={12}
              className={twMerge(
                picker.content,
                ["z-60", "z-80", "z-[100]", "z-[120]"][
                  Math.min(editorDepth, 3)
                ],
              )}
            >
              <SelectPrimitive.ScrollUpButton className="flex h-7 items-center justify-center">
                <Icon name="caret-down" className="rotate-180" />
              </SelectPrimitive.ScrollUpButton>
              <SelectPrimitive.Viewport className="p-1">
                {options.map((option) => (
                  <SelectPrimitive.Item
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className={picker.item}
                  >
                    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
                      <SelectPrimitive.ItemIndicator>
                        <Icon name="check" className="h-4 w-4" />
                      </SelectPrimitive.ItemIndicator>
                    </span>
                    <SelectPrimitive.ItemText>
                      {option.label}
                    </SelectPrimitive.ItemText>
                  </SelectPrimitive.Item>
                ))}
              </SelectPrimitive.Viewport>
              <SelectPrimitive.ScrollDownButton className="flex h-7 items-center justify-center">
                <Icon name="caret-down" />
              </SelectPrimitive.ScrollDownButton>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
      </div>
    );
  },
);
