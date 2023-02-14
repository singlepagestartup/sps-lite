import { createContext, useContext, useEffect, useMemo } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import * as R from "ramda";
import {
  useCreateUploaderMutation,
  useGetUploadersQuery,
} from "~redux/services/backend/models/uploader";
import Inputs from ".";
import { IInsideComponentProps } from "./repeatable";
import { ICity } from "types";

const UploaderContext = createContext<any>(null);

export default function FormExample() {
  const [update, { data: createData, error: createError }] =
    useCreateUploaderMutation();

  const { data: uploaders } = useGetUploadersQuery({});

  const lastUploader = useMemo(() => {
    if (!uploaders) {
      return;
    }

    return uploaders[uploaders.length - 1];
  }, [uploaders]);

  useEffect(() => {
    console.log(`🚀 ~ uploader ~ uploader`, lastUploader);
  }, [lastUploader]);

  const methods = useForm<any>({
    mode: `all`,
  });

  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = methods;

  const values = watch();

  useEffect(() => {
    console.log(`🚀 ~ form ~ values`, values);
  }, [JSON.stringify(values)]);

  async function onSubmit(data: any) {
    // console.log(`🚀 ~ onSubmit ~ data`, data);

    update({ data, files: data.files, id: lastUploader.id });
  }

  useEffect(() => {
    if (createData) {
      console.log(`🚀 ~ useEffect ~ createData`, createData);
    }
  }, [createData]);

  return (
    <UploaderContext.Provider value={lastUploader}>
      <FormProvider {...methods}>
        <div className="flex flex-col gap-4 mb-4">
          <Inputs
            component="repeatable"
            label="Delivery"
            initialValue={lastUploader?.delivery}
            // rules={{
            //   validate: (props: any) => {
            //     if (!props || props.length < 2) {
            //       return `wrong`;
            //     }
            //   },
            // }}
            name="delivery"
            inputs={[
              {
                component: `text`,
                label: `Name`,
                name: `name`,
                // initialValue: me.username,
                rules: {
                  // required: {
                  //   value: true,
                  //   message: `Required field`,
                  // },
                },
              },
              {
                component: `text`,
                label: `Email`,
                name: `email`,
                rules: {
                  // required: {
                  //   value: true,
                  //   message: `Required field`,
                  // },
                },
              },
              {
                component: `file`,
                name: `cover`,
                label: `Cover`,
                placeholder: `Select image`,
                // rules: {
                //   required: {
                //     value: true,
                //     message: `Required field`,
                //   },
                // },
              },
              {
                component: `file`,
                name: `images`,
                label: `Images`,
                multiple: true,
                placeholder: `Select images`,
                rules: {
                  required: {
                    value: true,
                    message: `Required field`,
                  },
                },
              },
              {
                component: `repeatable`,
                name: `address`,
                label: `Address`,
                className: `form__example__address__input`,
                rules: {
                  // required: {
                  //   value: true,
                  //   message: `Required field`,
                  // },
                },
                inputs: [
                  {
                    component: `text`,
                    label: `Street`,
                    name: `street`,
                    className: `col-span-2`,
                    rules: {
                      // required: {
                      //   value: true,
                      //   message: `Required field`,
                      // },
                    },
                  },
                  {
                    component: `repeatable`,
                    name: `phone`,
                    label: `Phone`,
                    className: `form__example__phone__input`,
                    inputs: [
                      {
                        component: `text`,
                        label: `Phone Number`,
                        name: `number`,
                        initialValue: `+79994444444`,
                        className: `form__example__phone__number__input`,
                        rules: {
                          required: {
                            value: true,
                            message: `Required field`,
                          },
                        },
                      },
                    ],
                  },
                ],
                InsideComponent: InsideComponent,
              },
            ]}
          />

          <Inputs
            component="text"
            name="surname"
            label="Surame"
            className="zalupa__input"
            initialValue={lastUploader?.surname}
            // rules={{
            //   required: {
            //     value: true,
            //     message: `Required field`,
            //   },
            // }}
          />

          <Inputs
            component="text"
            type="password"
            name="passphrase"
            label="Passphase"
            initialValue={lastUploader?.passphrase}
            // rules={{
            //   required: {
            //     value: true,
            //     message: `Required field`,
            //   },
            // }}
          />

          <Inputs
            component="switch"
            name="is_active"
            label="Activate account"
            initialValue={lastUploader?.isActive}
            // rules={{
            //   required: {
            //     value: true,
            //     message: `Required field`,
            //   },
            // }}
          />

          <Inputs
            component="radio-group"
            name="status"
            label="Status"
            initialValue={`need_updates`}
            options={[`verified`, `need_updates`, `blocked`]}
            placeholder="Select status"
            by={undefined}
            // initialValue={true}
            // rules={{
            //   required: {
            //     value: true,
            //     message: `Required field`,
            //   },
            // }}
          />

          <Inputs
            component="file"
            name="cover"
            type="file"
            label="Cover"
            placeholder="Select file"
            initialValue={lastUploader?.cover}
            // rules={{
            //   required: {
            //     value: true,
            //     message: `Required field`,
            //   },
            // }}
          />

          <Inputs
            component="file"
            type="file"
            name="images"
            label="Images"
            placeholder="Select files"
            multiple={true}
            initialValue={lastUploader?.images}
            // rules={{
            //   required: {
            //     value: true,
            //     message: `Required field`,
            //   },
            // }}
          />
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          className="w-full rounded-md border border-transparent bg-primary-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          Send
        </button>
      </FormProvider>
    </UploaderContext.Provider>
  );
}

function InsideComponent(props: IInsideComponentProps) {
  const currentUploader = useContext(UploaderContext);
  const { parentKey, baseKey, fieldIndex } = props;
  const methods = useFormContext();
  const { watch } = methods;
  const watchData = watch();

  const fieldKey = useMemo(() => {
    return `${parentKey}.${baseKey}[${fieldIndex}]`;
  }, [baseKey, fieldIndex]);

  const selectedCity = useMemo(() => {
    const parentPath = parentKey
      ?.split(`[`)
      .map((key) => key.replace(`]`, ``))
      .flat(1);

    parentPath?.push(baseKey);
    parentPath?.push(`${fieldIndex}`);
    parentPath?.push(`city`);
    if (parentPath?.length) {
      return R.path(parentPath, watchData) as ICity;
    }
  }, [watchData]);

  return (
    <div className="col-span-4 py-2 w-full px-3 border rounded-md bg-white">
      <div className="mb-3">
        {selectedCity?.title ? (
          <p>Selected city name: {selectedCity?.title}</p>
        ) : (
          <p>City isn't selected</p>
        )}
        {currentUploader ? <p>Uploader ID is: {currentUploader?.id}</p> : null}
      </div>
      {selectedCity?.title ? (
        <Inputs
          component="text"
          label="Postal code"
          placeholder="Type postal code"
          name={`${fieldKey}.postal_code`}
          rules={{
            required: {
              value: true,
              message: `Required field`,
            },
          }}
        />
      ) : null}
    </div>
  );
}
