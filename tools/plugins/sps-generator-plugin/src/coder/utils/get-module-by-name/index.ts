export function util({ name }: { name: string }) {
  // should take website-builder from name @sps/website-builder/models/slide-backend-schema-relations
  const result = name.split("/")[1].split("-models")[0];

  return result;
}
