"use client";

import { FC, HTMLInputTypeAttribute, useMemo } from "react";
import { Label } from "../label";
import { getFileUrl, cn } from "@sps/utils";
import { Input } from "../input";
import { useController, useFormContext } from "react-hook-form";
import { getInputErrors } from "../input/get-input-errors";
// import { useTranslations } from "@sps/hooks";
import { Button } from "../button";
import Image from "next/image";
import type { IModel as IBackendFile } from "@sps/sps-file-storage-contracts/lib/models/file/interfaces";

export interface Props {
  label?: string | null;
  name: string;
  className?: string | null;
  ResetIcon?: FC<any>;
  ui: "sps" | "shadcn";
  media?: IBackendFile[] | null;
  additionalMedia?: IBackendFile[] | null;
  type: HTMLInputTypeAttribute;
  multiple?: boolean | null;
  min?: number | null;
  max?: number | null;
  step?: number | null;
  placeholder?: string | null;
  initialValue?: any;
  options?: any[];
}

export const FormField = (props: Props) => {
  const { label, name, className, ResetIcon } = props;

  const translate: any = null;

  const htmlNodeId = useMemo(() => {
    return name.replace(/\[/g, "_").replace(/\]/g, "_").replace(/\./g, "_");
  }, [name]);

  const {
    control,
    formState: { errors },
  } = useFormContext();
  const {
    field: { onChange },
  } = useController({
    name,
    control,
  });

  function reset(e: any) {
    if (props.multiple) {
      onChange({ ...e, target: { value: [] } });
    } else if (props.type === "number") {
      onChange({ ...e, target: { value: props.min || 0 } });
    } else if (props.type === "range") {
      onChange({ ...e, target: { value: [props.min] || [0] } });
    } else {
      onChange({ ...e, target: { value: "" } });
    }
  }

  const error = getInputErrors(errors)(name);

  return (
    <div data-ui="form-field" className={cn("relative w-full", className)}>
      {htmlNodeId && label && props.type !== "checkbox" ? (
        <Label htmlFor={htmlNodeId}>{props.label}</Label>
      ) : null}
      <div className="reset-button-container">
        <Button
          ui="shadcn"
          onClick={reset}
          variant="reset"
          size="sm"
          className="px-0"
        >
          {ResetIcon ? (
            <div className="icon">
              <ResetIcon className="w-4 h-5" />
            </div>
          ) : null}
          {typeof translate === "function" ? translate("Reset") : "Reset"}
        </Button>
      </div>
      <div
        data-media={props.media && props.media?.length > 0}
        className="media-container !hidden"
      >
        {props.media?.map((media, index: number) => (
          <Image key={index} src={getFileUrl(media)} fill={true} alt="" />
        ))}
      </div>
      <Input
        {...props}
        label={props.label ?? undefined}
        placeholder={props.placeholder ?? undefined}
        className={props.className ?? undefined}
        step={props.step ?? undefined}
        min={props.min ?? undefined}
        max={props.max ?? undefined}
        multiple={props.multiple ?? undefined}
      />
      <div
        data-media={props.additionalMedia && props.additionalMedia?.length > 0}
        className="additional-media-container !hidden"
      >
        {props.additionalMedia?.map((additionalMedia, index: number) => (
          <Image
            key={index}
            src={getFileUrl(additionalMedia)}
            fill={true}
            alt=""
          />
        ))}
      </div>
      {error ? (
        <div className="input-error">
          <p>
            {typeof translate === "function"
              ? translate(error.message)
              : error.message}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default FormField;
