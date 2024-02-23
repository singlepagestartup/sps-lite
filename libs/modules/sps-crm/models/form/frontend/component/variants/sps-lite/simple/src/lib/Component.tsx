"use client";

import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-crm-models-form-frontend-api";
import { useGetPreparedFormInputs } from "./use-get-prepared-form-inputs";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import { Button, Input as UiInput } from "@sps/ui-adapter";
import { Component as Input } from "@sps/sps-crm-models-input-frontend-component";

export function Component(props: IComponentPropsExtended) {
  const [createFormRequest, { data }] = api.client.useSubmitMutation();
  const preparedInputs = useGetPreparedFormInputs(props.data);

  const methods = useForm<any>({
    mode: "all",
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = methods;

  const watchData = watch();

  useEffect(() => {
    // console.log("🚀 ~ Simple ~ watchData", watchData);
  }, [watchData]);

  useEffect(() => {
    if (data) {
      reset();

      // if (typeof props.successCallback === "function") {
      //   props.successCallback(data);
      // }
    }
  }, [data, reset]);

  async function onSubmit(data: any) {
    console.log("🚀 ~ onSubmit ~ data", data);

    createFormRequest({ id: props.data.id, data, files: data.files });
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
          {preparedInputs?.map((input: any, index: number) => {
            return (
              <Input
                data={{ ...input.input, name: input.inputName }}
                variant={input.input?.variant || "text"}
                isServer={false}
                key={index}
              />
            );
          })}

          {preparedInputs?.map((input: any, index: number) => {
            return (
              <UiInput
                __component="elements.input"
                id={0}
                isServer={false}
                placeholder={null}
                value={null}
                label={null}
                multiple={null}
                min={null}
                max={null}
                step={null}
                {...input}
                key={index}
                ui="sps"
                variant="text"
                type="text"
                name={`inputs[${index}].key`}
                initialValue={input.input.name}
                by="id"
                className="!hidden"
                isRequired={true}
              />
            );
          })}

          {/* <FormField
            ui="sps"
            variant="radio-group"
            type="select"
            name="form"
            initialValue={props}
            options={[props]}
            className="hidden"
            by="id"
          /> */}
          <div className="submit-button-container">
            {/* {props.button ? (
              <Button
                ui="shadcn"
                className={props.button.className || ""}
                variant={"secondary"}
                onClick={handleSubmit(onSubmit)}
              >
                {props.button?.title || "Submit"}
              </Button>
            ) : ( */}
            <Button
              ui="shadcn"
              variant={"secondary"}
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </Button>
            {/* )} */}
          </div>
        </FormProvider>
      </div>
    </div>
  );
}
