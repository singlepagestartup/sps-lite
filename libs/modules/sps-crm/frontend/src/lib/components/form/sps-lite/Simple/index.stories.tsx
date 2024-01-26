import { Meta, StoryObj } from "@storybook/react";
import { HttpResponse, http } from "msw";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../../../../../../../../../../apps/frontend/src/redux";
import { BACKEND_URL } from "@sps/utils";
import Root from ".";
import { entity as form } from "@sps/sps-crm-frontend/lib/redux/entities/form/mock/sps-lite";
import { TranslationsContextWrapper } from "@sps/hooks";
import { IForm } from "../..";

const meta = { component: Root } satisfies Meta<typeof Root>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Index: Story = {
  render: (args) => <FormComponent {...args} />,
  args: form,
};

function FormComponent(args: IForm) {
  useEffect(() => {
    http.post(`${BACKEND_URL}/api/form-requests`, ({ request }) => {
      return HttpResponse.json({});
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <TranslationsContextWrapper>
        <Provider store={store}>
          <Root {...args} />
        </Provider>
      </TranslationsContextWrapper>
    </div>
  );
}
