import { Meta, StoryObj } from "@storybook/react";
import { backendTier } from "~mocks/models";
import Pricings from ".";

const meta = { component: Pricings } satisfies Meta<typeof Pricings>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    variant: `two-tiers-with-extra-tier`,
    title: `Один шаг чтобы стать Lean Startup разработчиком`,
    subtitle: null,
    description: `Сэкономьте более 250 часов работы разработчика (7'500$) и постоянный доступ к обновлениям кодовой базы. Таким образом все разработанные на базе SPS проекты можно будет обновлять прямо из репозитория SPS. Не нужно копировать-вставлять блоки кода при обновлении.`,
    className: null,
    tiers: Array(2).fill(backendTier),
  },
};
