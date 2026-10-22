/**
 * @jest-environment jsdom
 */

/**
 * BDD Suite: RBAC me product checkout wrapper behavior.
 *
 * Given: RBAC subject wrapper is mocked with controllable auth subject state.
 * When: auth subject is missing or available.
 * Then: checkout variant is hidden for unauthorized state and shown for authorized state.
 */

import { render, screen } from "@testing-library/react";

const rbacSpy = jest.fn();
let authSubject: any = { id: "subject-1" };

jest.mock("@sps/rbac/models/subject/frontend/component", () => ({
  Component: (props: any) => {
    rbacSpy(props);

    if (props.variant === "authentication-me-default") {
      return props.children ? props.children({ data: authSubject }) : null;
    }

    return <div data-testid={props.variant} />;
  },
}));

jest.mock("../../../../authentication/me-default/client", () => ({
  __esModule: true,
  default: (props: any) => props.children({ data: authSubject }),
}));

import Component from "./client";

describe("Given: me product checkout wrapper", () => {
  beforeEach(() => {
    rbacSpy.mockReset();
    authSubject = { id: "subject-1" };
  });

  it("When: no auth subject is available Then: checkout variant is not rendered", () => {
    authSubject = null;

    const { container } = render(
      <Component
        isServer={false}
        ecommerceModuleProduct={{ id: "product-1" } as any}
        language="en"
        variant="me-ecommerce-module-product-checkout-default"
      />,
    );

    expect(container.innerHTML).toBe("");
  });

  it("When: auth subject exists Then: ecommerce-module-product-checkout-default variant is rendered", () => {
    render(
      <Component
        isServer={false}
        ecommerceModuleProduct={{ id: "product-1" } as any}
        language="en"
        variant="me-ecommerce-module-product-checkout-default"
      />,
    );

    expect(
      screen.queryByTestId("ecommerce-module-product-checkout-default"),
    ).not.toBeNull();
  });
});
