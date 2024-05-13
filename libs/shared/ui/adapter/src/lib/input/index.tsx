"use client";

import React, {
  ChangeEvent,
  FC,
  HTMLInputTypeAttribute,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
// import type { IModel as IBackendFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";
import { useController, useFormContext } from "react-hook-form";
// import { useTranslations } from "@sps/hooks";
import useGetFilteredInputProps from "./use-get-filtered-input-props";
import { downloadBackendUploadFile } from "@sps/shared-frontend-utils-client";
import TextInput from "./text";
import RadioInput from "./radio-group";
import SelectInput from "./select";
import RangeInput from "./range";
import CheckboxInput from "./checkbox";
import DateInput from "./date";
import FileInput from "./file";

type IBackendFile = any;

const inputs: {
  [key in HTMLInputTypeAttribute]+?: React.FC<any>;
} = {
  text: TextInput,
  number: TextInput,
  radio: RadioInput,
  select: SelectInput,
  range: RangeInput,
  checkbox: CheckboxInput,
  date: DateInput,
};

export interface Props {
  type: keyof typeof inputs;
  label?: string;
  name: string;
  placeholder?: string;
  defaultValue?: any;
  disabled?: boolean;
  media?: IBackendFile[] | null;
  additionalMedia?: IBackendFile[] | null;
  extraMedia?: IBackendFile[] | null;
  className?: string;
  rules?: any;
  initialValue?: any;
  valueAsNumber?: boolean;
  step?: number;
  min?: number;
  max?: number;
  multiple?: boolean;
  ui: "sps" | "shadcn";
  options?: any;
  by?: any;
  renderOptionValue?: (option: any) => string;
  htmlNodeId?: string;
  OptionComp?: FC<any>;
}

type RequiredInputProps = Props & {
  ui: "sps" | "shadcn";
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, ...props: any) => void;
  id: string;
  onBlur: () => void;
  "data-ui": "input";
  value: any;
  placeholder?: string;
  setLocalRef?: any;
};

export type ExtendedInputProps<T> = RequiredInputProps &
  (T extends "select" | "radio"
    ? { options: any; by: string }
    : { options?: any });

export const Input = forwardRef<HTMLInputElement, Props>((props, passedRef) => {
  const {
    label,
    name,
    rules,
    placeholder,
    initialValue,
    type = "text",
    valueAsNumber,
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [localRef, setLocalRef] = useState<any | null>(null);
  const translate: any = null;
  const [isClient, setIsClient] = useState(false);

  const translatedLabel: string = useMemo(() => {
    return typeof translate === "function" && label ? translate(label) : label;
  }, [label, translate]);

  const translatedPlaceholder: string = useMemo(() => {
    return typeof translate === "function" && placeholder
      ? translate(placeholder)
      : placeholder;
  }, [placeholder, translate]);

  const additionalAttributes: Pick<Props, "step" | "min" | "max" | "multiple"> =
    useMemo(() => {
      return {
        step: props.step,
        min: props.min,
        max: props.max,
        multiple: props.multiple,
      };
    }, [props]);

  const ctxProps = useFormContext();
  const { control, setValue } = ctxProps;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  const getDefaultValue = (props: Props) => {
    if (["select", "radio"].includes(props.type)) {
      if (props.multiple) {
        return [];
      }

      return "";
    }

    if (props.type === "range") {
      return [props.min || 0];
    }

    return "";
  };

  const {
    field: { onChange, ref, value, onBlur },
  } = useController({
    name,
    control,
    rules,
    defaultValue: getDefaultValue(props),
  });

  const htmlNodeId: string | undefined = useMemo(() => {
    if (props.htmlNodeId) {
      return props.htmlNodeId;
    }

    return (
      name.replace(/\[/g, "_").replace(/\]/g, "_").replace(/\./g, "_") +
      `${Math.random().toString(36).substring(7)}`
    );
  }, [name, props]);

  async function setInitFiles(initialValue: any) {
    // second and other rerenders in repeatable
    if (typeof initialValue === "string") {
      return;
    }

    if (!localRef?.current?.files || Object.keys(initialValue).length === 0) {
      return;
    }

    const dataTransfer = new DataTransfer();
    const initialFiles: File[] = [];

    if (Array.isArray(initialValue)) {
      for (const serverFile of initialValue) {
        const file = await downloadBackendUploadFile(serverFile);

        dataTransfer.items.add(file);
        initialFiles.push(file);
      }
    } else {
      const file = await downloadBackendUploadFile(initialValue);

      dataTransfer.items.add(file);
      initialFiles.push(file);
    }

    localRef.current.files = dataTransfer.files;
    const evt = new InputEvent("change");
    localRef.current.dispatchEvent(evt);
    onChange(evt);
  }

  useEffect(() => {
    if (["text", "range"].includes(type)) {
      if (initialValue !== undefined && localRef?.current) {
        const evt = new Event("change");
        localRef.current.value = initialValue;
        localRef.current.dispatchEvent(evt);
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
    } else if (["select", "radio"].includes(type)) {
      if (initialValue !== undefined && localRef?.current) {
        const evt = new Event("change");
        localRef.current.value = initialValue;
        localRef.current.dispatchEvent(evt);
        onChange(evt);
      }
    } else if (["checkbox"].includes(type)) {
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
    } else if (["date"].includes(type)) {
      setValue(name, initialValue);
    } else if (["file"].includes(type)) {
      if (initialValue && localRef?.current) {
        setInitFiles(initialValue);
      }
    }
  }, [name, JSON.stringify(initialValue), inputRef, localRef]);

  /**
   * If using in repeatable component
   * useForm set {} as value of input
   * and validation required skips that
   * fiels.
   */
  useEffect(() => {
    if (
      ["select", "radio"].includes(props.type) &&
      JSON.stringify(value) === "{}"
    ) {
      setValue(name, undefined);
    }
  }, [JSON.stringify(value)]);

  const passProps = useGetFilteredInputProps(props);

  function onFileInputChange(e: ChangeEvent | Event, files: File[]) {
    const uploadFiles = ctxProps.getValues("files");

    ctxProps.setValue("files", {
      ...uploadFiles,
      [name]: files,
    });

    onChange(e);
  }

  const passedOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ...props: any
  ) => {
    if (valueAsNumber) {
      onChange(+e.target.value);
      return;
    }

    if (type === "file") {
      onFileInputChange(e, props[0]);
      return;
    }

    onChange(e);
  };

  const toComponentProps: ExtendedInputProps<keyof typeof inputs> = {
    ...passProps,
    "data-ui": "input",
    ui: props.ui,
    label: translatedLabel,
    onChange: passedOnChange,
    id: htmlNodeId,
    onBlur: onBlur,
    value: value ?? "",
    placeholder: translatedPlaceholder,
    ...additionalAttributes,
  };

  if (!isClient) {
    return <></>;
  }

  if (props.type === "text") {
    return (
      <TextInput
        {...toComponentProps}
        ref={inputRef}
        setLocalRef={setLocalRef}
      />
    );
  }

  if (props.type === "select") {
    return (
      <SelectInput
        {...toComponentProps}
        ref={inputRef}
        options={props.options ?? []}
        by={props.by ?? "title"}
        renderOptionValue={props.renderOptionValue}
        setLocalRef={setLocalRef}
      />
    );
  }

  if (props.type === "range") {
    return <RangeInput {...toComponentProps} ref={inputRef} />;
  }

  if (props.type === "radio") {
    return (
      <RadioInput
        {...toComponentProps}
        ref={inputRef}
        options={props.options ?? []}
        by={props.by ?? "title"}
        OptionComp={props.OptionComp}
        renderOptionValue={props.renderOptionValue}
        setLocalRef={setLocalRef}
      />
    );
  }

  if (props.type === "checkbox") {
    return <CheckboxInput {...toComponentProps} ref={inputRef} />;
  }

  if (props.type === "date") {
    return <DateInput {...toComponentProps} ref={inputRef} />;
  }

  if (props.type === "file") {
    return (
      <FileInput
        {...toComponentProps}
        ref={inputRef}
        setLocalRef={setLocalRef}
      />
    );
  }

  // return (
  //   <Comp
  //     {...passProps}
  //     data-ui="input"
  //     type={props.type}
  //     valueAsNumber={props.valueAsNumber}
  //     disabled={disabled}
  //     label={translatedLabel}
  //     onChange={passedOnChange}
  //     id={htmlNodeId}
  //     onBlur={onBlur}
  //     value={value ?? ""}
  //     // ref={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //     //   if (e) {
  //     //     ref(e);
  //     //     inputRef.current = e;
  //     //   }
  //     // }}
  //     placeholder={translatedPlaceholder}
  //     {...additionalAttributes}
  //   />
  // );
});

export default Input;
