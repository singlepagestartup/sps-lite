import { app } from "./app";
import { Actor } from "@sps/shared-bdd-steps";
import { routes } from "./routes";
import * as schema from "@sps/sps-website-builder-backend-schema";
import { drizzle } from "drizzle-orm/postgres-js";
import { postgres } from "@sps/shared-backend-database-config";
import { SQL, and, eq } from "drizzle-orm";
import { models as spsWebsiteBuilderModels } from "@sps/sps-website-builder-backend-models";
import { Table } from "@sps/sps-website-builder-models-page-backend-schema";

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

  it.only(`by POST request to /api/pages with "layouts" payload I want to attach layout to page `, async () => {
    const layout = await spsWebsiteBuilderModels.layout.create({
      data: {
        title: "Attached to page layout",
      },
    });

    try {
      // check if page exists
      const page = await spsWebsiteBuilderModels.page.create({
        data: {
          title: "Attached to layout page",
          url: "/attached-to-layout-page",
        },
      });
    } catch (error) {
      //
    }

    const filter: SQL<unknown> = eq(Table["title"], "Attached to layout page");

    const pages = await spsWebsiteBuilderModels.page.find({ filter });

    console.log(`🚀 ~ it.only ~ pages:`, JSON.stringify(pages));

    // const page = await db
    //   .select()
    //   .from(schema.PageTable)
    //   .where(and(eq(schema.PageTable.title, "Attached to layout page")));

    // const actionObject = app;

    // const me = new Actor({
    //   actionObject,
    //   iAm: "ApiClient",
    // });

    // await me.passData({
    //   method: "PATCH",
    //   path: `/pages/${page[0].id}`,
    //   data: {
    //     title: "Attached to layout page",
    //     layouts: [{ id: layout[0].id }],
    //   },
    //   passAs: "form-data",
    // });

    // const res = await me.getResult();
    // const resultData = await res.json();

    // expect(res.status).toBe(200);
    expect(234).toBe(200);
    // expect(resultData.data.url).toEqual(
    //   "/slides/[sps-website-builder.slide.id]",
    // );
  });
});

const r = [
  {
    id: "91c66ff9-a7c9-493a-b953-a3bceb468016",
    title: "Attached to layout page",
    url: "/attached-to-layout-page",
    description: "Description",
    createdAt: "2024-05-03T14:17:17.811Z",
    updatedAt: "2024-05-03T14:17:17.811Z",
    variant: "default",
    layouts: [
      {
        id: "b904f5cb-db67-41a6-a583-12ab086cb216",
        title: "Attached to page layout",
        className: null,
        createdAt: "2024-05-03T14:17:17.805Z",
        updatedAt: "2024-05-03T14:17:17.805Z",
        variant: "default",
      },
    ],
    herpu: [],
  },
];
