import { SubjectMeProfileInformation } from "../me/social-module/profile/id/settings/ai-chat/Component";
import { defaultRbacProfiles, type RbacAccountProfile } from "../../../shared";

export interface SubjectMeSocialModuleProfileFindInformationProps {
  variant?: string;
  title: string;
  description: string;
  profiles: RbacAccountProfile[];
}

export const defaultSubjectMeSocialModuleProfileFindInformationProps: SubjectMeSocialModuleProfileFindInformationProps =
  {
    title: "Profile",
    description:
      "Edit the name, headline and information on your public profile.",
    profiles: defaultRbacProfiles,
  };

export function SubjectMeSocialModuleProfileFindInformation(
  props?: Partial<SubjectMeSocialModuleProfileFindInformationProps>,
) {
  const { title, description, profiles } = {
    ...defaultSubjectMeSocialModuleProfileFindInformationProps,
    ...props,
  };
  return (
    <section
      className="min-w-0 space-y-6"
      data-ds-block="rbac.subject.me-social-module-profile-find-information"
      data-ds-imports="rbac.subject.me-social-module-profile-id-settings-ai-chat"
      data-ds-layer="singlepage"
      data-module="rbac"
      data-model="subject"
      data-variant={
        props?.variant ?? "me-social-module-profile-find-information"
      }
    >
      {profiles.length ? (
        profiles.map((profile) => (
          <SubjectMeProfileInformation
            key={profile.id}
            profileId={profile.id}
            profile={profile}
            profiles={profiles}
            title={profiles.length > 1 ? profile.title : title}
            description={description}
          />
        ))
      ) : (
        <div className="rounded-2xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-6">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="mt-2 text-sm text-[var(--color-sps-muted)]">
            No public profile is connected.
          </p>
        </div>
      )}
    </section>
  );
}
