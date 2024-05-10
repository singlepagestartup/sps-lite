export function util({ name }: { name: string }) {
  // should take sps-website-builder from name @sps/sps-website-builder-models-slide-backend-schema-relations
  const result = name.split("/")[1].split("-models")[0];

  return result;
}
