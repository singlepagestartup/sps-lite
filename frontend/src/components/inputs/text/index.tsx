import { useEffect, useMemo, useRef, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { getInputErrors } from "~utils/forms";
import { IInputProps } from "..";

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
    type = `text`,
    rows,
    translate,
    valueAsNumber,
    step,
    min,
    max,
  } = props;

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const htmlNodeId = useMemo(() => {
    return name.replace(`[`, `_`).replace(`]`, `_`).replace(`.`, `_`);
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
      const evt = new Event(`change`);
      inputRef.current.value = initialValue;
      inputRef.current.dispatchEvent(evt);
      const target = evt.target as HTMLInputElement | HTMLTextAreaElement;
      if (valueAsNumber) {
        onChange(+target?.value);
        return;
      }
      if (
        target.value === `` &&
        (type === `date` || type === `datetime-local`)
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
    <div className={className}>
      <div className="inputs__label">
        <label htmlFor={htmlNodeId}>
          {typeof translate === `function` && label ? translate(label) : label}
        </label>
      </div>
      <div className="text__input">
        {type === `textarea` ? (
          <textarea
            onChange={(e) => {
              if (valueAsNumber) {
                onChange(+e.target.value);
                return;
              }

              onChange(e);
            }}
            onBlur={onBlur}
            value={value !== undefined ? value : ``}
            ref={(e) => {
              if (e) {
                ref(e);
                inputRef.current = e;
              }
            }}
            placeholder={placeholder}
            className="input"
            id={htmlNodeId}
            rows={rows || 3}
            {...additionalAttributes}
          ></textarea>
        ) : (
          <input
            type={valueAsNumber ? `number` : type || `text`}
            onChange={(e) => {
              if (valueAsNumber) {
                onChange(+e.target.value);
                return;
              }

              if (type === `date`) {
                const preparedDate =
                  e.target.value === `` ? null : e.target.value;

                onChange(preparedDate);
                return;
              }

              onChange(e);
            }}
            id={htmlNodeId}
            onBlur={onBlur}
            value={value !== undefined ? value : ``}
            ref={(e) => {
              if (e) {
                ref(e);
                inputRef.current = e;
              }
            }}
            placeholder={
              typeof translate === `function` && placeholder
                ? translate(placeholder)
                : placeholder
            }
            className="input"
            {...additionalAttributes}
          />
        )}
      </div>
      {inputError?.message ? (
        <div className="inputs__error">
          <p>
            {typeof translate === `function`
              ? translate(inputError.message)
              : inputError.message}
          </p>
        </div>
      ) : null}
    </div>
  );
}
