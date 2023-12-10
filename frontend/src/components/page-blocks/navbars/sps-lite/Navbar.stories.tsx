import { Meta, StoryObj } from "@storybook/react";
import Navbars, { ISpsLiteNavbarBlock } from ".";
import { entity } from "~redux/services/backend/components/page-blocks/navbar-block/mock/sps-lite";
import { entity as flyout } from "~redux/services/backend/api/flyout/mock/sps-lite";
import { HttpResponse, http } from "msw";
import { Provider } from "react-redux";
import store from "~redux/index";
import { BACKEND_URL } from "~utils/envs";

const meta = { component: Navbars } satisfies Meta<typeof Navbars>;
export default meta;

type Story = StoryObj<typeof meta>;

console.log("If you don't see page block in storybook - refresh the page");

function NavbarBlockComponent(args: ISpsLiteNavbarBlock) {
  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <Navbars {...args} />
      </Provider>
    </div>
  );
}

export const SimpleLinksOnLeft: Story = {
  render: (args: ISpsLiteNavbarBlock) => <NavbarBlockComponent {...args} />,
  args: { ...entity, variant: "simple-links-on-left" },
  parameters: {
    msw: {
      handlers: [
        http.get(
          `${BACKEND_URL}/api/flyout-menus/${flyout.id}`,
          ({ request }) => {
            return HttpResponse.json({ data: flyout });
          },
        ),
      ],
    },
  },
};
