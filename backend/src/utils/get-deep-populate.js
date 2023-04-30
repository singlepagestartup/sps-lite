const { merge } = require("lodash/fp");

/**
 * Populate the model for Dynamic Zone components
 * @param {Object} attribute - Attribute containing the components
 * @param {String[]} attribute.components - IDs of components
 * @param {Object} options - Options to apply while populating
 * @param {Number} options.maxLevel
 * @param {Number} level
 * @returns {{populate: Object}}
 */
function getPopulateForDZ(attribute, options, level) {
  const populatedComponents = (attribute.components || []).map((componentUID) =>
    getDeepPopulate(componentUID, options, level + 1),
  );

  return { populate: populatedComponents.reduce(merge, {}) };
}

/**
 * Get the populated value based on the type of the attribute
 * @param {String} attributeName - Name of the attribute
 * @param {Object} model - Model of the populated entity
 * @param {Object} model.attributes
 * @param {Object} options - Options to apply while populating
 * @param {Number} options.maxLevel
 * @param {Number} level
 * @returns {Object}
 */
function getPopulateFor(attributeName, model, options, level) {
  const attribute = model.attributes[attributeName];

  switch (attribute.type) {
    case "relation":
      return {
        [attributeName]: {
          populate: getDeepPopulate(attribute.target, options, level + 1),
        },
      };
    case "component":
      return {
        [attributeName]: {
          populate: getDeepPopulate(attribute.component, options, level + 1),
        },
      };
    case "media":
      return {
        [attributeName]: { populate: "folder" },
      };
    case "dynamiczone":
      return {
        [attributeName]: getPopulateForDZ(attribute, options, level),
      };
    default:
      return {};
  }
}

/**
 * Deeply populate a model based on UID
 * @param {String} uid - Unique identifier of the model
 * @param {Object} [options] - Options to apply while populating
 * @param {Number} [options.maxLevel=Infinity]
 * @param {Number} [level=1] - Current level of nested call
 * @returns {Object}
 */
const getDeepPopulate = (uid, { maxLevel = 4 } = {}, level = 1) => {
  if (level > maxLevel) {
    return {};
  }

  const model = strapi.getModel(uid);

  return Object.keys(model.attributes).reduce(
    (populateAcc, attributeName) =>
      merge(
        populateAcc,
        getPopulateFor(attributeName, model, { maxLevel }, level),
      ),
    {},
  );
};

module.exports = getDeepPopulate;
