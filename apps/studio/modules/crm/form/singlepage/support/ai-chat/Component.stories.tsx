import { Component as CrmModuleForm } from "../../..";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import copy from "./content.json";
function Example() {
  const [values, setValues] = useState({ topic: "", details: "", result: "" });
  return (
    <CrmModuleForm
      variant="support-ai-chat"
      id="support-story"
      values={values}
      onChange={(field, value) =>
        setValues((current) => ({ ...current, [field]: value }))
      }
      copy={copy}
    />
  );
}
const meta = {
  id: "modules-crm-models-form-singlepage-support-ai-chat",
  title: "Modules/CRM/Form/Singlepage/support/ai-chat",
  component: Example,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
