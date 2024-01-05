import { Meta, StoryObj } from "@storybook/react";
import { HttpResponse, http } from "msw";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "~redux/index";
import { BACKEND_URL } from "~utils/envs";
import Root from ".";
import { entity as form } from "~redux/services/backend/extensions/sps-crm/api/form/mock/sps-lite";
import TranslationsContextWrapper from "~hooks/use-translations/TranslationsContext";
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
