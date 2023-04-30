const sanitizeDataForClone = ({ data, keysForIds = [] }) => {
  data;
  const sanitized = {};
  for (const entry of Object.entries(data)) {
    entry;
    if (entry[0] !== "id") {
      entry[0];
      if (typeof entry[1] === "object" && entry[1] !== null) {
        entry[0];
        if (keysForIds.includes(entry[0])) {
          if (Array.isArray(entry[1])) {
            sanitized[entry[0]] = [];
            for (const entryItem of entry[1]) {
              entryItem;
              sanitized[entry[0]].push(entryItem.id);
            }
            continue;
          } else {
            sanitized[entry[0]] = entry[1].id;
            continue;
          }
        }
        if (Array.isArray(entry[1])) {
          entry[1];
          sanitized[entry[0]] = [];
          for (const entryItem of entry[1]) {
            entryItem;
            sanitized[entry[0]].push(
              sanitizeDataForClone({ data: entryItem, keysForIds }),
            );
          }
        } else {
          sanitized[entry[0]] = sanitizeDataForClone({ data: entry[1] });
        }
      } else {
        sanitized[entry[0]] = entry[1];
      }
    }
  }
  return sanitized;
};

module.exports = sanitizeDataForClone;
