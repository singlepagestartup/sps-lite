export default {
  async afterCreate(event) {
    await clearAttributesWithEmptyRelations();
  },

  async afterUpdate(event) {
    await clearAttributesWithEmptyRelations();
  },
};

async function clearAttributesWithEmptyRelations() {
  const schema: any = strapi.plugin("sps-ecommerce").contentTypes.attribute;

  const { results: attributes }: any = await strapi
    .service("plugin::sps-ecommerce.attribute")
    .find({
      filters: {
        attribute_key: {
          id: {
            $notNull: true,
          },
        },
      },
      populate: "*",
      pagination: {
        limit: -1,
      },
    });

  const relationAttributesKeys: string[] = [];
  for (const [schemaAttributeKey, schemaAttributeValue] of Object.entries(
    schema.attributes,
  ) as any) {
    if (
      ["attribute_key", "createdBy", "updatedBy", "localizations"].includes(
        schemaAttributeKey,
      )
    ) {
      continue;
    }
    if (schemaAttributeValue.type === "relation") {
      relationAttributesKeys.push(schemaAttributeKey);
    }
  }

  for (const attribute of attributes) {
    try {
      if (attribute.attribute_key.not_to_clear) {
        continue;
      }

      const attributeRelations = Object.entries(attribute)
        .filter(([key]) => relationAttributesKeys.includes(key))
        .map((kv) => kv[1])
        .flat(1);

      if (attributeRelations.length) {
        continue;
      }

      await strapi
        .service("plugin::sps-ecommerce.attribute")
        .delete(attribute.id);
    } catch (error) {
      console.log("🚀 ~ attribute ~ afterCreate ~ error:", error);
    }
  }
}
