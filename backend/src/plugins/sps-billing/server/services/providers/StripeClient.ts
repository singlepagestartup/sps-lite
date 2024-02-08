import Stripe from "stripe";

export default class StripeClient {
  stripe: Stripe;
  STRIPE_API_KEY: string;
  BACKEND_URL: string;
  FRONTEND_URL: string;

  constructor() {
    this.STRIPE_API_KEY = strapi.plugin("sps-billing").config("STRIPE_API_KEY");
    this.BACKEND_URL = strapi.plugin("sps-billing").config("BACKEND_URL");
    this.FRONTEND_URL = strapi.plugin("sps-billing").config("FRONTEND_URL");

    this.stripe = new Stripe(this.STRIPE_API_KEY, {});
  }

  async createCheckout({ amount, invoiceId, sign, redirectTo = "" }) {
    let stripeProduct: any = await this.stripe.products.search({
      query: `name:'${amount}' AND active:'true'`,
    });

    if (!stripeProduct?.data?.length) {
      stripeProduct = await this.stripe.products.create({
        name: `${amount}`,
        default_price_data: {
          currency: "usd",
          unit_amount: +amount * 100,
        },
      });
    } else {
      stripeProduct = stripeProduct.data[0];
    }

    const checkout = await this.stripe.checkout.sessions.create({
      line_items: [{ price: stripeProduct.default_price, quantity: 1 }],
      mode: "payment",
      success_url: `${this.BACKEND_URL}/api/sps-billing/invoices/${invoiceId}/confirm?sign=${sign}&redirect_to=${redirectTo}`,
      cancel_url: `${this.FRONTEND_URL}${redirectTo}`,
    });

    // console.log(`🚀 ~ createCheckout ~ checkout`, checkout);

    return checkout;
  }

  async sendInvoice({ email, product }) {
    let customer: any = await this.stripe.customers.search({
      query: `email:'${email}'`,
    });

    if (!customer?.data?.length) {
      customer = await this.stripe.customers.create({
        email,
      });
    } else {
      customer = customer.data[0];
    }

    let stripeProduct: any = await this.stripe.products.search({
      query: `name:'${product?.title}' AND active:'true'`,
    });

    if (!stripeProduct?.data?.length) {
      stripeProduct = await this.stripe.products.create({
        name: product.title,
        default_price_data: {
          currency: "usd",
          unit_amount: product.price * 100,
        },
      });
    } else {
      stripeProduct = stripeProduct.data[0];
    }

    await this.stripe.invoiceItems.create({
      // You can create an invoice item after the invoice
      customer: customer.id,
      price: stripeProduct.default_price,
    });

    const invoice = await this.stripe.invoices.create({
      customer: customer.id,
      collection_method: "send_invoice",
      due_date: (new Date().getTime() + 24 * 60 * 60 * 1000) / 1000,
    });

    await this.stripe.invoices.sendInvoice(invoice.id);

    console.log("🚀 ~ sendInvoice ~ invoice", invoice);
  }
}
