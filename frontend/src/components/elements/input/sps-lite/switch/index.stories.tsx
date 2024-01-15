import type { Meta, StoryObj } from "@storybook/react";
import { entity } from "~redux/services/backend/components/elements/input/mock/sps-lite";
import Root from "./index";
import { IElement } from "../..";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

const meta = { component: Root } satisfies Meta<typeof Root>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Index: Story = {
  render: (args) => <SwitchInput {...args} />,
  args: entity,
};

function SwitchInput(args: IElement) {
  const methods = useForm({ mode: "all" });

  const { watch } = methods;
  const watchData = watch();

  useEffect(() => {
    console.log("🚀 ~ SwitchInput ~ watchData:", watchData);
  }, [JSON.stringify(watchData)]);

  return (
    <FormProvider {...methods}>
      <Root {...args} />
    </FormProvider>
  );
}
