export function util<T>(resItem: { data: T } | { data: T; meta: any }): T {
  if ("meta" in resItem && Array.isArray(resItem.data)) {
    return Object.assign(resItem.data, { _meta: resItem.meta });
  }

  return resItem.data as T;
}
