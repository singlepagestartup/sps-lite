import { app } from "./app";
import { Actor } from "@sps/shared-bdd-steps";
import { routes } from "./routes";
import * as schema from "@sps/sps-website-builder-backend-schema";
import { drizzle } from "drizzle-orm/postgres-js";
import { postgres } from "@sps/shared-backend-database-config";
import { and, eq } from "drizzle-orm";

export const db = drizzle(postgres, { schema });

describe("sps-website-builder app", () => {
  it("request to the root will return status 200", async () => {
    const actionObject = app;

    const me = new Actor({
      actionObject,
      iAm: "ApiClient",
    });

    await me.goTo({ path: "/" });
    const res = await me.getResult();

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ data: "sps-website-builder" });
  });

  for (const route of Object.keys(routes)) {
    if (route === "/pages") {
      continue;
    }

    it(`by POST request to /api${route} I want to create new entity`, async () => {
      const actionObject = app;

      const me = new Actor({
        actionObject,
        iAm: "ApiClient",
      });

      await me.passData({
        path: route,
        data: { title: `New entity by ${route}` },
        passAs: "form-data",
        method: "POST",
      });

      const res = await me.getResult();
      const resultData = await res.json();

      expect(res.status).toBe(201);
      expect(resultData.data.title).toEqual(`New entity by ${route}`);
    });

    it(`by PATCH request to /api${route}/:uuid I want to update entity`, async () => {
      const actionObject = app;

      const me = new Actor({
        actionObject,
        iAm: "ApiClient",
      });

      await me.passData({
        path: route,
        data: { title: `New not updated entity by ${route}` },
        passAs: "form-data",
        method: "POST",
      });

      const createResult = await me.getResult();
      const createData = await createResult.json();

      await me.passData({
        path: `${route}/${createData.data.id}`,
        data: { title: `New updated entity by ${route}` },
        passAs: "form-data",
        method: "PATCH",
      });

      const updateResult = await me.getResult();
      const updateData = await updateResult.json();

      expect(updateResult.status).toBe(200);
      expect(updateData.data.title).toEqual(`New updated entity by ${route}`);
    });
  }

  it(`by GET request to /api/get-urls I want to get list of urls`, async () => {
    const slide = await db
      .insert(schema.SlideTable)
      .values({
        title: "Slide 1",
      })
      .returning();

    try {
      // check if page exists
      const page = await db
        .insert(schema.PageTable)
        .values({
          title: "Slides Page",
          url: "/slides/[module::sps-website-builder.slide.id]",
        })
        .returning();
    } catch (error) {
      //
    }

    const actionObject = app;

    const me = new Actor({
      actionObject,
      iAm: "ApiClient",
    });

    await me.goTo({
      path: "/pages/get-urls",
    });

    const res = await me.getResult();
    const resultData = await res.json();

    expect(res.status).toBe(200);
    expect(Array.isArray(resultData.data.urls)).toEqual(true);
  });

  it(`by GET request to /api/get-by-url?url=/slides/:uuid I want to get page info`, async () => {
    const slide = await db
      .insert(schema.SlideTable)
      .values({
        title: "Slide 1",
      })
      .returning();

    try {
      // check if page exists
      const page = await db
        .insert(schema.PageTable)
        .values({
          title: "Slides Page",
          url: "/slides/[sps-website-builder.slide.id]",
        })
        .returning();
    } catch (error) {
      //
    }

    const actionObject = app;

    const me = new Actor({
      actionObject,
      iAm: "ApiClient",
    });

    await me.goTo({
      path: `/pages/get-by-url?url=/slides/${slide[0].id}`,
    });

    const res = await me.getResult();
    const resultData = await res.json();

    expect(res.status).toBe(200);
    expect(resultData.data.url).toEqual(
      "/slides/[sps-website-builder.slide.id]",
    );
  });

  it.only(`by POST request to /api/pages with "layouts" payload I want to attach layout to page `, async () => {
    const layout = await db
      .insert(schema.LayoutTable)
      .values({
        title: `Attached to page layout ${Math.random().toFixed(5).toString()}`,
      })
      .returning();

    try {
      // check if page exists
      const page = await db
        .insert(schema.PageTable)
        .values({
          title: "Attached to layout page",
          url: "/attached-to-layout-page",
        })
        .returning();
    } catch (error) {
      //
    }

    const relPtL = await db.select().from(schema.PagesToLayoutsTable);

    // console.log(`🚀 ~ it.only ~ relPtL:`, relPtL);

    // console.log(
    //   `🚀 ~ it.only ~ schema.PagesToLayoutsTable:`,
    //   schema.PagesToLayoutsTable,
    // );

    // console.log(`🚀 ~ it.only ~ relPtL:`, relPtL);

    const page = await db
      .select()
      .from(schema.PageTable)
      .where(and(eq(schema.PageTable.title, "Attached to layout page")));

    // console.log(`🚀 ~ it ~ page:`, page);
    // console.log(`🚀 ~ it.only ~ layout:`, layout);

    const actionObject = app;

    const me = new Actor({
      actionObject,
      iAm: "ApiClient",
    });

    await me.passData({
      method: "PATCH",
      path: `/pages/${page[0].id}`,
      data: {
        title: "Attached to layout page",
        layouts: [{ id: layout[0].id }],
      },
      passAs: "form-data",
    });

    const res = await me.getResult();
    const resultData = await res.json();

    expect(res.status).toBe(200);
    // expect(resultData.data.url).toEqual(
    //   "/slides/[sps-website-builder.slide.id]",
    // );
  });
});
