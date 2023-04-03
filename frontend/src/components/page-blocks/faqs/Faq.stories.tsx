import { Meta, StoryObj } from "@storybook/react";
import Faqs from ".";
import { backendFaqBlockThreeColumns } from "~mocks/components/page-blocks";

const meta = { component: Faqs } satisfies Meta<typeof Faqs>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ThreeColumns: Story = {
  args: backendFaqBlockThreeColumns,
};

export const CenteredAccordion: Story = {
  args: {
    ...ThreeColumns.args,
    variant: `centered-accordion`,
  },
};

export const CenteredAccordionOnDark: Story = {
  args: {
    ...ThreeColumns.args,
    variant: `centered-accordion-on-dark`,
  },
};

export const OffsetWithSupportingText: Story = {
  args: {
    ...ThreeColumns.args,
    variant: `offset-with-supporting-text`,
  },
};

export const SideBySide: Story = {
  args: {
    ...ThreeColumns.args,
    variant: `side-by-side`,
  },
};

export const ThreeColumnsOnDark: Story = {
  args: {
    ...ThreeColumns.args,
    variant: `three-columns-on-dark`,
  },
};

export const ThreeColumnsWithCenteredIntroduction: Story = {
  args: {
    ...ThreeColumns.args,
    variant: `three-columns-with-centered-introduction`,
  },
};

export const TwoColumns: Story = {
  args: {
    ...ThreeColumns.args,
    variant: `two-columns`,
  },
};

export const TwoColumnsOnDark: Story = {
  args: {
    ...ThreeColumns.args,
    variant: `two-columns-on-dark`,
  },
};

export const TwoColumnsWithCenteredIntroduction: Story = {
  args: {
    ...ThreeColumns.args,
    variant: `two-columns-with-centered-introduction`,
  },
};
