import { renderToStaticMarkup } from "react-dom/server";
import { Component } from "./Content";
const mockProduct = { id: "product" };
const mockSubject = jest.fn();
const mockCatalog = jest.fn();
jest.mock("@sps/ecommerce/models/product/frontend/component", () => ({
  Component: (props: any) => {
    mockCatalog(props);
    return props.children({ data: [mockProduct] });
  },
}));
jest.mock("@sps/rbac/models/subject/frontend/component", () => ({
  Component: (props: any) => {
    mockSubject(props);
    return null;
  },
}));
it("keeps catalog reads on the server and current-Subject reads in the browser on cached Host pages", () => {
  renderToStaticMarkup(<Component isServer={true} language="en" />);
  expect(mockCatalog).toHaveBeenCalledWith(
    expect.objectContaining({ isServer: true, variant: "find" }),
  );
  expect(mockSubject).toHaveBeenCalledWith(
    expect.objectContaining({
      isServer: false,
      variant: "me-ecommerce-module-product-card-default",
      ecommerceModuleProduct: mockProduct,
    }),
  );
});
