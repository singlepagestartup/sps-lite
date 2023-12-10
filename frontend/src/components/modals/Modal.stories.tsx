import type { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "~redux/index";
import { BACKEND_URL } from "~utils/envs";
import Modals from ".";
import { entity as modal } from "~redux/services/backend/models/modal/mock/sps-lite";

const meta = {
  component: Modals,
} satisfies Meta<typeof Modals>;

export default meta;

type Story = StoryObj<typeof meta>;

function ModalComponent() {
  useEffect(() => {
    http.get(`${BACKEND_URL}/api/modals`, ({ request }) => {
      return HttpResponse.json([modal]);
    });
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
        opened_popup: modal.uid,
      },
    },
  },
};
