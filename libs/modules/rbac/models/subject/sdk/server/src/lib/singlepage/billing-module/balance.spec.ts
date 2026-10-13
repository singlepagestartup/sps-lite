import { action } from "./balance";

it("preserves authentication and bypasses HTTP caching for each balance read", async () => {
  const fetchMock = jest.spyOn(global, "fetch").mockImplementation(
    async () =>
      new Response(
        JSON.stringify({ data: { amount: "3000", currencyId: "token" } }),
        {
          headers: { "Content-Type": "application/json" },
        },
      ),
  );
  try {
    await action({
      id: "owner",
      host: "http://localhost:4000",
      options: {
        headers: {
          Authorization: "Bearer fixture",
          "Cache-Control": "max-age=60",
        },
      },
    });
    const headers = new Headers(fetchMock.mock.calls[0][1]?.headers);
    expect(headers.get("Authorization")).toBe("Bearer fixture");
    expect(headers.get("Cache-Control")).toBe("no-store");
    expect(fetchMock.mock.calls[0][0]).toBe(
      "http://localhost:4000/api/rbac/subjects/owner/billing-module/balance",
    );
  } finally {
    fetchMock.mockRestore();
  }
});
