/**
 * attribute controller
 */
import { factories } from "@strapi/strapi";
import { parseBody } from "../../utils/transformers/transform";

const { isObject } = require("lodash/fp");
const { ValidationError } = require("@strapi/utils").errors;

const uid = "plugin::sps-subscription.attribute";

export default factories.createCoreController(uid, ({ strapi }) => ({
  async create(ctx: any) {
    const keys = ["string", "number", "boolean", "date", "datetime", "time"];

    const { query } = ctx.request;

    // @ts-ignore
    const { data, files } = parseBody(ctx);

    if (!isObject(data)) {
      throw new ValidationError("Missing 'data' payload in the request body");
    }

    const attributeKey: any = await strapi
      .service("plugin::sps-subscription.attribute-key")
      .findOne(data.attribute_key.id);

    if (
      keys
        .map((key) => data[key])
        .filter((value) => value !== null && value !== undefined)?.length > 1
    ) {
      throw new ValidationError("Only one attribute value can be set");
    }

    if (attributeKey.type in data) {
      //
    } else {
      throw new ValidationError(
        "Attribute value type does not match attribute key type",
      );
    }

    if (Array.isArray(data[attributeKey.type]) && !attributeKey.is_multiple) {
      throw new ValidationError("Passed attribute can't be multiple");
    }

    if (
      data[attributeKey.type] === "" ||
      (Array.isArray(data[attributeKey.type]) &&
        data[attributeKey.type].length === 0)
    ) {
      data[attributeKey.type] = null;
    }

    // sometimes deadlocks occur when creating attributes with the same attribute key
    // this is a workaround to prevent deadlocks (1-3 times maximum)
    let nextStage = false;
    let iteration = 0;
    do {
      const ranWithoutDeadlocks =
        await clearExistingAttributesWithTheSameAttributeKey({
          data,
        });
      nextStage = ranWithoutDeadlocks;
      iteration++;
    } while (!nextStage || iteration < 3);

    let isEmpty = true;
    for (const key of keys) {
      if (data[key]) {
        isEmpty = false;
        break;
      }
    }

    if (isEmpty) {
      return {};
    }

    if (Array.isArray(data[attributeKey.type])) {
      const entities: any[] = [];

      for (const dataArrayItem of data[attributeKey.type]) {
        const passData =
          typeof dataArrayItem === "object"
            ? { [attributeKey.type]: dataArrayItem[attributeKey.type] }
            : { [attributeKey.type]: dataArrayItem };

        const sanitizedInputData = await this.sanitizeInput(
          { ...data, ...passData },
          ctx,
        );
        const config = {
          string: "string",
          number: "number",
          boolean: "boolean",
          date: "date",
          datetime: "datetime",
          time: "time",
          attribute_key: "attribute_key",
        };

        const entity = await strapi.service(uid).findOrCreate({
          ...query,
          data: sanitizedInputData,
          files,
          config,
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        entities.push(sanitizedEntity);
      }

      return entities;
    }

    const passData =
      typeof data[attributeKey.type] === "object"
        ? { [attributeKey.type]: data[attributeKey.type][attributeKey.type] }
        : { [attributeKey.type]: data[attributeKey.type] };

    const sanitizedInputData = await this.sanitizeInput(
      { ...data, ...passData },
      ctx,
    );
    const config = {
      string: "string",
      number: "number",
      boolean: "boolean",
      date: "date",
      datetime: "datetime",
      time: "time",
      attribute_key: "attribute_key",
    };

    const entity = await strapi.service(uid).findOrCreate({
      ...query,
      data: sanitizedInputData,
      files,
      config,
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));

async function clearExistingAttributesWithTheSameAttributeKey({ data }) {
  const ranWithoutDeadlocks = true;
  const schema: any =
    strapi.plugin("sps-subscription").contentTypes["attribute-key"];

  const relationAttributes = Object.keys(schema.attributes).filter(
    (key) => schema.attributes[key].type === "relation",
  );

  for (const key of Object.keys(data)) {
    try {
      if (key === "attribute_key" || !relationAttributes.includes(key)) {
        continue;
      }

      for (const value of data[key]) {
        const { results: existingAttributes }: any = await strapi
          .service(uid)
          .find({
            filters: {
              attribute_key: data.attribute_key.id,
              [key]: value,
            },
            populate: "*",
          });

        if (existingAttributes.length) {
          for (const existingAttribute of existingAttributes) {
            await strapi.service(uid).removeRelations({
              id: existingAttribute.id,

              data: { [key]: [value] },
            });
          }
        }
      }
    } catch (error) {
      console.log("🚀 ~ attributes controller create ~ error:", error.message);
    }
  }

  return ranWithoutDeadlocks;
}
