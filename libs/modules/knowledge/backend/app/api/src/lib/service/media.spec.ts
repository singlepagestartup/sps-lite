import sharp from "sharp";
import { MediaService } from "./media";

jest.mock("file-type", () => ({
  fileTypeFromBuffer: jest.fn(async () => undefined),
}));

it("analyzes SVG visually instead of treating its XML as plain Knowledge text", async () => {
  const generate = jest.fn(async (_props: any) => ({
    text: "Logo with a blue accent",
  }));
  const service = new MediaService({ provider: { generate } as any });
  const svg = Buffer.from(
    '<svg width="20" height="10" xmlns="http://www.w3.org/2000/svg"><rect fill="blue" width="20" height="10"/></svg>',
  );
  jest.spyOn(service as any, "read").mockResolvedValue(svg);

  await expect(
    service.analyze({ file: "/logo.svg" } as any, "Brand reference"),
  ).resolves.toBe("Logo with a blue accent");
  expect(generate).toHaveBeenCalledWith(
    expect.objectContaining({
      model: "openai/gpt-6.1-sol",
      reasoning: { effort: "high", exclude: true },
    }),
  );
  const content = generate.mock.calls[0][0].context[0].content;
  expect(content[0].text).toContain("Brand reference");
  const imageUrl = content[1].image_url.url;
  expect(imageUrl).toMatch(/^data:image\/png;base64,/);
  expect(
    await sharp(Buffer.from(imageUrl.split(",")[1], "base64")).metadata(),
  ).toMatchObject({ format: "png", width: 20, height: 10 });
});

it("preserves ordinary UTF-8 text without a visual analysis request", async () => {
  const generate = jest.fn();
  const service = new MediaService({ provider: { generate } as any });
  jest
    .spyOn(service as any, "read")
    .mockResolvedValue(Buffer.from("Original project notes"));
  await expect(
    service.analyze({ file: "/notes.txt" } as any, "Context"),
  ).resolves.toBe("Original project notes");
  expect(generate).not.toHaveBeenCalled();
});
