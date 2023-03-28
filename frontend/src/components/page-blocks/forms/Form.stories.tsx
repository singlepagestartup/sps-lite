import { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import * as SimpleButtonsStories from "~components/buttons/simple-buttons/SimpleButton.stories";
import store from "~redux/index";
import Forms from ".";

const meta = { component: Forms } satisfies Meta<typeof Forms>;
export default meta;

type Story = StoryObj<typeof meta>;

const formsProps = {
  id: 9,
  variant: `simple`,
  anchor: null,
  className: null,
  form: {
    id: 1,
    title: `Есть вопросы по продукту?`,
    subtitle: null,
    description: `Заполните форму и мы свяжемся с вами в ближайшее время`,
    uid: `question`,
    createdAt: `2023-02-14T10:12:40.873Z`,
    updatedAt: `2023-03-26T20:40:29.554Z`,
    publishedAt: `2023-02-14T22:44:48.245Z`,
    inputs: [
      {
        id: 56,
        placeholder: `Введите ваше имя`,
        component: `text`,
        isRequired: true,
        value: null,
        name: `name`,
        label: `Имя`,
        className: null,
        type: null,
        multiple: null,
        options: [],
      },
      {
        id: 57,
        placeholder: `Введите вашу электронную почту`,
        component: `text`,
        isRequired: true,
        value: null,
        name: `email`,
        label: `Электронная почта`,
        className: null,
        type: null,
        multiple: null,
        options: [],
      },
      {
        id: 58,
        placeholder: `Выберите тариф`,
        component: `listbox`,
        isRequired: false,
        value: null,
        name: `tier`,
        label: `Тариф`,
        className: null,
        type: null,
        multiple: null,
        options: [
          {
            id: 24,
            title: `Lite`,
            description: null,
          },
          {
            id: 25,
            title: `Pro`,
            description: null,
          },
        ],
      },
      {
        id: 59,
        placeholder: `Напишите ваш вопрос`,
        component: `text`,
        isRequired: false,
        value: null,
        name: `querstion`,
        label: `Вопрос`,
        className: null,
        type: `textarea`,
        multiple: null,
        options: [],
      },
      {
        id: 60,
        placeholder: null,
        component: `switch`,
        isRequired: true,
        value: null,
        name: `policy`,
        label: `Я согласен с Политикой конфиденциальности`,
        className: null,
        type: null,
        multiple: null,
        options: [],
      },
    ],
    button: SimpleButtonsStories.Default.args,
  },
};

export const SimpleCentered: Story = {
  render: () => <FormComponent />,
};

function FormComponent() {
  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <Forms {...formsProps} />
      </Provider>
    </div>
  );
}
