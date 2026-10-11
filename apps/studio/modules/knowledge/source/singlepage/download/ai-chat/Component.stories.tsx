import { SourceProvider } from "../../id/ai-chat/Source";
import type { Meta, StoryObj } from "@storybook/react";
import { Component } from "./Component";
const meta = {
  id: "modules-knowledge-models-source-singlepage-download-ai-chat",
  title: "Modules/Knowledge/Source/Singlepage/download/ai-chat",
  component: Component,
  args: { label: ".md" },
  render: (args) => (
    <SourceProvider profileId="project-pottery">
      <Component {...args} />
    </SourceProvider>
  ),
} satisfies Meta<typeof Component>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { name: "default" };
