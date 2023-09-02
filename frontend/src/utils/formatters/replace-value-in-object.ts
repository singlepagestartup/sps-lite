export default function replaceValueInObject({
  obj,
  oldValue,
  newValue,
}: {
  obj: any;
  oldValue: any;
  newValue: any;
}): any {
  if (obj instanceof Array) {
    return obj.map((item: any) =>
      replaceValueInObject({ obj: item, oldValue, newValue }),
    );
  } else if (obj instanceof Object) {
    return Object.keys(obj).reduce(
      (acc: any, key: any) => ({
        ...acc,
        [key]: replaceValueInObject({
          obj: obj[key],
          oldValue,
          newValue,
        }) as any,
      }),
      {},
    );
  } else {
    return obj === oldValue ? newValue : obj;
  }
}
