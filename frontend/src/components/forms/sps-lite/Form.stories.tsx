import { Meta, StoryObj } from "@storybook/react";
import { HttpResponse, http } from "msw";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "~redux/index";
import { BACKEND_URL } from "~utils/envs";
import Forms, { ISpsLiteFormBlock } from ".";
import { spsLiteBackendForm } from "~mocks/collection-types/sps-lite";
import TranslationsContextWrapper from "~hooks/use-translations/TranslationsContext";

const meta = { component: Forms } satisfies Meta<typeof Forms>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  render: (args) => <FormComponent {...args} />,
  args: spsLiteBackendForm,
};

function FormComponent(args: ISpsLiteFormBlock) {
  useEffect(() => {
    http.post(`${BACKEND_URL}/api/form-requests`, ({ request }) => {
      return HttpResponse.json({});
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <TranslationsContextWrapper>
        <Provider store={store}>
          <Forms {...args} />
        </Provider>
      </TranslationsContextWrapper>
    </div>
  );
}
