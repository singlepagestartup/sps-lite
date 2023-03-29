import { Meta, StoryObj } from "@storybook/react";
import { rest, setupWorker } from "msw";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { backendForm } from "~mocks/models";
import store from "~redux/index";
import { BACKEND_URL } from "~utils/envs";
import Forms, { IFormBlock } from ".";

const meta = { component: Forms } satisfies Meta<typeof Forms>;
export default meta;

type Story = StoryObj<typeof meta>;

const formsProps = {
  id: 9,
  anchor: null,
  className: null,
  form: backendForm,
  variant: `simple`,
} as IFormBlock;

const worker = setupWorker(
  rest.post(`${BACKEND_URL}/api/form-requests`, (req, res, ctx) => {
    return res(ctx.json({}));
  })
);

export const SimpleCentered = {
  render: () => <FormComponent />,
};

function FormComponent() {
  useEffect(() => {
    worker.start();
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <Forms {...formsProps} />
      </Provider>
    </div>
  );
}
