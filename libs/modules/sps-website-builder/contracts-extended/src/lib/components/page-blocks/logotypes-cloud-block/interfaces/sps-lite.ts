import { IComponent as IParentComponent } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/logotypes-cloud-block/interfaces";
import type { IComponent as IButton } from "@sps/sps-website-builder-contracts/lib/components/elements/button/interfaces";
import type { IComponent as ILogotype } from "@sps/sps-website-builder-contracts/lib/components/elements/logotype/interfaces";

export interface IComponent extends IParentComponent {
  logotypes?: ILogotype[] | null;
  buttons?: IButton[] | null;
}
