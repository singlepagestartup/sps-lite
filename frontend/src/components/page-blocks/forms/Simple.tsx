import { IForms } from ".";
import ReactMarkdown from "react-markdown";
import { useCreateFormRequestMutation } from "~redux/services/backend/models/form-requests";
import { useEffect, useMemo } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import Inputs from "~components/inputs";
import Buttons from "~components/buttons";

export default function Simple(props: IForms) {
  const [createFormRequest, { data }] = useCreateFormRequestMutation();
  const additionalAttributes = useMemo(() => {
    if (props?.anchor) {
      return {
        id: props.anchor,
      };
    }

    return {};
  }, [props]);

  const methods = useForm<any>({
    mode: `all`,
  });

  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = methods;

  const watchData = watch();

  useEffect(() => {
    // console.log(`🚀 ~ Simple ~ watchData`, watchData);
  }, [watchData]);

  useEffect(() => {
    if (data) {
      reset();
    }
  }, [data, reset]);

  async function onSubmit(data: any) {
    // console.log(`🚀 ~ onSubmit ~ data`, data);
    // const componentsData = prepareDataForComponent({
    //   data,
    //   inputs: props.form.inputs,
    // });

    // const passData = {
    //   inputs: componentsData,
    // };

    // console.log(`🚀 ~ onSubmit ~ setDataToComponent ~ res`, res);

    createFormRequest({ data, files: data.files });
  }

  return (
    <div
      className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24"
      {...additionalAttributes}
    >
      <div className="relative mx-auto max-w-xl">
        <svg
          className="absolute left-full translate-x-1/2 transform"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <svg
          className="absolute right-full bottom-0 -translate-x-1/2 transform"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {props.form?.title}
          </h2>
          {props?.form?.description ? (
            <ReactMarkdown className="mt-4 text-lg leading-6 text-gray-500">
              {props.form.description}
            </ReactMarkdown>
          ) : null}
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-2 gap-3">
            <FormProvider {...methods}>
              {props.form?.inputs?.map((input: any, index: number) => {
                let inputName = input.name;
                let isFile = false;

                if ([`listbox`, `radio-group`].includes(input.component)) {
                  inputName = input.multiple
                    ? `inputs[${index}].options`
                    : `inputs[${index}].option`;
                } else if ([`switch`].includes(input.component)) {
                  inputName = `inputs[${index}].is_true`;
                } else if ([`file`].includes(input.component)) {
                  inputName = `inputs[${index}].files`;
                  isFile = true;
                } else {
                  inputName = `inputs[${index}].value`;
                }

                return (
                  <div key={index} className="col-span-2">
                    <Inputs
                      {...input}
                      options={input.options?.map((option: any) => {
                        const passOption = { ...option };
                        delete passOption.id;

                        return passOption;
                      })}
                      name={inputName}
                      defaultValue=""
                      by="title"
                      rules={{
                        required: {
                          value: input.isRequired,
                          message: `Required field`,
                        },
                      }}
                    />
                    <Inputs
                      {...input}
                      component="text"
                      type="text"
                      name={`inputs[${index}].key`}
                      initialValue={input.name}
                      defaultValue=""
                      by="id"
                      className="hidden"
                      rules={{
                        required: {
                          value: input.isRequired,
                          message: `Required field`,
                        },
                      }}
                    />
                  </div>
                );
              })}
              <Inputs
                component="radio-group"
                name="form"
                initialValue={props.form}
                options={[props.form]}
                className="hidden"
                by="id"
              />
              <div className="sm:col-span-2">
                <Buttons
                  _Component="elements.button"
                  variant={props.form.button?.variant || `default`}
                  onClick={handleSubmit(onSubmit)}
                  title={props.form.button?.title || `Submit`}
                />
              </div>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
