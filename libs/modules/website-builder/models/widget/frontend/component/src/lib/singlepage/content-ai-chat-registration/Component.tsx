import { AI_CHAT_REGISTRATION_CONTENT } from "@sps/shared-utils";
import { AuthenticationPresentation } from "../content-ai-chat-authentication/Component";
import type { IComponentPropsExtended } from "./interface";
export function Component(props: IComponentPropsExtended) {
  return (
    <AuthenticationPresentation
      variant="content-ai-chat-registration"
      data={props.data}
      language={props.language}
      className={props.className}
      content={AI_CHAT_REGISTRATION_CONTENT}
      media="stack"
      asideIcon="shield-check"
    >
      {props.children}
    </AuthenticationPresentation>
  );
}
