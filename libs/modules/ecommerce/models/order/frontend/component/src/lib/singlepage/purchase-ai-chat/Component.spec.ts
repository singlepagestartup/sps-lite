import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

const mockTotal = jest.fn();
let mockReceipts: { fileStorageModuleFileId: string }[] = [];
jest.mock("server-only", () => ({}));
jest.mock("client-only", () => ({}));
jest.mock("@sps/ecommerce/models/order/sdk/client", () => ({
  Provider: ({ children }: any) => children,
  api: {
    total: (...args: unknown[]) => mockTotal(...args),
    findById: ({ id }: { id: string }) => ({
      data: {
        id,
        receipt: "SPS-2026-1042",
        createdAt: "2026-10-08T12:00:00.000Z",
        type: "history",
        status: "paid",
      },
      isLoading: false,
    }),
  },
}));
jest.mock("@sps/ecommerce/models/order/sdk/server", () => ({
  api: { total: jest.fn() },
}));
jest.mock(
  "@sps/ecommerce/relations/orders-to-file-storage-module-files/frontend/component",
  () => ({
    Component: ({ children }: any) => children({ data: mockReceipts }),
  }),
);
jest.mock("@sps/file-storage/models/file/frontend/component", () => ({
  Component: ({ children }: any) =>
    children({
      data: [{ id: "receipt-file", file: "/file-storage/static/receipt.pdf" }],
    }),
}));
jest.mock("@sps/website-builder/models/feature/frontend/component", () => ({
  Component: () => null,
}));
jest.mock("@sps/shared-utils", () => ({
  NEXT_PUBLIC_API_SERVICE_URL: "http://localhost:4000",
}));
import { Component } from "../../index";
import { Component as Server } from "./server";

function renderPurchase() {
  return renderToStaticMarkup(
    createElement(Component, {
      isServer: false,
      variant: "purchase-ai-chat",
      data: {
        id: "order-1",
        receipt: "SPS-2026-1042",
        createdAt: "2026-10-08T12:00:00.000Z",
        type: "history",
        status: "paid",
      } as any,
    }),
  );
}
describe("Paid purchase details", () => {
  beforeEach(() => {
    mockReceipts = [{ fileStorageModuleFileId: "receipt-file" }];
    const currency = {
      id: "rub",
      slug: "rub",
      title: "Российский Рубль",
      symbol: "₽",
    };
    mockTotal.mockReturnValue({
      data: [
        { total: 100, billingModuleCurrency: currency },
        { total: 30, billingModuleCurrency: currency },
      ],
      isPending: false,
      isError: false,
    });
  });
  it("sums product totals once per currency and displays the order reference and date", () => {
    const html = renderPurchase();
    expect(html).toContain("130 RUB");
    expect(html).toContain("SPS-2026-1042");
    expect(html).toContain("2026-10-08");
    expect(html).not.toContain("100 RUB");
  });
  it("downloads the stored receipt instead of generating preview receipt text", () => {
    const html = renderPurchase();
    expect(html).toContain(
      'href="http://localhost:4000/public/file-storage/static/receipt.pdf"',
    );
    expect(html).not.toContain("data:text/plain");
  });
  it("does not invent a downloadable receipt when no receipt file exists", () => {
    mockReceipts = [];
    const html = renderPurchase();
    expect(html).toContain('title="Receipt is not available yet."');
    expect(html).not.toContain("href=");
  });
  it("keeps total failures local to the purchase details", () => {
    mockTotal.mockReturnValue({ isPending: false, isError: true });
    const html = renderPurchase();
    expect(html).toContain("Total unavailable");
    expect(html).toContain("SPS-2026-1042");
  });
  it("loads totals through the server SDK before rendering a server purchase", async () => {
    const serverApi = jest.requireMock(
      "@sps/ecommerce/models/order/sdk/server",
    ).api;
    serverApi.total.mockResolvedValue([
      {
        total: 42,
        billingModuleCurrency: { id: "usd", slug: "usd", symbol: "$" },
      },
    ]);
    const options = { headers: { "Cache-Control": "no-store" } };
    const result = await Server({
      isServer: true,
      variant: "purchase-ai-chat",
      data: {
        id: "server-order",
        receipt: "SPS-SERVER",
        createdAt: "2026-10-08T12:00:00.000Z",
      } as any,
      apiProps: { options },
    });
    const html = renderToStaticMarkup(result);
    expect(serverApi.total).toHaveBeenCalledWith({
      id: "server-order",
      options,
    });
    expect(html).toContain("42 USD");
    expect(html).toContain("SPS-SERVER");
  });
});
