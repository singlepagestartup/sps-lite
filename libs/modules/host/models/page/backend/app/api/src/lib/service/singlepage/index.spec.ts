import { Service } from "./index";

it("returns null for a route without the requested profile segment", async () => {
  const service = Object.create(Service.prototype) as Service;
  service.findByUrl = jest.fn(async () => ({
    url: "/ai-chat/projects",
  })) as any;
  await expect(
    service.urlSegmentValue({
      url: "/ai-chat/projects",
      segment: "social.profiles.id",
    }),
  ).resolves.toBeNull();
});

it("keeps the actual profile segment on project routes", async () => {
  const service = Object.create(Service.prototype) as Service;
  service.findByUrl = jest.fn(async () => ({
    url: "/ai-chat/social/profiles/[social.profiles.id]",
  })) as any;
  await expect(
    service.urlSegmentValue({
      url: "/ai-chat/social/profiles/profile",
      segment: "social.profiles.id",
    }),
  ).resolves.toBe("profile");
});

it("returns all keys with the resolved page without a second lookup", async () => {
  const service = Object.create(Service.prototype) as Service;
  const page = {
    id: "page",
    url: "/chats/[social.chats.id]/threads/[social.threads.id]",
  };
  service.find = jest.fn(async () => [page]) as any;
  service.withUrls = jest.fn(async () => ({
    ...page,
    urls: [{ url: "/chats/c/threads/t" }],
  })) as any;
  service.findById = jest.fn(async () => page) as any;
  await expect(
    service.findByUrl({ url: "/chats/c/threads/t" }),
  ).resolves.toEqual({
    ...page,
    routeParams: { "social.chats.id": "c", "social.threads.id": "t" },
  });
  expect(service.withUrls).toHaveBeenCalledTimes(1);
});
it("does not interpret an unrelated missing key as pagination", async () => {
  const service = Object.create(Service.prototype) as Service;
  service.findByUrl = jest.fn(async () => ({
    url: "/blog/[blog.articles.:pagination:10]",
  })) as any;
  await expect(
    service.urlSegmentValue({ url: "/blog", segment: "social.profiles.id" }),
  ).resolves.toBeNull();
});
