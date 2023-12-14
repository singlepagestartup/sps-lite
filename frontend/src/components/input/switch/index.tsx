import { Switch } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useEffect, useMemo, useRef } from "react";
import { useController, useFormContext } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import { useTranslationsContext } from "~hooks/use-translations/TranslationsContext";
import { getInputErrors } from "../utils";
import { IInputProps } from "..";

export default function SwitchInput(props: IInputProps) {
  const {
    label,
    name,
    rules,
    shouldUnregister,
    defaultValue = false,
    initialValue = false,
    className,
    disabled,
  } = props;

  const translate = useTranslationsContext();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const htmlNodeId = useMemo(() => {
    return name.replace(/\[/g, "_").replace(/\]/g, "_").replace(/\./g, "_");
  }, [name]);

  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();

  const {
    field: { onChange, ref, value, onBlur },
  } = useController({
    name,
    control,
    rules,
    shouldUnregister,
    defaultValue,
  });

  useEffect(() => {
    if (
      initialValue !== undefined &&
      initialValue !== "" &&
      inputRef?.current
    ) {
      const evt = new Event("change");
      inputRef.current.value = initialValue;
      inputRef.current.dispatchEvent(evt);
      onChange(evt);
    }
  }, [initialValue, inputRef?.current]);

  const inputError = getInputErrors(errors)(name);

  useEffect(() => {
    // console.log(`🚀 ~ TextWithControlled ~ props`, props);
    // console.log(`🚀 ~ useEffect ~ errors`, errors);
  }, [errors]);

  return (
    <div
      data-component="elements.input"
      data-variant={props.variant}
      className={`input-switch ${className || ""}`}
    >
      <div className="input-container">
        <Switch
          as="div"
          // role="button"
          checked={value !== undefined && value !== "" ? value : false}
          onChange={(e) => {
            if (!disabled) {
              onChange(e);
            }
          }}
          id={htmlNodeId}
          ref={(e: any) => {
            if (e) {
              ref(e);
              inputRef.current = e;
            }
          }}
        >
          <div role="tablist">
            <div
              aria-selected={
                value !== undefined && value !== "" ? value : false
              }
              role="tab"
              className="check"
            >
              {value ? <CheckIcon /> : null}
            </div>
          </div>
        </Switch>
        <div className="label">
          <label
            htmlFor={htmlNodeId}
            onClick={() => {
              setValue(name, !value, { shouldValidate: true });
            }}
          >
            {label ? (
              <ReactMarkdown>
                {typeof translate === "function" ? translate(label) : label}
              </ReactMarkdown>
            ) : null}
          </label>
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
