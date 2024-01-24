import { entity as file } from "libs/modules/sps-file-storage/frontend/src/lib/redux/entities/file/mock/sps-lite";
import { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 5,
  __component: "elements.logotype",
  media: [{ ...file }],
  additionalMedia: null,
  title: "",
  url: "https://singlepagestartup.com",
};
