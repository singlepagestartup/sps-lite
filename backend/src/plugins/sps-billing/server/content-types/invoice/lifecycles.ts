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
      const relations = Object.entries(
        strapi.plugin("sps-billing").contentTypes.invoice["attributes"],
      ).filter(
        ([k, v]: any) =>
          v.type === "relation" && !["createdBy", "updatedBy"].includes(k),
      ) as [string, any];

      for (const [relationKey, relationConfig] of relations) {
        if (
          typeof strapi.service(relationConfig.target).onSuccessPayment ===
          "function"
        ) {
          await strapi
            .service(relationConfig.target)
            .onSuccessPayment({ invoice: result });
        }
      }
    }
  } catch (error) {
    console.log("🚀 ~ onSuccessPayment ~ error:", error);
  }
}
