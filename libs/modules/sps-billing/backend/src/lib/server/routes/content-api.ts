import currency from "./currency";
import customInvoice from "./invoice/custom";
import invoice from "./invoice";

// export default {
//   currency,
//   customInvoice,
//   invoice,
// };

const routes: any = [...customInvoice.routes, ...currency.routes];

// if (Array.isArray(currency.routes)) {
//   routes.push(...currency.routes);
// }

// console.log(`🚀 ~ routes:`, JSON.stringify(routes));

export default { type: "content-api", routes };
