import { IComponentProps } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin/admin-panel/Component";
import { Component as Authentication } from "./authentication/Component";
import { Component as AuthenticationBlock } from "./authentication-block/Component";
import { Component as IdentitiesBlock } from "./identities-block/Component";
import { Component as Identity } from "./identity/Component";
import { Component as Action } from "./action/Component";
import { Component as Role } from "./role/Component";
import { Component as Session } from "./session/Component";
import { Component as Subject } from "./subject/Component";
import { Component as SubjectsBlock } from "./subjects-block/Component";
import { Component as Widget } from "./widget/Component";

export function Component(props: IComponentProps) {
  const models = [
    {
      name: "authentication",
      Comp: Authentication,
    },
    {
      name: "authentication-block",
      Comp: AuthenticationBlock,
    },
    {
      name: "identities-block",
      Comp: IdentitiesBlock,
    },
    {
      name: "subjects-block",
      Comp: SubjectsBlock,
    },
    {
      name: "identity",
      Comp: Identity,
    },
    {
      name: "action",
      Comp: Action,
    },
    {
      name: "role",
      Comp: Role,
    },
    {
      name: "session",
      Comp: Session,
    },
    {
      name: "subject",
      Comp: Subject,
    },
    {
      name: "widget",
      Comp: Widget,
    },
  ];

  return (
    <ParentComponent
      isServer={props.isServer}
      models={models}
      name="admin-panel"
      module="sps-rbac"
    />
  );
}
