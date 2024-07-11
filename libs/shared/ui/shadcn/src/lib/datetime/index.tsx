"use client";

import React, { ComponentProps, forwardRef, useEffect, useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@sps/shared-frontend-client-utils";
import { Calendar } from "../calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../input-otp";
import dayjs from "dayjs";

type DateTimePickerProps = ComponentProps<typeof Calendar> & {
  value: string;
  placeholder?: string;
  className?: string;
  onChange: (value: string) => void;
};

export const DateTimePicker = forwardRef<HTMLInputElement, DateTimePickerProps>(
  (props, ref) => {
    const [localValue, setLocalValue] = useState<Date | undefined>(
      props.value && props.value !== "" ? new Date(props.value) : undefined,
    );
    const [hour, setHour] = useState<string>("00");
    const [minute, setMinute] = useState<string>("00");

    function onChange(event: Date | undefined) {
      if (!event) {
        return;
      }

      if (!hour) {
        setHour(dayjs(event).format("HH"));
      }

      if (!minute) {
        setMinute(dayjs(event).format("mm"));
      }

      setLocalValue(event);
    }

    function getSanitizedValue({
      type,
      value,
    }: {
      type: "hour" | "minute";
      value: string;
    }) {
      if (type === "hour") {
        if (Number(hour) > 23 || Number(hour) < 0) {
          return;
        }
      } else if (type === "minute") {
        if (Number(minute) > 59 || Number(minute) < 0) {
          return;
        }
      }

      if (value.length === 0) {
        return "00";
      }

      if (Number(value) < 0) {
        return "00";
      }

      if (Number(value) < 10) {
        return `0${Number(value)}`;
      }

      return value;
    }

    useEffect(() => {
      if (!localValue) {
        return;
      }
      const sanitizedHour = getSanitizedValue({ type: "hour", value: hour });
      const sanitizedMinute = getSanitizedValue({
        type: "minute",
        value: minute,
      });

      const newIsoValue = new Date(
        `${dayjs(localValue).format("YYYY-MM-DD")}T${sanitizedHour}:${sanitizedMinute}:00`,
      );

      const isValid = !isNaN(newIsoValue.getTime());

      if (!isValid) {
        return;
      }

      if (newIsoValue.getTime() === localValue.getTime()) {
        return;
      }

      setLocalValue(newIsoValue);
    }, [hour, minute, localValue]);

    useEffect(() => {
      if (!localValue) {
        return;
      }

      const sanitizedHour = getSanitizedValue({ type: "hour", value: hour });
      const sanitizedMinute = getSanitizedValue({
        type: "minute",
        value: minute,
      });

      const date = new Date(
        `${dayjs(localValue).format("YYYY-MM-DD")}T${sanitizedHour}:${sanitizedMinute}:00`,
      );

      const isValid = !isNaN(date.getTime());

      if (!isValid) {
        return;
      }

      const isoValue = dayjs(date).format("YYYY-MM-DDTHH:mm:ss");

      if (isoValue === props.value) {
        return;
      }

      props.onChange(dayjs(date).toISOString());
    }, [localValue]);

    useEffect(() => {
      const isValid = dayjs(props.value).isValid();
      if (!isValid) {
        return;
      }

      setHour(dayjs(props.value).format("HH"));
      setMinute(dayjs(props.value).format("mm"));
    }, [props.value]);

    return (
      <Popover>
        <PopoverTrigger
          className={cn(
            "flex items-center h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            props.className,
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {(dayjs(props.value).isValid() &&
            dayjs(props.value).format("DD/MM/YYYY HH:mm")) || (
            <span className="text-muted-foreground">
              {props.placeholder || "Select date and time"}
            </span>
          )}
        </PopoverTrigger>
        <PopoverContent className="w-auto p-3">
          <Calendar mode="single" selected={localValue} onDayClick={onChange} />
          <div className="flex items-center gap-3">
            <InputOTP
              maxLength={2}
              value={hour}
              onChange={(value) => setHour(value)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
              </InputOTPGroup>
            </InputOTP>
            <InputOTP
              maxLength={2}
              value={minute}
              onChange={(value) => setMinute(value)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
);
