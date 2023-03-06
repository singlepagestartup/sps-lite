import { useState, useEffect, useRef } from "react";
import { useController, useFormContext } from "react-hook-form";
import { getInputErrors } from "~utils/forms";
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
    type = `text`,
    rows,
    translate,
    valueAsNumber,
    step,
    min,
    max,
  } = props;

  const inputRef = useRef<HTMLInputElement | null>(null);

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
    defaultValue: initialValue !== undefined ? initialValue : defaultValue,
  });

  useEffect(() => {
    if (initialValue !== undefined && inputRef?.current) {
      const evt = new Event(`change`);
      inputRef.current.value = initialValue;
      inputRef.current.dispatchEvent(evt);
      const target = evt.target as HTMLInputElement;
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
        <label htmlFor={name}>
          {typeof translate === `function` && label ? translate(label) : label}
        </label>
      </div>
      <div className="range__input">
        {max && value ? (
          <>
            <div
              className="dragger"
              style={{
                left: `${(value / max) * 100}%`,
              }}
            ></div>
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
          id={name}
          type="range"
          onChange={(e) => {
            if (valueAsNumber) {
              onChange(+e.target.value);
              return;
            }

            onChange(e);
          }}
          min={min}
          max={max}
          onBlur={onBlur}
          value={value || ``}
          ref={(e) => {
            if (e) {
              ref(e);
              inputRef.current = e;
            }
          }}
          className="input"
          {...additionalAttributes}
        />
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
