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

  it(`by POST request to /api/pages with "layouts" payload I want to attach layout to page `, async () => {
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

    // const pages = await spsWebsiteBuilderModels.page.find({ filter });
    const page = await spsWebsiteBuilderModels.page.findById({
      id: "91c66ff9-a7c9-493a-b953-a3bceb468016",
    });

    console.log(`🚀 ~ it.only ~ page:`, page);

    expect(page["layouts"]).toBeDefined();
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
