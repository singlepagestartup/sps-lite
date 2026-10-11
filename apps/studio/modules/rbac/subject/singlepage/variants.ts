import { Component as KnowledgeUpdate } from "./me/social-module/profile/id/chat/id/thread/id/knowledge-module/source/update/ai-chat";
import { Component as IdentityAction6 } from "./me/identity/create/ethereum-virtual-machine";
import { Component as IdentityAction5 } from "./me/identity/create/telegram";
import { Component as IdentityAction4 } from "./me/identity/create/oauth-google";
import { Component as IdentityAction3 } from "./me/identity/create/email-and-password";
import { Component as IdentityAction2 } from "./me/identity/delete";
import { Component as IdentityAction1 } from "./me/identity/change-password";
import { Component as IdentityAction0 } from "./me/identity/change-email";
import { Component as SubjectAction5 } from "./me/social-module/profile/id/chat/id/thread/id/knowledge-module/source/list/document/ai-chat";
import { Component as SubjectAction3 } from "./me/social-module/profile/id/chat/id/thread/create/form/ai-chat";
import { Component as SubjectAction1 } from "./me/social-module/profile/id/update-name/ai-chat";
import { Component as SubjectAction0 } from "./me/social-module/profile/create/ai-chat";
import { Component as MeEcommerceOrderCheckoutTokensAiChat } from "./me/ecommerce-module/order/checkout/tokens/ai-chat";
import { Component as MeEcommerceOrderListAiChat } from "./me/ecommerce-module/order/list/ai-chat";
import { Component as MeDeleteAiChat } from "./me/delete/ai-chat";
import { Component as SupportAiChat } from "./me/crm-module/form/support/ai-chat";
import { Component as AuthenticationSelectMethodDefault } from "./me/authentication/select-method/default/index";
import { Component as AuthenticationSelectMethodAiChat } from "./me/authentication/select-method/ai-chat/index";
import { Component as AuthenticationEthereumVirtualMachineDefault } from "./me/authentication/ethereum-virtual-machine/default/index";
import { Component as AuthenticationOAuthAuthorizationDefault } from "./me/authentication/oauth/authorization/default/index";
import { Component as AuthenticationEmailAndPasswordAuthenticationFormAiChat } from "./me/authentication/email-and-password/authentication-form/ai-chat/index";
import { Component as AuthenticationEmailAndPasswordRegistrationFormAiChat } from "./me/authentication/email-and-password/registration-form/ai-chat/index";
import { Component as AuthenticationEmailAndPasswordAuthenticationFormDefault } from "./me/authentication/email-and-password/authentication-form/default/index";
import { Component as AuthenticationEmailAndPasswordRegistrationFormDefault } from "./me/authentication/email-and-password/registration-form/default/index";
import { Component as AuthenticationEmailAndPasswordForgotPasswordFormDefault } from "./me/authentication/email-and-password/forgot-password-form/default/index";
import { Component as AuthenticationEmailAndPasswordResetPasswordFormDefault } from "./me/authentication/email-and-password/reset-password-form/default/index";
import { Component as AuthenticationEmailAndPasswordAccountChangeDefault } from "./me/authentication/email-and-password/account-change/default/index";
import { Component as AuthenticationProviderConnectDefault } from "./me/authentication/provider-connect/default/index";
import { Component as AdminV2Card } from "./admin-v2-card/index";
import { Component as AdminV2Settings } from "./admin-v2-settings/index";
import { Component as AdminV2Table } from "./admin-v2-table/index";
import { Component as MessageCreateAiChat } from "./me/social-module/profile/id/chat/id/thread/id/message/create/ai-chat/index";
import { Component as Account } from "./me/account/index";
import { Component as List } from "./list/index";
import { Component as MeCrmFormDeafult } from "./me-crm-module-form-default/index";
import { Component as MeDelete } from "./me-delete/index";
import { Component as MeIdentityFindInformation } from "./me/identity/find/information/index";
import { Component as MeInformation } from "./me-information/index";
import { Component as MeProfileInformation } from "./me/social-module/profile/id/settings/ai-chat/index";
import { Component as MeSocialModuleProfileFindInformation } from "./me-social-module-profile-find-information/index";

export const variants = {
  "me-social-module-profile-id-chat-id-thread-id-knowledge-module-source-update-ai-chat":
    KnowledgeUpdate,
  "me-identity-create-ethereum-virtual-machine": IdentityAction6,
  "me-identity-create-telegram": IdentityAction5,
  "me-identity-create-oauth-google": IdentityAction4,
  "me-identity-create-email-and-password": IdentityAction3,
  "me-identity-delete": IdentityAction2,
  "me-identity-change-password": IdentityAction1,
  "me-identity-change-email": IdentityAction0,
  "me-social-module-profile-id-chat-id-thread-id-knowledge-module-source-list-document-ai-chat":
    SubjectAction5,
  "me-social-module-profile-id-chat-id-thread-create-form-ai-chat":
    SubjectAction3,
  "me-social-module-profile-id-update-name-ai-chat": SubjectAction1,
  "me-social-module-profile-create-ai-chat": SubjectAction0,
  "me-ecommerce-module-order-checkout-tokens-ai-chat":
    MeEcommerceOrderCheckoutTokensAiChat,
  "me-ecommerce-module-order-list-ai-chat": MeEcommerceOrderListAiChat,
  "me-delete-ai-chat": MeDeleteAiChat,
  "me-crm-module-form-support-ai-chat": SupportAiChat,
  "me-authentication-select-method-default": AuthenticationSelectMethodDefault,
  "me-authentication-select-method-ai-chat": AuthenticationSelectMethodAiChat,
  "me-authentication-ethereum-virtual-machine-default":
    AuthenticationEthereumVirtualMachineDefault,
  "me-authentication-oauth-authorization-default":
    AuthenticationOAuthAuthorizationDefault,
  "me-authentication-email-and-password-authentication-form-ai-chat":
    AuthenticationEmailAndPasswordAuthenticationFormAiChat,
  "me-authentication-email-and-password-registration-form-ai-chat":
    AuthenticationEmailAndPasswordRegistrationFormAiChat,
  "me-authentication-email-and-password-authentication-form-default":
    AuthenticationEmailAndPasswordAuthenticationFormDefault,
  "me-authentication-email-and-password-registration-form-default":
    AuthenticationEmailAndPasswordRegistrationFormDefault,
  "me-authentication-email-and-password-forgot-password-form-default":
    AuthenticationEmailAndPasswordForgotPasswordFormDefault,
  "me-authentication-email-and-password-reset-password-form-default":
    AuthenticationEmailAndPasswordResetPasswordFormDefault,
  "me-authentication-email-and-password-account-change-default":
    AuthenticationEmailAndPasswordAccountChangeDefault,
  "me-authentication-provider-connect-default":
    AuthenticationProviderConnectDefault,
  "admin-v2-card": AdminV2Card,
  "admin-v2-settings": AdminV2Settings,
  "admin-v2-table": AdminV2Table,
  "me-social-module-profile-id-chat-id-thread-id-message-create-ai-chat":
    MessageCreateAiChat,
  "me-account": Account,
  list: List,
  "me-crm-module-form-default": MeCrmFormDeafult,
  "me-delete": MeDelete,
  "me-identity-find-information": MeIdentityFindInformation,
  "me-information": MeInformation,
  "me-social-module-profile-id-settings-ai-chat": MeProfileInformation,
  "me-social-module-profile-find-information":
    MeSocialModuleProfileFindInformation,
};
