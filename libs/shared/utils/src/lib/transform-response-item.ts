export function isObject(data: any) {
  return data && typeof data === "object";
}

export function snakeToCamel(str: string) {
  if (str[0] === "_") {
    return str;
  }

  return str.replace(/([-_][a-z])/gi, (char) => {
    return char.toUpperCase().replace("-", "").replace("_", "");
  });
}

export function isArray(data: any) {
  return data && Array.isArray(data);
}

export function transformEntriesInObj(item: any) {
  if (isObject(item) && !isArray(item)) {
    const entries = Object.entries(item).map((entry) => {
      const key = snakeToCamel(entry[0]);

      let value: any = entry[1];

      if (isObject(value)) {
        value = transformEntriesInObj(value);
      } else if (isArray(value)) {
        value = value.map((elem: any) => transformEntriesInObj({ item: elem }));
      }

      return [key, value];
    });

    return Object.fromEntries(entries);
  }

  return item;
}

export function transformResponseItem(resItem: any) {
  let passItem;

  if (isArray(resItem)) {
    passItem = resItem.map((item: any) => transformResponseItem(item));
    return passItem;
  }

  if (isObject(resItem)) {
    passItem = { ...resItem } as any;

    if (isArray(resItem.data)) {
      passItem = [...resItem.data];
    } else if (isObject(resItem.data)) {
      passItem = transformEntriesInObj(resItem.data);
    } else if (resItem.data === null) {
      passItem = null;
    } else {
      passItem = transformEntriesInObj(resItem);
    }

    if (resItem?.meta && isObject(resItem.meta)) {
      passItem._meta = { ...resItem.meta };
    }

    for (const key in passItem) {
      passItem[key] = transformResponseItem(passItem[key]);
    }

    return passItem;
  }

  return resItem;
}
