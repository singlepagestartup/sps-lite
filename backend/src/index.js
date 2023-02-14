'use strict';
const strapiUtils = require('@rogwild/strapi-utils');
const path = require('path');

module.exports = {
    register(/*{ strapi }*/) {},

    async bootstrap({ strapi }) {
        await strapiUtils.utils.customizeCoreStrapi({ strapi });
        await strapiUtils.utils.setPermissions();

        if (process.env.SEED_ENTITES) {
            try {
                const apiPath = path.join(__dirname, './api');
                await strapiUtils.seeder(apiPath);
            } catch (error) {
                console.log(`🚀 ~ bootstrap ~ seeder ~ error: `, error.message);
            }
        }

        if (process.env.MAKE_NEW_SEED) {
            const mainApiPath = path.join(__dirname, '../../src', './api');
            await strapiUtils.dumper(mainApiPath);
        }
    },
};
