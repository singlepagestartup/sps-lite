/**
 * cart service
 */

import { factories } from "@strapi/strapi";
import findOrCreate from "../../utils/services/find-or-create";

const uid = "plugin::sps-ecommerce.cart";

export default factories.createCoreService(uid, ({ strapi }) => ({
  async findOrCreate(params) {
    const schema = strapi.plugin("sps-ecommerce").contentTypes.cart;

    return await findOrCreate(params, { uid, schema });
  },

  async getTotalAmount({ id }: { id: number }) {
    const cart = await strapi.service(uid).findOne(id, {
      populate: "*",
    });

    let totalAmount = 0;
    for (const order of cart.orders) {
      const orderAmount = await strapi
        .service("plugin::sps-ecommerce.order")
        .getTotalAmount({
          id: order.id,
        });

      totalAmount += orderAmount;
    }

    return totalAmount;
  },

  async createInvoice({ id }: { id: number }) {
    const cart = await strapi.service(uid).findOne(id, {
      populate: "*",
    });

    const invoiceAmount = await strapi
      .service("plugin::sps-ecommerce.cart")
      .getTotalAmount({
        id: cart.id,
      });

    const invoice = await strapi.service("plugin::sps-billing.invoice").create({
      data: {
        orders: cart.orders,
        amount: invoiceAmount,
      },
    });

    for (const order of cart.orders) {
      // change order status "cart" -> "payment"
      // detach cart
      await strapi.service("plugin::sps-ecommerce.order").update(order.id, {
        data: {
          status: "payment",
          cart: null,
        },
      });
    }

    return invoice;
  },

  async checkout({ id }: { id: number }) {
    const cart = await strapi.service(uid).findOne(id);

    const invoice = await strapi
      .service("plugin::sps-ecommerce.cart")
      .createInvoice({
        id: cart.id,
      });

    return invoice;
  },
}));
