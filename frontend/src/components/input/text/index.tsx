import { useEffect, useMemo, useRef, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { useTranslationsContext } from "~hooks/use-translations/TranslationsContext";
import { getInputErrors } from "../utils";
import { IInputProps } from "..";
import Image from "next/image";
import getFileUrl from "~utils/api/get-file-url";
import { OnChange } from "@react-spring/web";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function TextInput(props: IInputProps) {
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
    ResetIcon = DeafultResetIcon,
  } = props;

  const translate = useTranslationsContext();

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const htmlNodeId = useMemo(() => {
    return name.replace(/\[/g, "_").replace(/\]/g, "_").replace(/\./g, "_");
  }, [name]);

  const [additionalAttributes, setAdditionalAttributes] = useState<{
    step?: number;
    min?: number;
    max?: number;
  }>({});

  useEffect(() => {
    setAdditionalAttributes({
      step: step !== undefined && step !== null ? step : undefined,
      min: min !== undefined && min !== null ? min : undefined,
      max: max !== undefined && max !== null ? max : undefined,
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

  function reset(e: any) {
    onChange({ ...e, target: { value: "" } });
  }

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
      className={`input-text ${className || ""}`}
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
        <div className="reset-button-container">
          <button onClick={reset} className="reset-button">
            <div className="icon">
              <ResetIcon className="w-4 h-5" />
            </div>
            <p>
              {typeof translate === "function" ? translate("Reset") : "Reset"}
            </p>
          </button>
        </div>
        <div
          data-media={props.media && props.media?.length > 0}
          className="media-container"
        >
          {props.media?.map((media, index) => (
            <Image key={index} src={getFileUrl(media)} fill={true} alt="" />
          ))}
        </div>
        {type === "textarea" ? (
          <textarea
            onChange={(e) => {
              if (valueAsNumber) {
                onChange(+e.target.value);
                return;
              }

              onChange(e);
            }}
            disabled={disabled}
            onBlur={onBlur}
            value={value !== undefined ? value : ""}
            ref={(e) => {
              if (e) {
                ref(e);
                inputRef.current = e;
              }
            }}
            placeholder={placeholder ? placeholder : undefined}
            id={htmlNodeId}
            rows={rows || 3}
            {...additionalAttributes}
          ></textarea>
        ) : (
          <input
            type={valueAsNumber ? "number" : type || "text"}
            disabled={disabled}
            onChange={(e) => {
              if (valueAsNumber) {
                onChange(+e.target.value);
                return;
              }

              if (type === "date") {
                const preparedDate =
                  e.target.value === "" ? null : e.target.value;

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
        )}
        <div
          data-media={
            props.additionalMedia && props.additionalMedia?.length > 0
          }
          className="additional-media-container"
        >
          {props.additionalMedia?.map((additionalMedia, index) => (
            <Image
              key={index}
              src={getFileUrl(additionalMedia)}
              fill={true}
              alt=""
            />
          ))}
        </div>
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

function DeafultResetIcon() {
  return <XMarkIcon />;
}
