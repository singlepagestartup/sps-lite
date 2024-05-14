import { BACKEND_URL } from "@sps/shared-utils";
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

  const model: any =
    spsWebsiteBuilderModels[modelName as keyof typeof spsWebsiteBuilderModels];

  const entities: any[] = [];

  if (!model?.["serices"]?.["find"]) {
    try {
      const serviceData = await fetch(
        `${BACKEND_URL}/api/${module}/${modelName}`,
      ).then((res) => res.json());

      if (serviceData?.data?.length) {
        serviceData.data.forEach((entity: any) => {
          entities.push(entity);
        });
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    const dbEntities = await model.find();

    if (dbEntities?.length) {
      dbEntities.forEach((entity: any) => {
        entities.push(entity);
      });
    }
  }

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
