export function util(resItem: any) {
  const passItem = resItem.data;

  if (Array.isArray(resItem.data)) {
    passItem._meta = { ...resItem.meta };
  }

  return passItem;
}
