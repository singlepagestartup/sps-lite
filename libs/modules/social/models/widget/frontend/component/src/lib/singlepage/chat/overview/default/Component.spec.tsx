import { renderToStaticMarkup } from "react-dom/server";
jest.mock("@sps/shared-frontend-client-utils", () => ({ cn: () => "" }));
import { Component } from "./Component";
const props = {
  isServer: true,
  data: { id: "widget" },
  language: "en",
  variant: "chat-overview-default",
};
it("selects Social keys and supplies only explicit IDs to the higher-module operation", () => {
  const renderChat = jest.fn(() => <p>Authorized chat</p>);
  const html = renderToStaticMarkup(
    <Component
      {...({
        ...props,
        routeParams: Object.freeze({
          "social.chats.id": "chat",
          "social.threads.id": "thread",
          other: "opaque",
        }),
        renderChat,
      } as any)}
    />,
  );
  expect(renderChat).toHaveBeenCalledWith({
    chatId: "chat",
    threadId: "thread",
  });
  expect(html).toContain("Authorized chat");
});
it.each([{}, { "social.threads.id": "thread" }])(
  "does not request a chat without its ID",
  (routeParams) => {
    const renderChat = jest.fn();
    renderToStaticMarkup(
      <Component {...({ ...props, routeParams, renderChat } as any)} />,
    );
    expect(renderChat).not.toHaveBeenCalled();
  },
);
