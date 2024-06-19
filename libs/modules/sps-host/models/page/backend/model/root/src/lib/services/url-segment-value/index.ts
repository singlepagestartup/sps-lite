import { service as findByUrl } from "../find-by-url";

export async function service(props: { url: string; segment: string }) {
  const entity = await findByUrl({
    url: props.url,
  });

  if (!entity) {
    throw new Error("Entity not found");
  }

  const entityUrlParts = entity.url.split("/").filter((part) => part !== "");
  const segmentIndex = entityUrlParts.findIndex((part) =>
    part.includes(props.segment),
  );

  if (segmentIndex === -1) {
    throw new Error("Segment Index not found in entity url");
  }

  const urlParts = props.url.split("/").filter((part) => part !== "");
  const segmentValue = urlParts[segmentIndex];

  if (!segmentValue) {
    throw new Error("Segment value not found in passed url");
  }

  return segmentValue;
}
