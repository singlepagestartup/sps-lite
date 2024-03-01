"use client";

import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-crm-models-form-frontend-api";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import { Button } from "@sps/ui-adapter";
import { Component as Input } from "@sps/sps-crm-models-input-frontend-component";

export function Component(props: IComponentPropsExtended) {
  const [createFormRequest, { data }] = api.rtk.useSubmitMutation();

  const methods = useForm<any>({
    mode: "all",
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    if (data) {
      reset();
      // if (typeof props.successCallback === "function") {
      //   props.successCallback(data);
      // }
    }
  }, [data, reset]);

  async function onSubmit(data: any) {
    console.log(`🚀 ~ onSubmit ~ data:`, data);

    const preparedData: { inputs: any[] } = { inputs: [] };
    const preparedFiles: any = {};

    Object.keys(data).forEach((key, index) => {
      if (key === "files") {
        return;
      }

      const input = props.data.inputs?.find((input: any) => input.name === key);

      if (!input) {
        return;
      }

      if (input.variant === "file") {
        preparedData.inputs.push({
          key,
        });

        if (!data.files?.[key]) {
          return;
        }

        preparedFiles[`inputs[${index}].files`] = data.files[key];

        return;
      } else if (["listbox", "radio-group"].includes(input?.variant as any)) {
        if (!data[key]) {
          return;
        }

        if (Array.isArray(data[key])) {
          return preparedData.inputs.push({
            key,
            options: data[key].map((v: any) => {
              const sanitizedValue = v;
              delete sanitizedValue.id;
              return sanitizedValue;
            }),
          });
        } else {
          const sanitizedValue = data[key];
          delete sanitizedValue.id;

          return preparedData.inputs.push({
            key,
            option: sanitizedValue,
          });
        }
      } else if (input.variant === "date") {
        if (!data[key]) {
          return;
        }
        if (input.type === "date") {
          return preparedData.inputs.push({
            key,
            date_value: data[key],
          });
        } else if (input.type === "datetime-local") {
          return preparedData.inputs.push({
            key,
            datetime_value: data[key],
          });
        }
      } else if (input.variant === "switch") {
        return preparedData.inputs.push({
          key,
          is_true: data[key],
        });
      } else if (input.variant === "range") {
        if (!data[key]) {
          return;
        }

        if (Array.isArray(data[key])) {
          return preparedData.inputs.push({
            key,
            value: `${data[key][0]}`,
          });
        }
      }

      preparedData.inputs.push({
        key,
        value: data[key],
      });
    });

    createFormRequest({
      id: props.data.id,
      data: preparedData,
      files: preparedFiles,
    });
  }

  return (
    <div
      data-module="sps-crm"
      data-model="form"
      data-variant={props.variant}
      className={props.data.className || ""}
    >
      <div className="form-container">
        <FormProvider {...methods}>
          {props.data.inputs?.map((input: any, index: number) => {
            return (
              <Input
                key={index}
                data={input}
                variant={input?.variant}
                isServer={false}
              />
            );
          })}
          <div className="submit-button-container">
            <Button
              ui="sps"
              data-ui-variant="primary"
              className="w-full"
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </Button>
          </div>
        </FormProvider>
      </div>
    </div>
  );
}
