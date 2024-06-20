export function util({ name }: { name: string }) {
  // should take slide from name @sps/sps-website-builder/models/slide-backend-schema-relations
  const result = name.split("models-")[1].split("-backend")[0];

  return result;
}
