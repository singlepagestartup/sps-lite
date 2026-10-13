import { AI_CHAT_DOCUMENTS } from "@sps/shared-utils";
import type { IModel as ISkill } from "@sps/social/models/skill/sdk/model";
import type { ISocialModule } from "../../../../di";

export class Service {
  constructor(
    readonly socialModule: Pick<ISocialModule, "skill" | "profilesToSkills">,
  ) {}

  async defaults(): Promise<ISkill[]> {
    const slugs = AI_CHAT_DOCUMENTS.map((document) => document.skillSlug);
    const skills: ISkill[] = await this.socialModule.skill.find({
      params: {
        filters: { and: [{ column: "slug", method: "inArray", value: slugs }] },
      },
    });
    return slugs.map((slug) => {
      const skill = skills.find((skill) => skill.slug === slug);
      if (!skill?.description.trim())
        throw new Error(
          `Configuration error. Configure social.skill ${slug} before creating an AI Chat assistant.`,
        );
      return skill;
    });
  }

  async connect(profileId: string, skills: ISkill[]): Promise<void> {
    const links = await this.socialModule.profilesToSkills.find({
      params: {
        filters: {
          and: [{ column: "profileId", method: "eq", value: profileId }],
        },
      },
    });
    for (const [orderIndex, skill] of skills.entries()) {
      if (links.some((link: { skillId: string }) => link.skillId === skill.id))
        continue;
      await this.socialModule.profilesToSkills.create({
        data: { profileId, skillId: skill.id, orderIndex, variant: "default" },
      });
    }
  }

  async forDocument(profileId: string, key: string): Promise<ISkill> {
    const definition = AI_CHAT_DOCUMENTS.find(
      (document) => document.key === key,
    );
    if (!definition)
      throw new Error("Validation error. Unknown AI Chat document");
    const skills: ISkill[] = await this.socialModule.skill.find({
      params: {
        filters: {
          and: [{ column: "slug", method: "eq", value: definition.skillSlug }],
        },
      },
    });
    const skill = skills[0];
    if (!skill?.description.trim())
      throw new Error(
        `Configuration error. Document skill ${definition.skillSlug} is missing.`,
      );
    const links = await this.socialModule.profilesToSkills.find({
      params: {
        filters: {
          and: [
            { column: "profileId", method: "eq", value: profileId },
            { column: "skillId", method: "eq", value: skill.id },
          ],
        },
      },
    });
    if (!links.length)
      throw new Error(
        `Configuration error. Link ${definition.skillSlug} to this AI Chat assistant.`,
      );
    return skill;
  }
}
