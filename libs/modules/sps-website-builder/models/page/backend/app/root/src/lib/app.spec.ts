import { app } from "./app";
import { Actor } from "@sps/shared-bdd-steps";

describe("pages", () => {
  it(`by GET request to / I want to get pages`, async () => {
    const actionObject = app;

    const me = new Actor({
      actionObject,
      iAm: "ApiClient",
    });

    await me.goTo({
      path: "/",
    });

    const res = await me.getResult();
    const resultData = await res.json();

    console.log(`🚀 ~ it ~ resultData:`, resultData);

    expect(res.status).toBe(200);
    expect(Array.isArray(resultData.data)).toEqual(true);
  });
});
