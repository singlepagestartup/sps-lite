import { Component as SubjectMeProfileSettings } from "./subject-me-profile-settings/index";
import { Component as SubjectMeSocialProfileSettingsAiChat } from "./subject-me-social-module-profile-id-settings-ai-chat/index";
import { Component as SubjectMeThreadCreateAiChat } from "./subject-me-social-module-profile-id-chat-id-thread-create-ai-chat/index";
import { Component as SubjectMeThreadAiChat } from "./subject-me-social-module-profile-id-chat-id-thread-id-ai-chat/index";
import { Component as AdminV2Card } from "./admin-v2-card/index";
import { Component as AdminV2Table } from "./admin-v2-table/index";
import { Component as List } from "./list/index";

export const variants = {
  "subject-me-profile-settings": SubjectMeProfileSettings,
  "subject-me-social-module-profile-id-settings-ai-chat":
    SubjectMeSocialProfileSettingsAiChat,
  "subject-me-social-module-profile-id-chat-id-thread-create-ai-chat":
    SubjectMeThreadCreateAiChat,
  "subject-me-social-module-profile-id-chat-id-thread-id-ai-chat":
    SubjectMeThreadAiChat,
  "admin-v2-card": AdminV2Card,
  "admin-v2-table": AdminV2Table,
  list: List,
};
