import { Service } from "./skills";
import { AI_CHAT_DOCUMENTS } from "@sps/shared-utils";

function fixture() {
  const records = AI_CHAT_DOCUMENTS.map((document, index) => ({
    id: `skill-${index}`,
    slug: document.skillSlug,
    description: "Manually maintained instructions",
  }));
  const links: any[] = [];
  const deps = {
    skill: {
      find: jest.fn(async ({ params }) =>
        records.filter((record) =>
          params.filters.and.every((filter: any) =>
            filter.method === "inArray"
              ? filter.value.includes(record[filter.column])
              : record[filter.column] === filter.value,
          ),
        ),
      ),
      update: jest.fn(),
    },
    profilesToSkills: {
      find: jest.fn(async ({ params }) =>
        links.filter((link) =>
          params.filters.and.every(
            (filter: any) => link[filter.column] === filter.value,
          ),
        ),
      ),
      create: jest.fn(async ({ data }) => {
        links.push(data);
        return data;
      }),
    },
  };
  return { service: new Service(deps as any), records, links, deps };
}

it("connects all five professions for every assistant without rewriting instructions or duplicating links", async () => {
  const { service, links, deps } = fixture();
  const skills = await service.defaults();
  await service.connect("assistant-one", skills);
  await service.connect("assistant-one", skills);
  await service.connect("assistant-two", skills);
  expect(links).toHaveLength(10);
  expect(
    links
      .filter((link) => link.profileId === "assistant-one")
      .map((link) => link.skillId),
  ).toEqual(skills.map((skill) => skill.id));
  expect(deps.skill.update).not.toHaveBeenCalled();
  expect(await service.forDocument("assistant-one", "brand")).toEqual(
    skills[2],
  );
  await expect(service.forDocument("personal", "brand")).rejects.toThrow(
    "Link ai-chat-communication-strategist",
  );
});

it("fails before creating any relations when a configured profession is absent", async () => {
  const { service, records, deps } = fixture();
  records.pop();
  await expect(service.defaults()).rejects.toThrow("ai-chat-business-analyst");
  expect(deps.profilesToSkills.create).not.toHaveBeenCalled();
});
