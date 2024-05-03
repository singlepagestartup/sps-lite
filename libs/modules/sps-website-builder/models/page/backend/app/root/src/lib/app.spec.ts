import { app } from "./app";
import { Actor } from "@sps/shared-bdd-steps";
import { models as spsWebsiteBuilderModels } from "@sps/sps-website-builder-backend-models";
import { model } from "@sps/sps-website-builder-models-page-backend-model";

describe("pages", () => {
  it(`by GET request to / I want to get pages`, async () => {
    const actionObject = app;

    const me = new Actor({
      actionObject,
      iAm: "ApiClient",
    });

    await me.goTo({
      path: "/",
    });

    const res = await me.getResult();
    const resultData = await res.json();

    expect(res.status).toBe(200);
    expect(Array.isArray(resultData.data)).toEqual(true);
  });

  it(`by POST request to / I want to create new page`, async () => {
    const actionObject = app;

    const me = new Actor({
      actionObject,
      iAm: "ApiClient",
    });

    const data = {
      title: "New page",
      content: "New page content",
      url: `/${Math.random().toFixed(5)}`,
    };

    await me.passData({
      path: `/`,
      method: "POST",
      passAs: "form-data",
      data,
    });

    const res = await me.getResult();
    const resultData = await res.json();

    expect(res.status).toBe(201);
    expect(resultData.data.title).toEqual(data.title);
  });

  it(`by PATCH request to /:uuid I want to update page`, async () => {
    const actionObject = app;

    const me = new Actor({
      actionObject,
      iAm: "ApiClient",
    });

    const data = {
      title: "New page",
      content: "New page content",
      url: `/${Math.random().toFixed(5)}`,
    };

    await me.passData({
      path: `/`,
      method: "POST",
      passAs: "form-data",
      data,
    });

    const res = await me.getResult();
    const resultData = await res.json();

    await me.passData({
      path: `/${resultData.data.id}`,
      method: "PATCH",
      passAs: "form-data",
      data: {
        ...data,
        title: "Updated title",
      },
    });

    const updateResult = await me.getResult();
    const updateResultData = await updateResult.json();

    expect(updateResult.status).toBe(200);
    expect(updateResultData.data.title).toEqual("Updated title");
  });

  it(`by GET request to /:uuid I want to get specific page`, async () => {
    const actionObject = app;

    const me = new Actor({
      actionObject,
      iAm: "ApiClient",
    });

    const data = {
      title: "New page",
      content: "New page content",
      url: `/${Math.random().toFixed(5)}`,
    };

    await me.passData({
      path: `/`,
      method: "POST",
      passAs: "form-data",
      data,
    });

    const res = await me.getResult();
    const resultData = await res.json();

    await me.goTo({
      path: `/${resultData.data.id}`,
    });

    const specificResult = await me.getResult();
    const specificUpdateResultData = await specificResult.json();

    expect(specificResult.status).toBe(200);
    expect(specificUpdateResultData.data.url).toEqual(data.url);
  });

  it(`by DELETE request to /:uuid I want to delete specific page`, async () => {
    const actionObject = app;

    const me = new Actor({
      actionObject,
      iAm: "ApiClient",
    });

    const data = {
      title: "New page",
      content: "New page content",
      url: `/${Math.random().toFixed(5)}`,
    };

    await me.passData({
      path: `/`,
      method: "POST",
      passAs: "form-data",
      data,
    });

    const createResult = await me.getResult();
    const createResultData = await createResult.json();

    await me.passData({
      path: `/${createResultData.data.id}`,
      method: "DELETE",
      passAs: "form-data",
      data: {},
    });

    const deleteResult = await me.getResult();
    const deleteResultData = await deleteResult.json();

    await me.goTo({
      path: `/${deleteResultData.data.id}`,
    });

    const specificResult = await me.getResult();
    // const specificUpdateResultData = await specificResult.json();

    expect(specificResult.status).toBe(404);
  });

  it(`by GET request to /get-urls I want to get list of urls`, async () => {
    const slide = await spsWebsiteBuilderModels.slide.create({
      data: {
        title: "Slide 1",
      },
    });

    try {
      // check if page exists
      const page = await model.create({
        data: {
          title: "Slides Page",
          url: "/slides/[sps-website-builder.slide.id]",
        },
      });
    } catch (error) {
      //
    }

    const actionObject = app;

    const me = new Actor({
      actionObject,
      iAm: "ApiClient",
    });

    await me.goTo({
      path: "/get-urls",
    });

    const res = await me.getResult();
    const resultData = await res.json();

    expect(res.status).toBe(200);
    expect(Array.isArray(resultData.data.urls)).toEqual(true);
  });

  it(`by GET request to /api/get-by-url?url=/slides/:uuid I want to get page info`, async () => {
    const slide = await spsWebsiteBuilderModels.slide.create({
      data: {
        title: "Slide 1",
      },
    });

    try {
      // check if page exists
      const page = await model.create({
        data: {
          title: "Slides Page",
          url: "/slides/[sps-website-builder.slide.id]",
        },
      });
    } catch (error) {
      //
    }

    const actionObject = app;

    const me = new Actor({
      actionObject,
      iAm: "ApiClient",
    });

    await me.goTo({
      path: `/get-by-url?url=/slides/${slide.id}`,
    });

    const res = await me.getResult();
    const resultData = await res.json();

    expect(res.status).toBe(200);
    expect(resultData.data.url).toEqual(
      "/slides/[sps-website-builder.slide.id]",
    );
  });
});
