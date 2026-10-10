"use client";
import {
  AccountPage,
  PageSection,
} from "../../../../../../../workspace/design/singlepage/interface-kit/ai-chat/ServiceDocument";
import {
  Component as SelectMethod,
  type TAuthenticationMethod,
} from "../default";
import {
  Component as EmailAndPasswordAuthenticationForm,
  type ILoginProps,
} from "../../email-and-password/authentication-form/ai-chat";
import defaultCopy from "../../email-and-password/authentication-form/ai-chat/content.json";

export interface ISelectMethodAiChatProps extends ILoginProps {
  initialMethod?: TAuthenticationMethod;
}

export function Component({
  copy = defaultCopy,
  onSuccess,
  initialMethod,
}: ISelectMethodAiChatProps = {}) {
  return (
    <AccountPage copy={copy} page="login">
      <PageSection section={copy.sections.account} icon="sign-in">
        <div className="mt-6">
          <SelectMethod
            initialMethod={initialMethod}
            onSuccess={onSuccess}
            renderEmailAndPassword={(complete) => (
              <EmailAndPasswordAuthenticationForm
                copy={copy}
                onSuccess={complete}
              />
            )}
          />
        </div>
      </PageSection>
    </AccountPage>
  );
}
