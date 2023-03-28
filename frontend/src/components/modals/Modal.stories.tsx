import type { Meta, StoryObj } from "@storybook/react";
import { setupWorker, rest } from "msw";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "~redux/index";
import { BACKEND_URL } from "~utils/envs";
import Modals from ".";

const meta = {
  component: Modals,
} satisfies Meta<typeof Modals>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockedModals = {
  data: [
    {
      id: 1,
      title: `Hello world`,
      uid: `hello-world`,
      dialog_panel_class_name: `container`,
      variant: `simple`,
      createdAt: `2023-03-28T11:07:56.252Z`,
      updatedAt: `2023-03-28T11:07:57.474Z`,
      publishedAt: `2023-03-28T11:07:57.457Z`,
      page_blocks: [
        {
          id: 6,
          __component: `page-blocks.hero-section-block`,
          title: `Hello world`,
          description: `Создай свой стартап за несколько часов и постепенно расширяя функционал доработай его до полноценного продукта, при этом не тратя время на разработку функционала с нуля.`,
          variant: `simple-centered`,
          anchor: null,
          class_name: null,
          buttons: [],
          background: {
            data: null,
          },
          media: {
            data: null,
          },
        },
      ],
    },
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 1,
    },
  },
};

const worker = setupWorker(
  rest.get(`${BACKEND_URL}/api/modals`, (req, res, ctx) => {
    return res(ctx.json(mockedModals));
  })
);

function ModalComponent() {
  useEffect(() => {
    worker.start();
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <Modals />
      </Provider>
    </div>
  );
}

export const Simple: Story = {
  render: () => <ModalComponent />,
};

Simple.parameters = {
  nextjs: {
    router: {
      query: {
        opened_popup: `hello-world`,
      },
    },
  },
};
