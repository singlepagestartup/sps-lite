import { IComponentProps } from "./interface";
import { Component as SocialModuleProfile } from "@sps/social/models/profile/frontend/component";
export function Component(props: IComponentProps) {
  const slug = props.routeParams?.["social.profiles.slug"];
  if (!slug) {
    return <></>;
  }
  return (
    <SocialModuleProfile
      isServer={props.isServer}
      variant="find"
      apiProps={{
        params: {
          filters: {
            and: [
              {
                column: "slug",
                method: "eq",
                value: slug,
              },
            ],
          },
        },
      }}
    >
      {({ data }) => {
        return data?.map((socialModuleProfile, index) => {
          return (
            <SocialModuleProfile
              key={socialModuleProfile.id}
              isServer={props.isServer}
              variant="overview-default"
              data={socialModuleProfile}
              language={props.language}
            />
          );
        });
      }}
    </SocialModuleProfile>
  );
}
