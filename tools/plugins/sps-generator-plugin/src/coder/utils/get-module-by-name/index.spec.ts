import { util } from ".";

describe("get-module-by-name", () => {
  it("should take sps-website-builder from name @sps/sps-website-builder-models-slide-backend-schema-relations", () => {
    const name =
      "@sps/sps-website-builder-models-slide-backend-schema-relations";

    const result = util({ name });
    expect(result).toBe("sps-website-builder");
  });

  it("should take sps-crm from name @sps/sps-crm-models-form-backend-schema-relations", () => {
    const name = "@sps/sps-crm-models-form-backend-schema-relations";

    const result = util({ name });
    expect(result).toBe("sps-crm");
  });
});
