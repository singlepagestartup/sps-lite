/**
 * invoice controller
 */

import crypto from "crypto";
import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "plugin::sps-billing.invoice",
  ({ strapi }) => ({
    async confirm(ctx: any) {
      ctx;
      const { id } = ctx.params;
      const { sign, redirect_to } = ctx.query;
      const invoice = await strapi
        .service("plugin::sps-billing.invoice")
        // @ts-ignore
        .findOne(id);
      if (sign === invoice.sign) {
        // @ts-ignore
        ctx.request.body = { data: { status: "success" } };
        await super.update(ctx);
        // @ts-ignore
        return ctx.redirect(`${process.env.FRONTEND_URL}${redirect_to}`);
      }
      // @ts-ignore
      return ctx.redirect(`${process.env.FRONTEND_URL}${redirect_to}`);
    },
    async webhook(ctx: any) {
      const { Signature, BillingID, PaymentId, Email, Currency } =
        // @ts-ignore
        ctx.request.body;
      // @ts-ignore
      const string = `${PaymentId}:${process.env.ZERO_X_PROCESSING_SHOP_ID}:${Email}:${Currency}:${process.env.ZERO_X_PROCESSING_WEBHOOK_PASSWORD}`;
      const hash = crypto.createHash("md5").update(string).digest("hex");
      if (hash === Signature) {
        await strapi
          .service("plugin::sps-billing.invoice")
          // @ts-ignore
          .update(BillingID, {
            data: {
              status: "success",
            },
          });
      }
      return { success: true };
    },
  }),
);
