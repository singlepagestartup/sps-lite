const strapiUtils = require('@rogwild/strapi-utils');

async function sendToRecievers({ event, sideEffect, payload }) {
    const { result } = event;

    if (sideEffect.provider === 'email') {
        const emailSettings = strapi.config.get('plugin.email');

        const template = await strapiUtils.api.createDocumentFromTemplate({
            uid: payload.uid,
            params: payload,
        });

        let recievers = [];

        for (const reciever of sideEffect?.recievers) {
            if (reciever.identifier) {
                recievers.push(reciever.identifier);
            } else if (reciever.admin?.email) {
                recievers.push(reciever.admin.email);
            } else if (reciever.user?.email) {
                recievers.push(reciever.user.email);
            }
        }

        recievers = [...new Set(recievers)];

        for (const reciever of recievers) {
            await strapi.plugins['email'].services.email.send({
                to: reciever,
                from: emailSettings.settings?.defaultFrom?.email || 'no-reply@apisps.ru', //e.g. single sender verification in SendGrid
                replyTo: emailSettings.settings?.defaultReplyTo || 'support@apisps.ru',
                subject: `${emailSettings.appName} | New ${payload.uid} Request`,
                html: template,
            });
        }
    }
}

module.exports = sendToRecievers;
