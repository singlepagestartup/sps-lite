import { Meta, StoryObj } from "@storybook/react";
import { entity } from "~redux/services/backend/components/page-blocks/hero-section-block/mock/sps-lite";
import { default as IndexComp } from "./";
import { default as Sk } from "./Skeleton";
import { default as Comp } from "./Component";
import { default as Er } from "./Error";
import { IPageBlock } from "../..";

const meta = { component: IndexComp } satisfies Meta<typeof IndexComp>;
export default meta;

type Story = StoryObj<typeof meta>;

const localEntity: IPageBlock = {
  ...entity,
  variant: "simple-centered",
};

export const Index: Story = {
  args: localEntity,
};

export const Skeleton: Story = {
  args: localEntity,
  render: (args) => <Sk {...args} />,
};

export const Component: Story = {
  args: localEntity,
  render: (args) => <Comp {...args} />,
};

export const Error: Story = {
  args: localEntity,
  render: (args) => <Er {...args} />,
};
