"use strict";
import strapiUtils from "@rogwild/strapi-utils";
import path from "path";
import customizeCoreStrapi from "./utils/bootstrap/customize-core-strapi";
import setPermissions from "./utils/bootstrap/set-permissions";
import clearMediaLibrary from "./utils/bootstrap/clear-media-library";
import Telegram from "./services/Telegram";

export default {
  async bootstrap({ strapi }) {
    customizeCoreStrapi({ strapi });
    await setPermissions();

    strapi.errorCatcher = (...error) => {
      console.log("🚀 ~ strapi.errorCatcher= ~ error:", error);

      strapi.plugin("sentry").service("sentry").sendError(error);
    };

    console.error = strapi.errorCatcher;

    if (process.env.CLEAR_MEDIA_LIBRARY && !process.env.SEED_ENTITES) {
      clearMediaLibrary();
    }

    if (process.env.SEED_ENTITES) {
      try {
        const apiPath = path.join(__dirname, "./api");
        strapiUtils.seeder(apiPath).then(() => {
          if (process.env.CLEAR_MEDIA_LIBRARY) {
            clearMediaLibrary();
          }
        });
      } catch (error) {
        console.log("🚀 ~ bootstrap ~ seeder ~ error: ", error.message);

        strapi.errorCatcher(error);
      }
    }

    if (process.env.RUN_TELEGRAM_BOT) {
      const telegramBot = new Telegram();
      strapi.telegram = telegramBot;
    }

    if (process.env.MAKE_NEW_SEED) {
      const mainApiPath = path.join(__dirname, "../../src", "./api");
      await strapiUtils.dumper(mainApiPath);
    }
  },
};
