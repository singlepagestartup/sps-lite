/** Client workspace documents follow the Studio Workspace review order. */
export const AI_CHAT_DOCUMENTS = [
  {
    key: "brief",
    title: "Brief.md",
    prompt:
      "Describe the business, its customers, goals, constraints and available materials.",
  },
  {
    key: "strategy",
    title: "Strategy.md",
    prompt:
      "Describe the market, audience, positioning, priorities and evidence behind the strategy.",
  },
  {
    key: "brand",
    title: "Brand.md",
    prompt: "Describe the brand's promise, voice, messages and identity.",
  },
  {
    key: "design",
    title: "Design.md",
    prompt:
      "Describe the visual system, visitor journey, layouts and interaction rules.",
  },
  {
    key: "products",
    title: "Products.md",
    prompt:
      "Describe the products, their customers, value and current availability.",
  },
] as const;

export type AIChatDocumentKey = (typeof AI_CHAT_DOCUMENTS)[number]["key"];
