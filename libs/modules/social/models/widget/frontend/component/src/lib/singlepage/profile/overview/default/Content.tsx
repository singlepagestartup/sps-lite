import { Component as Profile } from "@sps/social/models/profile/frontend/component";
import type { IContentProps } from "./interface";
export function Component(props: IContentProps) {
  const slug = props.profileSlug;
  if (!slug) return null;
  return (
    <Profile
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
            <Profile
              key={socialModuleProfile.id}
              isServer={props.isServer}
              variant="overview-default"
              dataSource="props"
              data={socialModuleProfile}
              language={props.language}
            />
          );
        });
      }}
    </Profile>
  );
}
