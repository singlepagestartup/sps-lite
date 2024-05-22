import { forwardRef } from "react";
import { Button as ShadcnButton, ButtonProps } from "@sps/shadcn";

export interface IComponentProps extends ButtonProps {}

const Component = forwardRef<HTMLButtonElement, IComponentProps>(
  (props, ref) => {
    return (
      <ShadcnButton
        {...{ ...props, children: undefined }}
        variant={props.variant || "primary"}
        ref={ref}
        className="py-0 bg-muted-foreground overflow-hidden rounded-none"
      >
        <div className="leading-none text-[76px] sm:text-[100px] leading-[50px] sm:leading-[65px] font-extrabold uppercase -tracking-[.14em]">
          {props.children}
        </div>
      </ShadcnButton>
    );
  },
);

export default Component;
