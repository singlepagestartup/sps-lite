import { Component as EcommerceModuleOrder } from "../../../../../../../../../ecommerce/order";
export interface ISubjectTokensProps {
  variant?: string;
}
export function Component({
  variant = "me-ecommerce-module-order-checkout-tokens-ai-chat",
}: ISubjectTokensProps = {}) {
  return (
    <div data-module="rbac" data-model="subject" data-variant={variant}>
      <EcommerceModuleOrder variant="checkout-tokens-ai-chat" />
    </div>
  );
}
