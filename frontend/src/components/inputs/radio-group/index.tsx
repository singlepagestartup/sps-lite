import { RadioGroup } from "@headlessui/react";
import { useEffect, useMemo, useRef } from "react";
import { useController, useFormContext } from "react-hook-form";
import { getInputErrors } from "~utils/forms";
import { IInputProps } from "..";

export default function RadioGroupInput(props: IInputProps) {
  const {
    label,
    name,
    rules,
    options,
    shouldUnregister,
    initialValue,
    by,
    className,
    translate,
    renderOptionValue,
  } = props;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const htmlNodeId = useMemo(() => {
    return name.replace(`[`, `_`).replace(`]`, `_`).replace(`.`, `_`);
  }, [name]);

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const {
    field: { onChange, ref, value, onBlur },
  } = useController({
    name,
    control,
    rules,
    shouldUnregister,
    defaultValue: null,
  });

  const inputError = getInputErrors(errors)(name);

  useEffect(() => {
    if (initialValue && inputRef?.current) {
      const evt = new Event(`change`);
      inputRef.current.value = initialValue;
      inputRef.current.dispatchEvent(evt);
      onChange(evt);
    }
  }, [JSON.stringify(initialValue), inputRef?.current]);

  useEffect(() => {
    // console.log(`🚀 ~ TextWithControlled ~ props`, props);
    // console.log(`🚀 ~ useEffect ~ errors`, errors);
  }, [errors, props]);

  return (
    <div className={className}>
      <div className="inputs__label">
        <label htmlFor={htmlNodeId}>
          {typeof translate === `function` && label ? translate(label) : label}
        </label>
      </div>
      <div className="radio__group__input">
        <RadioGroup
          as="div"
          id={htmlNodeId}
          value={value}
          onChange={onChange}
          by={by}
          ref={(e: any) => {
            if (e) {
              ref(e);
              inputRef.current = e;
            }
          }}
        >
          <div className="radio__group">
            {options?.map((option: any, index: number) => (
              <RadioGroup.Option key={option.id || index} value={option}>
                {({ checked, active }) => (
                  <div aria-selected={checked} className={`option`}>
                    <div className="check">
                      {checked ? <div className="checked" /> : null}
                    </div>
                    <RadioGroup.Label as="div" className="label">
                      {typeof renderOptionValue === `function`
                        ? renderOptionValue(option)
                        : option.title || option}
                    </RadioGroup.Label>
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
      {inputError?.message ? (
        <div className="inputs__error">
          <p className="text-red-500 text-xs">
            {typeof translate === `function`
              ? translate(inputError.message)
              : inputError.message}
          </p>
        </div>
      ) : null}
    </div>
  );
}
