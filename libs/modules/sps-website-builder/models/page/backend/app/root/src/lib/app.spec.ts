import { app } from "./app";
import { Actor } from "@sps/shared-bdd-steps";

describe("pages", () => {
  it(`by GET request to /api/get-urls I want to get list of urls`, async () => {
    const actionObject = app;

    const me = new Actor({
      actionObject,
      iAm: "ApiClient",
    });

    await me.goTo({
      path: "/get-urls",
    });

    const res = await me.getResult();
    const resultData = await res.json();

    expect(res.status).toBe(200);
    expect(Array.isArray(resultData.data)).toEqual(true);
  });
});
