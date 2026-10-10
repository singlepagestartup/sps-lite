import type { Meta, StoryObj } from "@storybook/react";
import { Component as RbacModuleSubject } from "../../../../index";
import type { IEthereumVirtualMachineProps } from "./Component";
function Example(props: IEthereumVirtualMachineProps) {
  return (
    <RbacModuleSubject
      {...props}
      key={props.initialState}
      variant="authentication-ethereum-virtual-machine-default"
    />
  );
}
const meta = {
  id: "modules-rbac-models-subject-singlepage-authentication-ethereum-virtual-machine-default",
  title:
    "Modules/Rbac/Models/Subject/Singlepage/authentication/ethereum-virtual-machine/default",
  component: Example,
  args: { initialState: "idle" },
  argTypes: {
    initialState: {
      control: "select",
      options: ["idle", "authorize", "complete", "error"],
    },
  },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
