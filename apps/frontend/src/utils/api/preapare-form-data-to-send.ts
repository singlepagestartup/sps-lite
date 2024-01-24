const R = require("ramda");

export function appendFilesToFormData(formData: any, files: any) {
  if (Object.keys(files).length) {
    for (const key of Object.keys(files)) {
      if (Array.isArray(files[key])) {
        for (const [_, file] of files[key].entries()) {
          formData.append(`files.${key}`, file);
        }
      } else {
        formData.append(`files.${key}`, files[key]);
      }
    }
  }
}

export function prepareFormDataToSend(params: any) {
  const { data, files } = params;

  let passData = { ...data };
  delete passData.files;

  if (files) {
    for (const key of Object.keys(files)) {
      const delPath = key.replaceAll("[", ".")?.replaceAll("]", "")?.split(".");

      const cleared = delByPath({ ...passData }, delPath);

      // console.log("🚀 ~ prepareFormDataToSend ~ cleared", cleared);

      passData = cleared;
    }
  }

  const formData = new FormData();
  formData.append("data", JSON.stringify(passData));

  if (files) {
    appendFilesToFormData(formData, files);
  }

  // console.log("🚀 ~ prepareFormDataToSend ~ passData", passData, files);

  return formData;
}

function delByPath(obj: any, path: any[]): any {
  if (path.length > 1) {
    if (Array.isArray(obj)) {
      const passArray = [];

      for (const [index, el] of obj.entries()) {
        if (`${index}` === path[0]) {
          passArray.push(delByPath(obj[path[0]], R.drop(1, path)));

          continue;
        }

        passArray.push(el);
      }

      return passArray;
    } else {
      return {
        ...obj,
        [path[0]]: delByPath(obj[path[0]], R.drop(1, path)),
      };
    }
  }

  obj[path[0]] = null;

  return obj;
}
