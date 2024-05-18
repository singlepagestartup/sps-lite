import { schema } from "@sps/sps-db-provider";
import { models } from "@sps/sps-website-builder-backend-models";
import { eq } from "drizzle-orm";

export class Seeder {
  models: typeof models;

  constructor() {
    this.models = models;
  }

  async seed() {
    const pages = await this.models.page.services.find({
      filter: eq(schema.SPSWBPage.url, "/"),
    });

    let mainPage: any = pages?.[0];

    if (!mainPage) {
      mainPage = await this.models.page.services.create({
        data: {
          title: "Main Page",
          url: "/",
        },
      });
    }

    const mainPageLayout = await this.models.layout.services.create({
      data: {
        title: "Main Page Layout",
      },
    });

    await this.models.pagesToLayouts.services.create({
      data: {
        pageId: mainPage.id,
        layoutId: mainPageLayout.id,
      },
    });

    const heroSectionWidget = await this.models.widget.services.create({
      data: {
        title: "Hero Section Widget",
      },
    });

    const heroSectionBlock = await this.models.heroSectionBlock.services.create(
      {
        data: {
          title: "Hero Section",
        },
      },
    );
    await this.models.widgetsToHeroSectionBlocks.services.create({
      data: {
        widgetId: heroSectionWidget.id,
        heroSectionBlockId: heroSectionBlock.id,
      },
    });

    await this.models.pagesToWidgets.services.create({
      data: {
        pageId: mainPage.id,
        widgetId: heroSectionWidget.id,
      },
    });

    const navbarBlock = await this.models.navbarBlock.services.create({
      data: {
        title: "Navbar",
      },
    });

    await this.models.footerBlock.services.create({
      data: {
        title: "Footer",
      },
    });

    const navbar = await this.models.navbar.services.create({
      data: {
        title: "Navbar",
      },
    });

    const navbarWidget = await this.models.widget.services.create({
      data: {
        title: "Navbar Widget",
      },
    });

    const navbarBlockWidget =
      await this.models.widgetsToNavbarBlocks.services.create({
        data: {
          widgetId: navbarWidget.id,
          navbarBlockId: navbarBlock.id,
        },
      });

    await this.models.navbarsToWidgets.services.create({
      data: {
        navbarId: navbar.id,
        widgetId: navbarWidget.id,
      },
    });

    await this.models.layoutsToNavbars.services.create({
      data: {
        layoutId: mainPageLayout.id,
        navbarId: navbar.id,
      },
    });
  }
}
