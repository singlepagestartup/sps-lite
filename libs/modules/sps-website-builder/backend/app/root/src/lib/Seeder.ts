import { models } from "@sps/sps-website-builder-backend-models";

export class Seeder {
  models: typeof models;
  seedResults = {
    "sps-website-builder": {},
  };

  constructor() {
    this.models = models;
  }

  async seed() {
    await this.clear();

    for (const [modelName, model] of Object.entries(this.models)) {
      if ("type" in model) {
        if (model.type === "model") {
          this.seedResults["sps-website-builder"][modelName] =
            await model.services.seed();
        }
      }
    }

    for (const [modelName, model] of Object.entries(this.models)) {
      if ("type" in model) {
        if (model.type === "relation") {
          this.seedResults["sps-website-builder"][modelName] =
            await model.services.seed({
              seedResults: this.seedResults,
            });
        }
      }
    }

    // for (const [modelName, model] of Object.entries(this.models)) {
    //   if ("Seeder" in model) {
    //     const seeder = new model.Seeder();

    //     if (seeder.type === "relation") {
    //       const seedResult = await seeder.seed({
    //         seedResults: this.seedResults,
    //       });

    //       this.seedResults["sps-website-builder"][modelName] = seedResult;
    //     }
    //   }
    // }
  }

  // async seed() {
  //   await this.clear();

  //   const pages = await this.models.page.services.find({
  //     filter: eq(schema.SPSWBPage.url, "/"),
  //   });

  //   let mainPage: any = pages?.[0];

  //   if (!mainPage) {
  //     mainPage = await this.models.page.services.create({
  //       data: {
  //         title: "Main Page",
  //         url: "/",
  //       },
  //     });
  //   }

  //   const layout = await this.createWebsiteLayout();

  //   await this.models.pagesToLayouts.services.create({
  //     data: {
  //       pageId: mainPage.id,
  //       layoutId: layout.id,
  //     },
  //   });

  //   const widget1 = await this.createWidget({
  //     title: "Hero Section",
  //   });

  //   await this.models.pagesToWidgets.services.create({
  //     data: {
  //       pageId: mainPage.id,
  //       widgetId: widget1.id,
  //     },
  //   });

  //   const widget2 = await this.createWidget({
  //     title: "Another hero Section",
  //   });

  //   await this.models.pagesToWidgets.services.create({
  //     data: {
  //       pageId: mainPage.id,
  //       widgetId: widget2.id,
  //     },
  //   });
  // }

  async clear() {
    for (const [index, model] of Object.entries(this.models)) {
      const entities = await model.services.find();

      for (const entity of entities) {
        await model.services.delete({
          id: entity.id,
        });
      }
    }
  }

  // async createWebsiteLayout() {
  //   const layout = await this.models.layout.services.create({
  //     data: {
  //       title: "Main Page Layout",
  //     },
  //   });

  //   const footer = await this.createWebsiteFooter();
  //   const navbar = await this.createWebsiteNavbar();

  //   await this.models.layoutsToNavbars.services.create({
  //     data: {
  //       layoutId: layout.id,
  //       navbarId: navbar.id,
  //     },
  //   });

  //   await this.models.layoutsToFooters.services.create({
  //     data: {
  //       layoutId: layout.id,
  //       footerId: footer.id,
  //     },
  //   });

  //   return layout;
  // }

  // async createWebsiteNavbar() {
  //   const navbar = await this.models.navbar.services.create({
  //     data: {
  //       title: "Navbar",
  //     },
  //   });

  //   const navbarWidget = await this.models.widget.services.create({
  //     data: {
  //       title: "Navbar Widget",
  //     },
  //   });

  //   await this.models.navbarsToWidgets.services.create({
  //     data: {
  //       navbarId: navbar.id,
  //       widgetId: navbarWidget.id,
  //     },
  //   });

  //   const navbarBlock = await this.models.navbarBlock.services.create({
  //     data: {
  //       title: "Navbar Block",
  //     },
  //   });

  //   const button = await this.createButton();

  //   await this.models.navbarBlocksToButtons.services.create({
  //     data: {
  //       navbarBlockId: navbarBlock.id,
  //       buttonId: button.id,
  //     },
  //   });

  //   await this.models.widgetsToNavbarBlocks.services.create({
  //     data: {
  //       widgetId: navbarWidget.id,
  //       navbarBlockId: navbarBlock.id,
  //     },
  //   });

  //   return navbar;
  // }

  // async createButton() {
  //   const button = await this.models.button.services.create({
  //     data: {
  //       title: "Button",
  //     },
  //   });

  //   return button;
  // }

  // async createWebsiteFooter() {
  //   const footer = await this.models.footer.services.create({
  //     data: {
  //       title: "Footer",
  //     },
  //   });

  //   const footerWidget = await this.models.widget.services.create({
  //     data: {
  //       title: "Footer Widget",
  //     },
  //   });

  //   await this.models.footersToWidgets.services.create({
  //     data: {
  //       footerId: footer.id,
  //       widgetId: footerWidget.id,
  //     },
  //   });

  //   const footerBlock = await this.models.footerBlock.services.create({
  //     data: {
  //       title: "Footer Block",
  //     },
  //   });

  //   await this.models.widgetsToFooterBlocks.services.create({
  //     data: {
  //       widgetId: footerWidget.id,
  //       footerBlockId: footerBlock.id,
  //     },
  //   });

  //   return footer;
  // }

  // async createWidget({ title }: { title: string }) {
  //   const widget = await this.models.widget.services.create({
  //     data: {
  //       title: "Widget | " + Math.random().toString(36).substring(7),
  //     },
  //   });

  //   const heroSectionBlock = await this.models.heroSectionBlock.services.create(
  //     {
  //       data: {
  //         title,
  //       },
  //     },
  //   );

  //   await this.models.widgetsToHeroSectionBlocks.services.create({
  //     data: {
  //       widgetId: widget.id,
  //       heroSectionBlockId: heroSectionBlock.id,
  //     },
  //   });

  //   return widget;
  // }
}
