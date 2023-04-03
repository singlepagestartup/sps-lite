import { FC } from "react";
import FourColumnWithIllustrations from "./FourColumnWithIllustrations";
import ThreeColumnWithIcons from "./ThreeColumnWithIcons";
import ThreeColumnWithIconsAndSupportingText from "./ThreeColumnWithIconsAndSupportingText";
import ThreeColumnWithIllustrationsAndCenteredText from "./ThreeColumnWithIllustrationsAndCenteredText";
import ThreeColumnWithIllustrationsAndHeader from "./ThreeColumnWithIllustrationsAndHeader";
import ThreeColumnWithIllustrationsAndHeading from "./ThreeColumnWithIllustrationsAndHeading";
import ThreeColumnWithIllustrationsAndSplitHeader from "./ThreeColumnWithIllustrationsAndSplitHeader";
import TwoXTwoGridWithIllustrations from "./TwoXTwoGridWithIllustrations";
import { IBackendIncentivesBlock } from "types/page-blocks";

export interface IIncentivesBlock extends IBackendIncentivesBlock {}

const variants = {
  "four-column-with-illustrations": FourColumnWithIllustrations,
  "three-column-with-illustrations-and-split-header":
    ThreeColumnWithIllustrationsAndSplitHeader,
  "three-column-with-illustrations-and-heading":
    ThreeColumnWithIllustrationsAndHeading,
  "three-column-with-illustrations-and-header":
    ThreeColumnWithIllustrationsAndHeader,
  "three-column-with-illustrations-and-centered-text":
    ThreeColumnWithIllustrationsAndCenteredText,
  "three-column-with-icons": ThreeColumnWithIcons,
  "three-column-with-icons-and-supporting-text":
    ThreeColumnWithIconsAndSupportingText,
  "two-x-two-grid-with-illustrations": TwoXTwoGridWithIllustrations,
};

export default function Incentives(props: IIncentivesBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IIncentivesBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
