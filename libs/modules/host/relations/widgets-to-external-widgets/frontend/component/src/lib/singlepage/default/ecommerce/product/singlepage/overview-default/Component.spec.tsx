/** @jest-environment jsdom */
/** Given a saved Product, Host delegates its unchanged record to the public RBAC composition. */
import { render } from "@testing-library/react";
const delegated = jest.fn();
jest.mock("@sps/rbac/models/subject/frontend/component", () => ({
  Component: (props: any) => {
    delegated(props);
    return null;
  },
}));
import { Component } from "./Component";
it("forwards the Product without selecting a Subject in Host", () => {
  const product = { id: "p" };
  render(
    <Component
      isServer={false}
      variant="overview-default"
      data={product as any}
      language="en"
    />,
  );
  expect(delegated).toHaveBeenCalledWith(
    expect.objectContaining({
      variant: "me-ecommerce-module-product-overview-default",
      product,
      language: "en",
    }),
  );
});
