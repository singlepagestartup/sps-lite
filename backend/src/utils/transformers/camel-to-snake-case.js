function camelToSnake(name) {
  return name.replace(/([A-Z])/g, function ($1) {
    return "_" + $1.toLowerCase();
  });
}

function camelCaseKeysToSnake(obj) {
  // console.log(`🚀 ~ camelCaseKeysToSnake ~ obj`, obj);
  if (typeof obj != "object") return obj;

  if (Array.isArray(obj)) {
    const newObj = [];

    for (const objItem of obj) {
      const snaked = camelCaseKeysToSnake(objItem);
      newObj.push(snaked);
    }

    return newObj;
  } else {
    // console.log(`🚀 ~ camelCaseKeysToSnake ~ obj`, obj);
    const newObj = { ...obj };
    for (var oldName in newObj) {
      // console.log(`🚀 ~ camelCaseKeysToSnake ~ oldName`, oldName);
      // Camel to underscore
      const newName = camelToSnake(oldName);

      // Only process if names are different
      if (newName != oldName) {
        // Check for the old property name to avoid a ReferenceError in strict mode.
        if (newObj.hasOwnProperty(oldName)) {
          newObj[newName] = newObj[oldName];
          delete newObj[oldName];
        }
      }

      // Recursion
      if (typeof newObj[newName] == "object") {
        newObj[newName] = camelCaseKeysToSnake(newObj[newName]);
      }
    }
    // console.log(`🚀 ~ camelCaseKeysToSnake ~ newObj`, newObj);

    return newObj;
  }
}

module.exports = {
  camelCaseKeysToSnake,
};
