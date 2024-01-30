import { IComponent as IParentComponent } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/navbar-block/interfaces";
import type { IComponent as IButton } from "@sps/sps-website-builder-contracts/lib/components/elements/button/interfaces";
import type { IComponent as ILogotype } from "@sps/sps-website-builder-contracts/lib/components/elements/logotype/interfaces";

export interface IComponent extends IParentComponent {
  logotype: ILogotype | null;
  buttons: IButton[] | null;
  additionalButtons: IButton[] | null;
  extraButtons: IButton[] | null;
}
