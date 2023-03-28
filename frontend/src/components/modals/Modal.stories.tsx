import type { Meta, StoryObj } from "@storybook/react";
import axios from "axios";
import { setupWorker, rest } from "msw";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "~redux/index";
import { BACKEND_URL } from "~utils/envs";
import Modals from ".";

const meta = {
  component: Modals,
} satisfies Meta<typeof Modals>;

export default meta;

type Story = StoryObj<typeof meta>;

const worker = setupWorker(
  rest.get(`${BACKEND_URL}/api/modals`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          title: `Hello world`,
          uid: `hello-world`,
          dialogPanelClassName: `container`,
          variant: `simple`,
          publishedAt: `2023-03-28T11:07:57.457Z`,
          pageBlocks: [
            {
              id: 6,
              _Component: `page-blocks.hero-section-block`,
              title: `Hello world`,
              description: `Создай свой стартап за несколько часов и постепенно расширяя функционал доработай его до полноценного продукта, при этом не тратя время на разработку функционала с нуля.`,
              variant: `simple-centered`,
              buttons: [],
            },
          ],
        },
      ])
    );
  })
);

function ModalComponent() {
  useEffect(() => {
    worker.start();
  }, []);

  return (
    <Provider store={store}>
      <Modals />
    </Provider>
  );
}

export const Simple: Story = {
  render: () => <ModalComponent />,
};
