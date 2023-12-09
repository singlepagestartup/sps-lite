import { Meta, StoryObj } from "@storybook/react";
import { spsLiteBackendHeroSectionBlockSimpleCentered } from "~mocks/components/page-blocks/sps-lite";
import { default as IndexComp } from "./";
import { default as Sk } from "./Skeleton";
import { default as Comp } from "./Component";
import { default as Er } from "./Error";

const meta = { component: IndexComp } satisfies Meta<typeof IndexComp>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Index: Story = {
  args: spsLiteBackendHeroSectionBlockSimpleCentered,
};

export const Skeleton: Story = {
  args: spsLiteBackendHeroSectionBlockSimpleCentered,
  render: (args) => <Sk {...args} />,
};

export const Component: Story = {
  args: spsLiteBackendHeroSectionBlockSimpleCentered,
  render: (args) => <Comp {...args} />,
};

export const Error: Story = {
  args: spsLiteBackendHeroSectionBlockSimpleCentered,
  render: (args) => <Er {...args} />,
};
