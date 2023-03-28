import { Meta, StoryObj } from "@storybook/react";
import FeatureSections from ".";

const meta = { component: FeatureSections } satisfies Meta<
  typeof FeatureSections
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleThreeColumn: Story = {
  args: {
    title: `Hello world`,
    variant: `simple-three-column`,
    description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
    features: [
      {
        title: `Личный кабинет пользователя с настройками профиля`,
        description: `После того как пользователь зарегистрировался, он захочет поставить аватар, мы уже сделали это, просто включите этот PageBlock на страницу профиля пользователя.`,
      },
      {
        title: `Интеграции`,
        description: `Мы сделали интеграции с Google Drive и Google Sheets для данных, которые отправляются в формах на сайте. Вы можете использовать их или добавить свои варианты интеграций.`,
      },
      {
        title: `Генератор PDF файлов на основе создаваемых пользователем данных`,
        description: `Хотите генерировать документы на основе данных пользователя или заполненной формы? Не проблема, просто включите этот функционал в вашу бизнес логику.`,
      },
    ],
  },
};

export const ThreeColumnWithSlider: Story = {
  args: {
    ...SimpleThreeColumn.args,
    variant: `three-column-with-slider`,
  },
};
export const WithProductScreenshotOnLeft: Story = {
  args: {
    ...SimpleThreeColumn.args,
    variant: `with-product-screenshot-on-left`,
  },
};
