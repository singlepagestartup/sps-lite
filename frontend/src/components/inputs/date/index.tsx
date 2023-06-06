import { useEffect, useMemo, useRef, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { useTranslationsContext } from "~hooks/use-translations/TranslationsContext";
import { getInputErrors } from "../utils";
import { IInputProps } from "..";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
import Calendar from "react-calendar";

export default function DateInput(props: IInputProps) {
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
    options,
  } = props;

  const translate = useTranslationsContext();

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const htmlNodeId = useMemo(() => {
    return name.replace("[", "_").replace("]", "_").replace(".", "_");
  }, [name]);

  const [additionalAttributes, setAdditionalAttributes] = useState<{
    step?: number;
    min?: number;
    max?: number;
  }>({});

  useEffect(() => {
    setAdditionalAttributes({
      step,
      min,
      max,
    });
  }, [props]);

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const inputError = getInputErrors(errors)(name);

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

  useEffect(() => {
    // console.log(`🚀 ~ TextWithControlled ~ props`, props);
    // console.log(`🚀 ~ useEffect ~ errors`, errors);
  }, [errors]);

  return (
    <div
      data-component="elements.input"
      data-variant={props.variant}
      className={`input-date ${className || ""}`}
    >
      <div className="input-label">
        <label htmlFor={htmlNodeId}>
          {typeof translate === "function" && label ? translate(label) : label}
        </label>
      </div>
      <div className="input-container">
        {options.inline ? (
          <DateTimeRangePicker
            value={value !== undefined ? value : ""}
            onChange={(e) => {
              onChange(e);
            }}
          />
        ) : (
          <Calendar
            value={value !== undefined ? value : ""}
            onChange={(e) => {
              onChange(e);
            }}
          />
        )}
      </div>
      {inputError?.message ? (
        <div className="input-error">
          <p>
            {typeof translate === "function"
              ? translate(inputError.message)
              : inputError.message}
          </p>
        </div>
      ) : null}
    </div>
  );
}
