import { api as formRequestApi } from "@sps/sps-crm-frontend/lib/redux/entities/form-request/api";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "~components/elements/input";
import useGetPreparedFormInputs from "~hooks/use-get-prepared-form-inputs";
import { IForm } from "../..";
import { Button } from "@sps/ui";

export default function Simple(props: IForm) {
  const [createFormRequest, { data }] = formRequestApi.useCreateMutation();
  const preparedInputs = useGetPreparedFormInputs(props);

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

      if (typeof props.successCallback === "function") {
        props.successCallback(data);
      }
    }
  }, [data, reset]);

  async function onSubmit(data: any) {
    console.log("🚀 ~ onSubmit ~ data", data);

    createFormRequest({ data, files: data.files });
  }

  return (
    <div
      data-collection-type="form"
      data-variant={props.variant}
      className={props.className || ""}
    >
      <div className="form-container">
        <FormProvider {...methods}>
          {preparedInputs?.map((input, index: number) => {
            return (
              <Input
                {...input.input}
                key={index}
                options={input.options}
                name={input.inputName}
                className={input.input?.className || ""}
                by={input.input?.by || undefined}
                rules={{
                  required: {
                    value: input.input?.isRequired,
                    message: "Required field",
                  },
                }}
              />
            );
          })}

          {preparedInputs?.map((input, index: number) => {
            return (
              <Input
                __component="elements.input"
                id={0}
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
            {props.button ? (
              <Button
                ui="shadcn"
                className={props.button.className || ""}
                variant={"secondary"}
                onClick={handleSubmit(onSubmit)}
              >
                {props.button?.title || "Submit"}
              </Button>
            ) : (
              <Button
                ui="shadcn"
                variant={"secondary"}
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </Button>
            )}
          </div>
        </FormProvider>
      </div>
    </div>
  );
}
