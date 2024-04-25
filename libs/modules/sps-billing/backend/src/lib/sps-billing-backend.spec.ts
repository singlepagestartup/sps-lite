import { spsBillingBackend } from "./sps-billing-backend";

describe("spsBillingBackend", () => {
  it("should work", () => {
    expect(spsBillingBackend()).toEqual("sps-billing-backend");
  });
});
