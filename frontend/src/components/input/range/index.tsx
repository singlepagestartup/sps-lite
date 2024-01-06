import { useState, useEffect, useRef, useMemo } from "react";
import { useController, useFormContext } from "react-hook-form";
import { useTranslationsContext } from "~hooks/use-translations/TranslationsContext";
import { getInputErrors } from "../utils";
import { IInputProps } from "..";

export default function RangeInput(props: IInputProps) {
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
  } = props;

  const translate = useTranslationsContext();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const htmlNodeId = useMemo(() => {
    return name.replace(/\[/g, "_").replace(/\]/g, "_").replace(/\./g, "_");
  }, [name]);

  const [additionalAttributes, setAdditionalAttributes] = useState<{
    step?: number;
  }>({});

  useEffect(() => {
    if (step && step !== additionalAttributes.step) {
      setAdditionalAttributes((prev) => {
        return { ...prev, step };
      });
    }
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
    defaultValue:
      initialValue !== undefined
        ? initialValue
        : defaultValue
        ? +defaultValue
        : min
        ? valueAsNumber
          ? +min
          : `${+min}`
        : valueAsNumber
        ? 0
        : "0",
  });

  useEffect(() => {
    if (initialValue !== undefined && inputRef?.current) {
      const evt = new Event("change");
      inputRef.current.value = initialValue;
      inputRef.current.dispatchEvent(evt);
      const target = evt.target as HTMLInputElement;
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
      className={`input-range ${className || ""}`}
    >
      {label ? (
        <div className="input-label">
          <label htmlFor={htmlNodeId}>
            {typeof translate === "function" && label
              ? translate(label)
              : label}
          </label>
        </div>
      ) : null}
      <div className="input-container">
        {max && value !== undefined ? (
          <>
            <div
              className="dragger"
              style={{
                left: `${(value / max) * 100}%`,
              }}
            >
              <p className="dragger-value">{value}</p>
            </div>
            <div
              className="ms-fill-lower"
              style={{
                width: `${(value / max) * 100}%`,
              }}
            ></div>
            <div
              className="ms-fill-upper"
              style={{
                width: `${((max - value) / max) * 100}%`,
              }}
            ></div>
          </>
        ) : null}
        <input
          id={htmlNodeId}
          type="range"
          onChange={(e) => {
            if (valueAsNumber) {
              onChange(+e.target.value);
              return;
            }

            onChange(e);
          }}
          min={min !== null && min !== undefined ? min : undefined}
          max={max !== null && min !== undefined ? max : undefined}
          onBlur={onBlur}
          value={value !== undefined ? value : ""}
          ref={(e) => {
            if (e) {
              ref(e);
              inputRef.current = e;
            }
          }}
          className="input"
          {...additionalAttributes}
        />
        {min !== undefined && max !== undefined ? (
          <div className="limit-values-container">
            <p className="min">{min}</p>
            <p className="max">{max}</p>
          </div>
        ) : null}
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
