function assignFilterKeys({ schema, config, data }) {
  const filters = {};
  const attributes = schema.attributes;
  schema; //?
  config; //?
  data; //?

  for (const configKey of Object.keys(config)) {
    configKey; //?
    if (attributes[configKey]) {
      attributes[configKey]; //?
      filters[configKey] = data[config[configKey]];
    }
  }

  filters; //?

  return filters;
}

module.exports = assignFilterKeys;
