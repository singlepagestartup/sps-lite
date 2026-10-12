/**
 * BDD Suite: support Form record loading.
 *
 * Given: a Form reference and interactive support-field props.
 * When: the public CRM component renders on the client or through the server reader.
 * Then: the matching SDK loads the record by ID and the renderer uses that record.
 */
import { renderToStaticMarkup } from "react-dom/server";
import type { ReactElement } from "react";
import { Component as Form } from "@sps/crm/models/form/frontend/component";
import type { IComponentProps } from "./interface";

const clientRead = jest.fn();
const serverRead = jest.fn();
const providerRender = jest.fn();

jest.mock("client-only", () => ({}), { virtual: true });
jest.mock("server-only", () => ({}), { virtual: true });
jest.mock("@sps/crm/models/form/sdk/client", () => ({
  Provider: ({ children }: { children: React.ReactNode }) => {
    providerRender();
    return <>{children}</>;
  },
  api: { findById: (props: unknown) => clientRead(props) },
}));
jest.mock("@sps/crm/models/form/sdk/server", () => ({
  api: { findById: (props: unknown) => serverRead(props) },
}));
// Keep the public router while isolating this variant from unrelated admin variants.
jest.mock("../variants", () => ({
  variants: { "support-ai-chat": jest.requireActual("./index").Component },
}));

const reference = {
  id: "support-form-id",
  className: "stale-reference",
} as IComponentProps["data"];
const stored = { ...reference, className: "backend-record" };
const props: IComponentProps = {
  isServer: false,
  variant: "support-ai-chat",
  data: reference,
  id: "support-fields",
  values: { topic: "", details: "", result: "" },
  errors: { details: "Describe what happened." },
  onChange: jest.fn(),
  className: "caller-layout",
  apiProps: { options: { headers: { "X-Support-Test": "record-read" } } },
  children: <button type="submit">Send request</button>,
};
const request = { id: reference.id, ...props.apiProps };

beforeEach(() => {
  clientRead.mockReset();
  serverRead.mockReset();
  providerRender.mockReset();
});

it("loads the client record by ID instead of rendering the supplied reference", () => {
  clientRead.mockReturnValue({ data: stored, isLoading: false });
  const html = renderToStaticMarkup(<Form {...props} />);
  expect(clientRead).toHaveBeenCalledWith(request);
  expect(serverRead).not.toHaveBeenCalled();
  expect(providerRender).toHaveBeenCalledTimes(1);
  expect(html).toContain('data-id="support-form-id"');
  expect(html).toContain("backend-record");
  expect(html).toContain("caller-layout");
  expect(html).not.toContain("stale-reference");
  expect(html).toContain('id="support-fields-details"');
  expect(html).toContain("Describe what happened.");
  expect(html).toContain("Send request");
});

it("keeps fields out of the view while the client record is loading", () => {
  clientRead.mockReturnValue({ data: undefined, isLoading: true });
  const html = renderToStaticMarkup(<Form {...props} />);
  expect(clientRead).toHaveBeenCalledWith(request);
  expect(html).not.toContain('data-variant="support-ai-chat"');
  expect(html).not.toContain('name="details"');
  expect(html).not.toContain("Send request");
});

it("loads the server record through the same shared wrapper and preserves field props", async () => {
  serverRead.mockResolvedValue(stored);
  // Resolve the real public variant and shared wrapper before awaiting its RSC reader.
  const variant = Form({ ...props, isServer: true }) as ReactElement<any>;
  const parent = (variant.type as Function)(variant.props) as ReactElement<any>;
  const boundary = (parent.type as Function)(parent.props) as ReactElement<any>;
  const suspense = boundary.props.children as ReactElement<any>;
  const provider = suspense.props.children as ReactElement<any>;
  const reader = provider.props.children as ReactElement<any>;
  const loaded = await (reader.type as Function)(reader.props);
  const clientView = (loaded.type as Function)(
    loaded.props,
  ) as ReactElement<any>;
  for (const key of ["api", "Provider", "clientApi", "serverApi", "Component"])
    expect(clientView.props).not.toHaveProperty(key);
  expect(clientView.props.onChange).toBe(props.onChange);
  const html = renderToStaticMarkup(loaded);
  expect(serverRead).toHaveBeenCalledWith(request);
  expect(clientRead).not.toHaveBeenCalled();
  expect(html).toContain('data-id="support-form-id"');
  expect(html).toContain("backend-record");
  expect(html).not.toContain("stale-reference");
  expect(html).toContain('id="support-fields-result"');
  expect(html).toContain("Send request");
});
