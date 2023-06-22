import {
  ChangeEvent,
  Fragment,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useController, useFormContext } from "react-hook-form";
import { useTranslationsContext } from "~hooks/use-translations/TranslationsContext";
import { getInputErrors } from "../utils";
import { IInputProps } from "..";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
import Calendar from "react-calendar";
import DatePicker from "react-date-picker";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import DateTimePicker from "react-datetime-picker";
import QueryString from "qs";

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
    type = "date",
    rows,
    valueAsNumber,
    step,
    min,
    max,
    disabled,
    options,
  } = props;

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const translate = useTranslationsContext();

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

  const [localValue, setLocalValue] = useState<any>();

  function onChangeProxy(e: any) {
    setLocalValue(e);

    if (typeof e === "object" && e !== null && e.length > 1) {
      if (type === "daterange_inline") {
        return onChange([{ date_value: e[0] }, { date_value: e[1] }]);
      } else if (type === "datetimerange_inline") {
        return onChange([{ datetime_value: e[0] }, { datetime_value: e[1] }]);
      }

      return onChange(e);
    } else {
      return onChange(e);
    }
  }

  useEffect(() => {
    if (initialValue !== undefined) {
      let preparedInitialValue = initialValue;

      if (Array.isArray(initialValue)) {
        preparedInitialValue = [];

        for (const value of initialValue) {
          if (value.date_value) {
            preparedInitialValue.push(value.date_value);
          } else if (value.datetime_value) {
            preparedInitialValue.push(value.datetime_value);
          }
        }
      }

      setLocalValue(preparedInitialValue);
    }
  }, [initialValue]);

  useEffect(() => {
    // console.log(`🚀 ~ TextWithControlled ~ props`, props);
    // console.log(`🚀 ~ useEffect ~ errors`, errors);
  }, [errors]);

  const Comp = useMemo(() => {
    if (type === "daterange_inline") {
      return DateRangePicker;
    } else if (type === "date_inline") {
      return DatePicker;
    } else if (type === "datetime_inline") {
      return DateTimePicker;
    } else if (type === "datetimerange_inline") {
      return DateTimeRangePicker;
    }

    return Calendar;
  }, [options]);

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
      {domLoaded ? (
        <div className="input-container">
          <Comp
            value={localValue !== undefined ? localValue : ""}
            /* @ts-ignore */
            options={{
              inline: type?.includes("inline"),
            }}
            onChange={(e) => {
              onChangeProxy(e);
            }}
          />
        </div>
      ) : null}
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
