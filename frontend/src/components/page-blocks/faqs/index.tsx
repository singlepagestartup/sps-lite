import { FC } from "react";
import CenteredAccordion from "./CenteredAccordion";
import CenteredAccordionOnDark from "./CenteredAccordionOnDark";
import OffsetWithSupportingText from "./OffsetWithSupportingText";
import SideBySide from "./SideBySide";
import ThreeColumns from "./ThreeColumns";
import ThreeColumnsOnDark from "./ThreeColumnsOnDark";
import ThreeColumnsWithCenteredIntroduction from "./ThreeColumnsWithCenteredIntroduction";
import TwoColumns from "./TwoColumns";
import TwoColumnsOnDark from "./TwoColumnsOnDark";
import TwoColumnsWithCenteredIntroduction from "./TwoColumnsWithCenteredIntroduction";

export interface IFaq {
  title: string;
  description: string;
}
export interface IFaqs {
  variant: keyof typeof variants;
  title?: string;
  description?: string;
  faqs?: IFaq[];
  anchor?: string;
}

const variants = {
  "centered-accordion": CenteredAccordion,
  "offset-with-supporting-text": OffsetWithSupportingText,
  "centered-accordion-on-dark": CenteredAccordionOnDark,
  "side-by-side": SideBySide,
  "three-columns": ThreeColumns,
  "three-columns-on-dark": ThreeColumnsOnDark,
  "three-columns-with-centered-introduction":
    ThreeColumnsWithCenteredIntroduction,
  "two-columns": TwoColumns,
  "two-columns-on-dark": TwoColumnsOnDark,
  "two-columns-with-centered-introduction": TwoColumnsWithCenteredIntroduction,
};

export default function Faqs(props: IFaqs) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<IFaqs>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
