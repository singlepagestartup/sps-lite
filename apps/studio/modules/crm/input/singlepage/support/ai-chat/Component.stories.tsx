import { Component as CrmModuleInput } from "../../..";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
function Example() {
  const [value, setValue] = useState("");
  return (
    <CrmModuleInput
      variant="support-ai-chat"
      name="details"
      label="What happened?"
      placeholder="Describe what you tried."
      value={value}
      onChange={setValue}
    />
  );
}
const meta = {
  id: "modules-crm-models-input-singlepage-support-ai-chat",
  title: "Modules/CRM/Input/Singlepage/support/ai-chat",
  component: Example,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
