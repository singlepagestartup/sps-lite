import { Transition, Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useMemo, useRef } from "react";
import { useController, useFormContext } from "react-hook-form";
import { getInputErrors } from "~utils/forms";
import { IInputProps } from "..";

interface OptionRenderPropArg {
  active: boolean;
  selected: boolean;
  disabled: boolean;
}

export default function ListboxInput(props: IInputProps) {
  const {
    label,
    name,
    rules,
    options,
    shouldUnregister,
    defaultValue = null,
    className,
    initialValue,
    placeholder = ``,
    ButtonComp = DefaultButton,
    OptionComp = DefaultOption,
    by,
    multiple,
    translate,
    renderOptionValue,
  } = props;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const htmlNodeId = useMemo(() => {
    return name.replace(`[`, `_`).replace(`]`, `_`).replace(`.`, `_`);
  }, [name]);

  const additionalProps = useMemo(() => {
    if (multiple) {
      return { multiple: true };
    }

    return {};
  }, [multiple]);

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
    defaultValue: multiple ? [] : defaultValue,
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

  /**
   * If using in repeatable component
   * useForm set {} as value of input
   * and validation required skips that
   * fiels.
   */
  useEffect(() => {
    if (JSON.stringify(value) === `{}`) {
      setValue(name, undefined);
    }
  }, [JSON.stringify(value)]);

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
      <div className="listbox__input">
        <Listbox
          as="div"
          id={htmlNodeId}
          value={value}
          by={by}
          onChange={(e) => {
            onChange(e);
          }}
          ref={(e: any) => {
            if (e) {
              ref(e);
              inputRef.current = e;
            }
          }}
          {...additionalProps}
        >
          <div className="listbox">
            <Listbox.Button className="button">
              <ButtonComp
                value={value}
                placeholder={placeholder}
                renderOptionValue={renderOptionValue}
              />
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="options">
                {options?.map((option: any, index: number) => (
                  <Listbox.Option key={index} value={option}>
                    {(params) => {
                      return (
                        <OptionComp
                          option={option}
                          params={params}
                          renderOptionValue={renderOptionValue}
                        />
                      );
                    }}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      {inputError?.message ? (
        <p className="text-red-500 text-xs">
          {typeof translate === `function`
            ? translate(inputError.message)
            : inputError.message}
        </p>
      ) : null}
    </div>
  );
}

function DefaultButton({ value, placeholder, renderOptionValue }: any) {
  const renderValue = useMemo(() => {
    if (Array.isArray(value)) {
      if (value.length) {
        return value
          .map((selectedValue, index) => {
            const title = selectedValue.title || selectedValue;

            return title;
          })
          .join(`, `);
      } else {
        return placeholder;
      }
    } else {
      if (value?.title) {
        return value.title;
      } else {
        return value !== undefined &&
          value !== `` &&
          (typeof value === `string` || typeof value === `number`)
          ? typeof renderOptionValue === `function`
            ? renderOptionValue(value)
            : value
          : placeholder;
      }
    }
  }, [value, placeholder]);

  return (
    <>
      <span className="title">{renderValue}</span>
      <div className="icon__box">
        <ChevronUpDownIcon className="icon" aria-hidden="true" />
      </div>
    </>
  );
}

function DefaultOption({
  params,
  option,
  renderOptionValue,
}: {
  params: OptionRenderPropArg;
  option: any;
  renderOptionValue: (option: any) => string;
}) {
  const { selected } = params;

  return (
    <div aria-selected={selected} className="option">
      <span className="title">
        {(typeof renderOptionValue === `function`
          ? renderOptionValue(option)
          : option.title) || option}
      </span>
      {selected ? (
        <div className="icon__box">
          <CheckIcon className="icon" aria-hidden="true" />
        </div>
      ) : null}
    </div>
  );
}
