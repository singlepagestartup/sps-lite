import setModelPreviousValue from "../../utils/lifecycles/set-model-previous-value";
import getModelPreviousValue from "../../utils/lifecycles/get-model-previous-value";

export default {
  async beforeUpdate(event) {
    await setModelPreviousValue({ event });
  },
  async afterUpdate(event) {
    onSuccessPayment(event);
  },
};

async function onSuccessPayment(event: any) {
  try {
    const { result } = event;

    const previousInvoice = await getModelPreviousValue({ event });
    if (!previousInvoice) {
      return;
    }

    if (previousInvoice.status !== "success" && result.status === "success") {
      const filledInvoice = await strapi
        .service("plugin::sps-billing.invoice")
        .findOne(result.id, {
          populate: "*",
        });

      if (filledInvoice?.user) {
        await strapi
          .service("plugin::users-permissions.user")
          .edit(filledInvoice.user.id, {
            balance: filledInvoice.user.balance + filledInvoice.amount,
          });
      }
      console.log("🚀 ~ onSuccessPayment ~ invoice is paid");
    }
  } catch (error) {
    console.log("🚀 ~ onSuccessPayment ~ error:", error);
  }
}
