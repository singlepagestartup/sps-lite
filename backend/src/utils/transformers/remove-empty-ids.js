const removeEmptyIds = (data) => {
  let modified;
  if (Array.isArray(data)) {
    modified = [...data];
  } else {
    modified = { ...data };
  }

  if (Array.isArray(modified)) {
    modified = modified.map((item) => removeEmptyIds(item));
  } else {
    for (const key in modified) {
      if (key === "id" && ["", null, undefined].indexOf(modified[key]) > -1) {
        delete modified[key];
      }
      if (Array.isArray(modified[key])) {
        modified[key] = modified[key].map((item) => removeEmptyIds(item));
      }
    }
  }

  console.log("🚀 ~ removeEmptyIds ~ data", data);
  return modified;
};

module.exports = removeEmptyIds;
