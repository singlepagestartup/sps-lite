import type { Meta, StoryObj } from "@storybook/react";
import { entity } from "@sps/sps-crm-contracts/lib/models/input/mock/sps-lite";
import { Listbox as Root } from "./index";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import { IComponentProps, IComponentPropsExtended } from "../../interface";

const meta = { component: Root } satisfies Meta<typeof Root>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Index: Story = {
  render: (args) => <ListboxInput {...args} />,
  args: entity as any,
};

function ListboxInput(args: IComponentPropsExtended) {
  const methods = useForm({ mode: "all" });

  const { watch } = methods;
  const watchData = watch();

  useEffect(() => {
    console.log("🚀 ~ ListboxInput ~ watchData:", watchData);
  }, [JSON.stringify(watchData)]);

  return (
    <FormProvider {...methods}>
      <Root {...args} />
    </FormProvider>
  );
}
