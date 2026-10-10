import { ReactNode as ReactNode } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import { Component as HostModuleLayout } from "../../../layout/index";
import { Component as EcommerceModuleOrder } from "../../../../ecommerce/order/index";
interface SectionStackProps {
  children: ReactNode;
  className?: string;
}
function SectionStack({ children, className }: SectionStackProps) {
  return (
    <div
      className={twMerge(
        "flex min-w-0 w-full flex-col gap-6 py-6 sm:gap-8 sm:py-8 [&>[data-ds-block]]:py-0 [&>[data-ds-section]]:py-0 [&>section]:py-0",
        className,
      )}
      data-ds-layout="section-stack"
    >
      {children}
    </div>
  );
}
interface IComponentVariantProps {
  variant?: string;
}
export function EcommerceOrderCheckoutPaymentDefault({
  variant = "rbac-subjects-rbac-subjects-id-subjects-to-ecommerce-module-orders-checkout-payment",
}: IComponentVariantProps = {}) {
  return (
    <div data-module="host" data-model="page" data-variant={variant}>
      <HostModuleLayout
        variant="website"
        activeHref="/checkout"
        cartCount={1}
        footer="compact"
      >
        <main
          className="min-w-0"
          data-ds-page="host.page.rbac-subjects-rbac-subjects-id-subjects-to-ecommerce-module-orders-checkout-payment"
        >
          <SectionStack>
            <EcommerceModuleOrder
              variant="checkout-stepper-default"
              currentStep="payment"
            />
            <section className="w-full">
              <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:gap-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:px-8">
                <EcommerceModuleOrder variant="checkout-payment-default" />
                <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
                  <EcommerceModuleOrder
                    variant="summary-default"
                    compact
                    editable={false}
                  />
                </div>
              </div>
            </section>
          </SectionStack>
        </main>
      </HostModuleLayout>
    </div>
  );
}
