"use client";

import { useEffect, useMemo, useState } from "react";
// import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
import ReactCalendar from "react-calendar";
// import DatePicker from "react-date-picker";
// import DateRangePicker from "@wojtekmaj/react-daterange-picker";
// import DateTimePicker from "react-datetime-picker";
import { CalendarIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import Image from "next/image";
// import getFileUrl from "@sps/utils/get-file-url";
import dayjs from "dayjs";
import { Props } from "..";
import { useGetStringProps } from "../../use-get-string-props";

export default function CalendarInput(props: Props) {
  const { placeholder, type, className, options } = props;

  const [localValue, setLocalValue] = useState<any>();

  const stringProps = useGetStringProps(props);

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  function onChangeProxy(e: any) {
    // console.log("🚀 ~ onChangeProxy ~ e:", e);
    // if (typeof e === "object" && e !== null && e.length > 1) {
    //   if (type === "daterange_inline") {
    //     setLocalValue([e[0], e[1]]);
    //     return;
    //   } else if (type === "datetimerange_inline") {
    //     setLocalValue([e[0], e[1]]);
    //     return;
    //   }
    // } else {
    if (["date"].includes(type)) {
      setLocalValue(e);
      return;
    }
    // }
  }

  useEffect(() => {
    if (!props.onChange) {
      return;
    }

    if (Array.isArray(localValue)) {
      const parsedDate = localValue.map((date: any) =>
        dayjs(date).format("YYYY-MM-DD"),
      );
      // @ts-ignore
      props.onChange(parsedDate);
      return;
    } else {
      const parsedDate = dayjs(localValue).format("YYYY-MM-DD");
      // @ts-ignore
      props.onChange(parsedDate);
      return;
    }
  }, [localValue]);

  useEffect(() => {
    if (props.value) {
      // @ts-ignore
      const propsValue = new Date(props.value);

      if (propsValue !== localValue) {
        setLocalValue(propsValue);
      }
    }
  }, [props.value]);

  const Comp = useMemo(() => {
    // if (type === "daterange_inline") {
    //   return DateRangePicker;
    // } else if (type === "date_inline") {
    //   return DatePicker;
    // } else if (type === "datetime_inline") {
    //   return DateTimePicker;
    // } else if (type === "datetimerange_inline") {
    //   return DateTimeRangePicker;
    // }

    return ReactCalendar;
  }, [options]);

  return (
    <div
      {...stringProps}
      data-ui="input"
      data-ui-variant="calendar"
      className={className || ""}
    >
      {domLoaded ? (
        <div className="input-container">
          <Comp
            /* @ts-ignore */
            options={{
              inline: type?.includes("inline"),
            }}
            // yearPlaceholder={placeholder || ""}
            {...props}
            onChange={onChangeProxy}
            value={localValue !== undefined ? localValue : ""}
          />
        </div>
      ) : null}
    </div>
  );
}

function DeafultResetIcon() {
  return <XMarkIcon />;
}

function DefaultCalendarIcon(props: Props) {
  // if (props?.additionalMedia?.length) {
  //   return (
  //     <div className="icon-container">
  //       <Image src={getFileUrl(props.additionalMedia[0])} fill={true} alt="" />
  //     </div>
  //   );
  // }

  return (
    <div className="icon-container">
      <CalendarIcon />
    </div>
  );
}
