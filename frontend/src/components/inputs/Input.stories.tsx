import type { Meta } from "@storybook/react";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Inputs from ".";

const meta = {
  component: Inputs,
} satisfies Meta<typeof Inputs>;

export default meta;

export const File = {
  render: () => <FileInput />,
};

export const Listbox = {
  render: () => <ListboxInput />,
};

export const RadioGroup = {
  render: () => <RadioGroupInput />,
};

export const Range = {
  render: () => <RangeInput />,
};

export const Repeatable = {
  render: () => <RepeatableInput />,
};

export const Switch = {
  render: () => <SwitchInput />,
};

export const Text = {
  render: () => <TextInput />,
};

function FileInput() {
  const methods = useForm({ mode: "all" });

  const { watch } = methods;
  const watchData = watch();

  useEffect(() => {
    console.log("🚀 ~ FileInput ~ watchData:", watchData);
  }, [JSON.stringify(watchData)]);

  return (
    <FormProvider {...methods}>
      <Inputs
        component="file"
        name="cover"
        label="Cover"
        multiple={false}
        placeholder="Select cover for your account"
      />
    </FormProvider>
  );
}

function ListboxInput() {
  const methods = useForm({ mode: "all" });

  const { watch } = methods;
  const watchData = watch();

  useEffect(() => {
    console.log("🚀 ~ ListboxInput ~ watchData:", watchData);
  }, [JSON.stringify(watchData)]);

  return (
    <FormProvider {...methods}>
      <Inputs
        component="listbox"
        name="category"
        label="Category"
        by="id"
        options={[
          {
            id: 1,
            title: "Lite version",
          },
          {
            id: 2,
            title: "Pro version",
          },
        ]}
        placeholder="Select category"
      />
    </FormProvider>
  );
}

function RadioGroupInput() {
  const methods = useForm({ mode: "all" });

  const { watch } = methods;
  const watchData = watch();

  useEffect(() => {
    console.log("🚀 ~ RadioGroupInput ~ watchData:", watchData);
  }, [JSON.stringify(watchData)]);

  return (
    <FormProvider {...methods}>
      <Inputs
        component="radio-group"
        name="category"
        label="Category"
        by="id"
        options={[
          {
            id: 1,
            title: "Lite version",
          },
          {
            id: 2,
            title: "Pro version",
          },
        ]}
        placeholder="Select category"
      />
    </FormProvider>
  );
}

function RangeInput() {
  const methods = useForm({ mode: "all" });

  const { watch } = methods;
  const watchData = watch();

  useEffect(() => {
    console.log("🚀 ~ RangeInput ~ watchData:", watchData);
  }, [JSON.stringify(watchData)]);

  return (
    <FormProvider {...methods}>
      <Inputs
        component="range"
        name="price"
        label="Price"
        min={0}
        max={100}
        step={5}
      />
    </FormProvider>
  );
}

function RepeatableInput() {
  const methods = useForm({ mode: "all" });

  const { watch } = methods;
  const watchData = watch();

  useEffect(() => {
    console.log("🚀 ~ RepeatableInput ~ watchData:", watchData);
  }, [JSON.stringify(watchData)]);

  return (
    <FormProvider {...methods}>
      <Inputs
        component="repeatable"
        name="shipping"
        label="Shipping information"
        inputs={[
          {
            component: "text",
            name: "address",
            label: "Address",
            placeholder: "Place your address",
            rules: {
              required: {
                value: true,
                message: "Required field",
              },
            },
          },
          {
            component: "text",
            name: "apartments",
            label: "Apartments",
            placeholder: "Place your apartments info",
          },
          {
            component: "text",
            name: "phone",
            label: "Phone number",
            placeholder: "Place your phone number",
          },
        ]}
      />
    </FormProvider>
  );
}

function SwitchInput() {
  const methods = useForm({ mode: "all" });

  const { watch } = methods;
  const watchData = watch();

  useEffect(() => {
    console.log("🚀 ~ SwitchInput ~ watchData:", watchData);
  }, [JSON.stringify(watchData)]);

  return (
    <FormProvider {...methods}>
      <Inputs
        component="switch"
        name="terms"
        label="I agree with Terms & Conditions"
      />
    </FormProvider>
  );
}

function TextInput() {
  const methods = useForm({ mode: "all" });

  const { watch } = methods;
  const watchData = watch();

  useEffect(() => {
    console.log("🚀 ~ TextInput ~ watchData:", watchData);
  }, [JSON.stringify(watchData)]);

  return (
    <FormProvider {...methods}>
      <Inputs
        component="text"
        name="username"
        label="Username"
        placeholder="Place your username"
      />
    </FormProvider>
  );
}
