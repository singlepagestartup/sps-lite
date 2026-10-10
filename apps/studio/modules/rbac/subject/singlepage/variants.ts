import { Component as AuthenticationSelectMethodDefault } from "./authentication/select-method/default/index";
import { Component as AuthenticationSelectMethodAiChat } from "./authentication/select-method/ai-chat/index";
import { Component as AuthenticationEthereumVirtualMachineDefault } from "./authentication/ethereum-virtual-machine/default/index";
import { Component as AuthenticationOAuthAuthorizationDefault } from "./authentication/oauth/authorization/default/index";
import { Component as AuthenticationEmailAndPasswordAuthenticationFormAiChat } from "./authentication/email-and-password/authentication-form/ai-chat/index";
import { Component as AuthenticationEmailAndPasswordRegistrationFormAiChat } from "./authentication/email-and-password/registration-form/ai-chat/index";
import { Component as AuthenticationEmailAndPasswordAuthenticationFormDefault } from "./authentication/email-and-password/authentication-form/default/index";
import { Component as AuthenticationEmailAndPasswordRegistrationFormDefault } from "./authentication/email-and-password/registration-form/default/index";
import { Component as AuthenticationEmailAndPasswordForgotPasswordFormDefault } from "./authentication/email-and-password/forgot-password-form/default/index";
import { Component as AuthenticationEmailAndPasswordResetPasswordFormDefault } from "./authentication/email-and-password/reset-password-form/default/index";
import { Component as AuthenticationEmailAndPasswordAccountChangeDefault } from "./authentication/email-and-password/account-change/default/index";
import { Component as AuthenticationProviderConnectDefault } from "./authentication/provider-connect/default/index";
import { Component as AdminV2Card } from "./admin-v2-card/index";
import { Component as AdminV2Settings } from "./admin-v2-settings/index";
import { Component as AdminV2Table } from "./admin-v2-table/index";
import { Component as MessageCreateAiChat } from "./message/create/ai-chat/index";
import { Component as Account } from "./account/index";
import { Component as AccountData } from "./account-data/index";
import { Component as List } from "./list/index";
import { Component as MeCrmFormDeafult } from "./me-crm-form-deafult/index";
import { Component as MeDelete } from "./me-delete/index";
import { Component as MeIdentityFindInformation } from "./me-identity-find-information/index";
import { Component as MeInformation } from "./me-information/index";
import { Component as MeProfileInformation } from "./me-profile-information/index";
import { Component as MeSocialModuleProfileFindInformation } from "./me-social-module-profile-find-information/index";

export const variants = {
  "authentication-select-method-default": AuthenticationSelectMethodDefault,
  "authentication-select-method-ai-chat": AuthenticationSelectMethodAiChat,
  "authentication-ethereum-virtual-machine-default":
    AuthenticationEthereumVirtualMachineDefault,
  "authentication-oauth-authorization-default":
    AuthenticationOAuthAuthorizationDefault,
  "authentication-email-and-password-authentication-form-ai-chat":
    AuthenticationEmailAndPasswordAuthenticationFormAiChat,
  "authentication-email-and-password-registration-form-ai-chat":
    AuthenticationEmailAndPasswordRegistrationFormAiChat,
  "authentication-email-and-password-authentication-form-default":
    AuthenticationEmailAndPasswordAuthenticationFormDefault,
  "authentication-email-and-password-registration-form-default":
    AuthenticationEmailAndPasswordRegistrationFormDefault,
  "authentication-email-and-password-forgot-password-form-default":
    AuthenticationEmailAndPasswordForgotPasswordFormDefault,
  "authentication-email-and-password-reset-password-form-default":
    AuthenticationEmailAndPasswordResetPasswordFormDefault,
  "authentication-email-and-password-account-change-default":
    AuthenticationEmailAndPasswordAccountChangeDefault,
  "authentication-provider-connect-default":
    AuthenticationProviderConnectDefault,
  "admin-v2-card": AdminV2Card,
  "admin-v2-settings": AdminV2Settings,
  "admin-v2-table": AdminV2Table,
  "message-create-ai-chat": MessageCreateAiChat,
  account: Account,
  "account-data": AccountData,
  list: List,
  "me-crm-form-deafult": MeCrmFormDeafult,
  "me-delete": MeDelete,
  "me-identity-find-information": MeIdentityFindInformation,
  "me-information": MeInformation,
  "me-profile-information": MeProfileInformation,
  "me-social-module-profile-find-information":
    MeSocialModuleProfileFindInformation,
};
