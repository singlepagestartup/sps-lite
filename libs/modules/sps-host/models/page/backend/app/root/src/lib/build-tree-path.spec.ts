import { util as buildTreePath } from "./build-tree-paths";

describe("build-tree-path", () => {
  it("should return ['/']", () => {
    const segments = ["/"];

    const result = buildTreePath({ segments });

    expect(result).toEqual([["/"]]);
  });

  it("should return '/events/create'", () => {
    const segments = ["events", "create"];

    const result = buildTreePath({ segments });

    expect(result).toEqual([["events", "create"]]);
  });

  it("should return '/events/sdfsddf9e1-faa98b-466c-e4e696297eca-702651ba39a9' and '/event/48d6-94564ada-f919-be85-b33b'", () => {
    const segments = [
      "events",
      "new",
      [
        "sdfsddf9e1-faa98b-466c-e4e696297eca-702651ba39a9",
        "48d6-94564ada-f919-be85-b33b",
      ],
    ];

    const result = buildTreePath({ segments });

    expect(result).toEqual([
      ["events", "new", "sdfsddf9e1-faa98b-466c-e4e696297eca-702651ba39a9"],
      ["events", "new", "48d6-94564ada-f919-be85-b33b"],
    ]);
  });

  it("should return 'school/courses/49ddf9e1-f98b-466c-b33b-702651ba39a9' and '/school/courses/d2b6d007-c7dd-42f7-a358-d4c0bd3966e3'", () => {
    const segments = [
      "school",
      "courses",
      [
        "49ddf9e1-f98b-466c-b33b-702651ba39a9",
        "d2b6d007-c7dd-42f7-a358-d4c0bd3966e3",
      ],
      "edit",
    ];

    const result = buildTreePath({ segments });

    expect(result).toEqual([
      ["school", "courses", "49ddf9e1-f98b-466c-b33b-702651ba39a9", "edit"],
      ["school", "courses", "d2b6d007-c7dd-42f7-a358-d4c0bd3966e3", "edit"],
    ]);
  });
});
