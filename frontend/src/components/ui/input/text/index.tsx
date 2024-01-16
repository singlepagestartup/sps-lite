import { useEffect, forwardRef, useRef, useMemo, useState } from "react";
import Sps from "./sps";
import Shadcn from "./shadcn";
import { IInputProps } from "..";
import { useController, useFormContext } from "react-hook-form";
import { useTranslationsContext } from "~hooks/use-translations/TranslationsContext";

export interface Props
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "defaultValue" | "name"
    >,
    IInputProps {
  asChild?: boolean;
  ui: "sps" | "shadcn";
  "data-ui-variant"?: string;
  "data-ui-size"?: string;
}

const ui = {
  sps: Sps,
  shadcn: Shadcn,
};

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ asChild = false, ...props }, passedRef) => {
    const {
      label,
      name,
      rules,
      shouldUnregister,
      defaultValue,
      placeholder,
      className,
      initialValue,
      type = "text",
      rows,
      valueAsNumber,
      step,
      min,
      max,
      disabled,
      ResetIcon,
    } = props;

    const Comp = props.ui ? ui[props.ui] : "input";

    const inputRef = useRef<HTMLInputElement | null>(null);
    const translate = useTranslationsContext();

    const translatedLabel = useMemo(() => {
      return typeof translate === "function" && label
        ? translate(label)
        : label;
    }, [label]);

    const [additionalAttributes, setAdditionalAttributes] = useState<{
      step?: number;
      min?: number;
      max?: number;
    }>({});

    const { control } = useFormContext();
    const {
      field: { onChange, ref, value, onBlur },
    } = useController({
      name,
      control,
      rules,
      shouldUnregister,
      defaultValue: initialValue !== undefined ? initialValue : defaultValue,
    });

    useEffect(() => {
      setAdditionalAttributes({
        step:
          step !== undefined && step !== null
            ? typeof step === "string"
              ? parseInt(step)
              : step
            : undefined,
        min:
          min !== undefined && min !== null
            ? typeof min === "string"
              ? parseInt(min)
              : min
            : undefined,
        max:
          max !== undefined && max !== null
            ? typeof max === "string"
              ? parseInt(max)
              : max
            : undefined,
      });
    }, [JSON.stringify(props)]);

    const htmlNodeId = useMemo(() => {
      return name.replace(/\[/g, "_").replace(/\]/g, "_").replace(/\./g, "_");
    }, [name]);

    useEffect(() => {
      if (initialValue !== undefined && inputRef?.current) {
        const evt = new Event("change");
        inputRef.current.value = initialValue;
        inputRef.current.dispatchEvent(evt);
        const target = evt.target as HTMLInputElement | HTMLTextAreaElement;

        if (valueAsNumber) {
          onChange(+target?.value);
          return;
        }

        if (
          target.value === "" &&
          (type === "date" || type === "datetime-local")
        ) {
          onChange(null);
        } else {
          onChange(evt);
        }
      }
    }, [initialValue, inputRef?.current]);

    const filteredHTMLInputProps = useMemo(() => {
      const filtered: any = {};

      for (const key of Object.keys(props)) {
        if (Object.keys(HTMLInputElement.prototype).includes(key)) {
          filtered[key] = props[key];
        }
        if (["className"].includes(key)) {
          filtered[key] = props[key];
        }
      }

      return filtered;
    }, [JSON.stringify(props)]);

    return (
      <Comp
        {...filteredHTMLInputProps}
        type={valueAsNumber ? "number" : type || "text"}
        data-ui="input"
        disabled={disabled}
        label={translatedLabel}
        onChange={(e) => {
          if (valueAsNumber) {
            onChange(+e.target.value);
            return;
          }

          if (type === "date") {
            const preparedDate = e.target.value === "" ? null : e.target.value;

            onChange(preparedDate);
            return;
          }

          onChange(e);
        }}
        id={htmlNodeId}
        onBlur={onBlur}
        value={value !== undefined ? value : ""}
        ref={(e) => {
          if (e) {
            ref(e);
            inputRef.current = e;
          }
        }}
        placeholder={
          typeof translate === "function" && placeholder
            ? translate(placeholder)
            : placeholder
        }
        {...additionalAttributes}
      />
    );
  },
);

export default TextInput;
