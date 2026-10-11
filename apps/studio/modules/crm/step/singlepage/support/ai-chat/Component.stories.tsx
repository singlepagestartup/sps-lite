import { Component as CrmModuleStep } from "../../..";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import copy from "../../../../form/singlepage/support/ai-chat/content.json";
function Example() {
  const [values, setValues] = useState({ topic: "", details: "", result: "" });
  return (
    <CrmModuleStep
      variant="support-ai-chat"
      id="support-story"
      values={values}
      onChange={(field, value) =>
        setValues((current) => ({ ...current, [field]: value }))
      }
      fields={copy.fields}
      topics={copy.topics}
    />
  );
}
const meta = {
  id: "modules-crm-models-step-singlepage-support-ai-chat",
  title: "Modules/CRM/Step/Singlepage/support/ai-chat",
  component: Example,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
