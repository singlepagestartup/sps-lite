import { action as find } from "./find";
import { action as create } from "./create";

describe("Subject profile REST SDK", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue(
      new Response(JSON.stringify({ data: [] }), {
        status: 200,
        headers: { "content-type": "application/json" },
      }),
    ) as any;
  });
  it("find uses the collection with profile filters", async () => {
    await find({
      id: "subject-1",
      host: "http://api.test",
      params: {
        filters: {
          and: [
            {
              column: "variant",
              method: "eq",
              value: "artificial-intelligence",
            },
          ],
        },
      },
    });
    expect(global.fetch).toHaveBeenCalledWith(
      "http://api.test/api/rbac/subjects/subject-1/social-module/profiles?filters[and][0][column]=variant&filters[and][0][method]=eq&filters[and][0][value]=artificial-intelligence",
      expect.objectContaining({ method: "GET" }),
    );
  });
  it("create posts only the project title and variant to the collection", async () => {
    const data = {
      variant: "artificial-intelligence" as const,
      title: { en: "Project" },
    };
    await create({ id: "subject-1", host: "http://api.test", data });
    expect(global.fetch).toHaveBeenCalledWith(
      "http://api.test/api/rbac/subjects/subject-1/social-module/profiles",
      expect.objectContaining({ method: "POST", body: expect.any(FormData) }),
    );
    expect(
      (global.fetch as jest.Mock).mock.calls[0][1].body.get("data"),
    ).toEqual(JSON.stringify(data));
  });
});
