import jsonwebtoken from "jsonwebtoken";
import StripeClient from "./StripeClient";
import strapiUtils from "@strapi/utils";
import CryptoProcessing from "./CryptoProcessing";
const { ApplicationError } = strapiUtils.errors;

export default class Provider {
  invoice: any;

  constructor({ invoice }: { invoice: any }) {
    this.invoice = invoice;
  }

  async proceed() {
    const sign = jsonwebtoken.sign(
      JSON.stringify(this.invoice),
      strapi.plugin("sps-billing").config("JWT_SECRET"),
    );

    if (this.invoice.provider === "stripe") {
      const stripe = new StripeClient();

      const session = await stripe.createCheckout({
        amount: this.invoice.amount,
        invoiceId: this.invoice.id,
        sign,
        redirectTo: this.invoice.redirect_to,
      });

      const updatedInvoice = await strapi
        .service("plugin::sps-billing.invoice")
        // @ts-ignore
        .update(this.invoice.id, {
          data: {
            sign,
            payment_url: session.url,
            provider_data: session,
          },
          populate: "*",
        });

      return updatedInvoice;
    } else if (this.invoice.provider === "zero_x_processing") {
      const filledCurrency =
        this.invoice.chain === "erc20"
          ? this.invoice.currency
          : `${this.invoice.currency} (${this.invoice.chain})`;

      // 0xProcessing
      const cryptoProcessing = new CryptoProcessing();
      const session = await cryptoProcessing.createCheckout({
        amount: this.invoice.amount,
        invoiceId: this.invoice.id,
        userEmail: this.invoice?.user?.email,
        userId: this.invoice?.user?.id,
        redirectTo: this.invoice.redirect_to,
        currency: filledCurrency,
      });

      if (!session) {
        strapi
          .service("plugin::sps-billing.invoice")
          // @ts-ignore
          .update(this.invoice.id, {
            data: {
              status: "failed",
            },
          });

        throw new ApplicationError("Invalid checkout data");
      }

      const updatedInvoice = await strapi
        .service("plugin::sps-billing.invoice")
        // @ts-ignore
        .update(this.invoice.id, {
          data: {
            payment_url: session?.redirectUrl,
            provider_data: session,
          },
          populate: "*",
        });

      return updatedInvoice;
    }
  }
}
