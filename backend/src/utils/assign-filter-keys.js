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
      if (data[config[configKey]]) {
        if (data[config[configKey]]?.id) {
          filters[configKey] = {
            id: {
              $eq: data[config[configKey]].id,
            },
          };
        } else {
          filters[configKey] = data[config[configKey]];
        }
      } else {
        if (schema.attributes[configKey].type === "relation") {
          filters[configKey] = {
            $null: true,
          };
        }
      }
    }
  }

  filters; //?

  return filters;
}

module.exports = assignFilterKeys;
