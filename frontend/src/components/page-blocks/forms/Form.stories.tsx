import { Meta, StoryObj } from "@storybook/react";
import { rest, setupWorker } from "msw";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "~redux/index";
import { BACKEND_URL } from "~utils/envs";
import Forms, { IFormBlock } from ".";
import { backendFormBlockSimple } from "~mocks/components/page-blocks";

const meta = { component: Forms } satisfies Meta<typeof Forms>;
export default meta;

type Story = StoryObj<typeof meta>;

const worker = setupWorker(
  rest.post(`${BACKEND_URL}/api/form-requests`, (req, res, ctx) => {
    return res(ctx.json({}));
  })
);

export const SimpleCentered: Story = {
  render: (args) => <FormComponent {...args} />,
  args: backendFormBlockSimple,
};

function FormComponent(args: IFormBlock) {
  useEffect(() => {
    worker.start();
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <Forms {...args} />
      </Provider>
    </div>
  );
}
