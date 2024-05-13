import { models as spsWebsiteBuilderModels } from "@sps/sps-website-builder-backend-models";

export async function service({
  modelRoutes,
  page,
}: {
  modelRoutes: string[];
  page: {
    url: string;
  };
}) {
  const filledPages: any = [];

  const modelRoute = modelRoutes[0];
  const sanitizedRoute = modelRoute
    .replace("[", "")
    .replace("]", "")
    .split(".");

  if (sanitizedRoute.length < 3) {
    throw new Error(
      "Invalid model param, should be 3 parts separated by dots. Eg: [sps-website-builder.slide.id]",
    );
  }

  const module = sanitizedRoute[0];
  const modelName = sanitizedRoute[1];
  const param = sanitizedRoute[2];

  const model =
    spsWebsiteBuilderModels[modelName as keyof typeof spsWebsiteBuilderModels];

  // @ts-ignore
  if (!model.serices.find) {
    return filledPages;
  }

  // @ts-ignore
  const entities = await model.find();

  entities.forEach((entity: any) => {
    const uri = `${entity[param]}`;
    const pathUrl = page.url
      .split("/")
      .map((url: string) => {
        if (url === modelRoute) {
          return uri;
        }

        return url;
      })
      .filter((url: string) => url !== "");

    filledPages.push({
      url: `/${pathUrl.join("/")}`,
      id: entity.id,
    });
  });

  return filledPages;
}
