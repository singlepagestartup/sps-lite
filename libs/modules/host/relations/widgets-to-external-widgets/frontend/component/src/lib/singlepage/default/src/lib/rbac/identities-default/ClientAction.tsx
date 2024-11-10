"use client";

import { ISpsComponentBase } from "@sps/ui-adapter";
import { Component as Subject } from "@sps/rbac/models/subject/frontend/component";
import { Component as SubjectsToIdentities } from "@sps/rbac/relations/subjects-to-identities/frontend/component";
import { Component as Identity } from "@sps/rbac/models/identity/frontend/component";

export function Component(props: ISpsComponentBase) {
  return (
    <Subject isServer={false} hostUrl={props.hostUrl} variant="me">
      {({ data }) => {
        if (!data) {
          return;
        }

        return (
          <div className="flex flex-col p-20 bg-red-400 w-full">
            <SubjectsToIdentities
              isServer={false}
              hostUrl={props.hostUrl}
              variant="find"
              apiProps={{
                params: {
                  and: [
                    {
                      column: "subjectId",
                      method: "eq",
                      value: data?.id,
                    },
                  ],
                },
              }}
            >
              {({ data }) => {
                return (
                  <div>
                    {data?.map((entity, index) => {
                      return (
                        <Identity
                          key={index}
                          variant="edit-default"
                          data={{ id: entity.identityId }}
                          isServer={false}
                          hostUrl={props.hostUrl}
                        />
                      );
                    })}
                  </div>
                );
              }}
            </SubjectsToIdentities>
          </div>
        );
      }}
    </Subject>
  );
}
