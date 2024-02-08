import type { Meta, StoryObj } from "@storybook/react";
import Root from "./index";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import { Props } from "..";

const meta = { component: Root } satisfies Meta<typeof Root>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Index: Story = {
  // render: (args) => <RepeatableInput {...args} />,
  render: (args) => <></>,
  args: {
    variant: "repeatable",
    name: "shipping",
    label: "Shipping information",
    inputs: [
      {
        variant: "text",
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
        variant: "text",
        name: "apartments",
        label: "Apartments",
        placeholder: "Place your apartments info",
      },
      {
        variant: "text",
        name: "phone",
        label: "Phone number",
        placeholder: "Place your phone number",
      },
    ],
  },
};

function RepeatableInput(args: Props) {
  const methods = useForm({ mode: "all" });

  const { watch } = methods;
  const watchData = watch();

  useEffect(() => {
    console.log("🚀 ~ RepeatableInput ~ watchData:", watchData);
  }, [JSON.stringify(watchData)]);

  return (
    <FormProvider {...methods}>
      <Root {...args} />
    </FormProvider>
  );
}
