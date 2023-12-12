import { useEffect, useMemo, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { useTranslationsContext } from "~hooks/use-translations/TranslationsContext";
import { getInputErrors } from "../utils";
import { IInputProps } from "..";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
import Calendar from "react-calendar";
import DatePicker from "react-date-picker";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import DateTimePicker from "react-datetime-picker";
import { CalendarIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import getFileUrl from "~utils/api/get-file-url";
import dayjs from "dayjs";
import { IEntity as IBackendFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";

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
    ResetIcon = DeafultResetIcon,
    CalendarIcon = DefaultCalendarIcon,
    media,
  } = props;

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const translate = useTranslationsContext();

  const htmlNodeId = useMemo(() => {
    return name.replace(/\[/g, "_").replace(/\]/g, "_").replace(/\./g, "_");
  }, [name]);

  const [additionalAttributes, setAdditionalAttributes] = useState<{
    step?: number | null;
    min?: number | null;
    max?: number | null;
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
    defaultValue: initialValue !== undefined ? initialValue : null,
  });

  const [localValue, setLocalValue] = useState<any>();

  function reset(e: any) {
    onChange({ ...e, target: { value: "" } });
    setLocalValue(undefined);
  }

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
      if (type && ["date_inline", "date"].includes(type)) {
        const parsedDate = dayjs(e).format("YYYY-MM-DD");

        return onChange(parsedDate);
      }

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
      {label ? (
        <div className="input-label">
          <label htmlFor={htmlNodeId}>
            {typeof translate === "function" && label
              ? translate(label)
              : label}
          </label>
        </div>
      ) : null}
      {domLoaded ? (
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
            data-media={media && media?.length > 0}
            className="media-container"
          >
            {media?.map((mediaItem: IBackendFile, index: number) => (
              <Image
                key={index}
                src={getFileUrl(mediaItem)}
                fill={true}
                alt=""
              />
            ))}
          </div>
          <Comp
            value={localValue !== undefined ? localValue : ""}
            /* @ts-ignore */
            options={{
              inline: type?.includes("inline"),
            }}
            onChange={(e) => {
              onChangeProxy(e);
            }}
            calendarIcon={<CalendarIcon {...props} />}
            yearPlaceholder={placeholder || ""}
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

function DeafultResetIcon() {
  return <XMarkIcon />;
}

function DefaultCalendarIcon(props: IInputProps) {
  if (props?.additionalMedia?.length) {
    return (
      <div className="icon-container">
        <Image src={getFileUrl(props.additionalMedia[0])} fill={true} alt="" />
      </div>
    );
  }

  return (
    <div className="icon-container">
      <CalendarIcon />
    </div>
  );
}
