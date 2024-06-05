"use client";

import { useState } from "react";
import { IComponentPropsExtended } from "./interface";
import { AdminComponent as SpsWebsiteAdminComponent } from "@sps/sps-website-builder-frontend";
import { AdminComponent as StartupAdminComponent } from "@sps/startup-frontend";
import { AdminComponent as SpsFileStorageAdminComponent } from "@sps/sps-file-storage-frontend";
import { AdminComponent as SpsRbacAdminComponent } from "@sps/sps-rbac-frontend";

export function Component(props: IComponentPropsExtended) {
  const [widget, setWidget] = useState<string>("sps-website-builder");

  return (
    <section data-module="frontend" className="w-full py-2 lg:py-10 bg-dotted">
      <div className="w-full mx-auto max-w-7xl px-2">
        <div className="p-5">
          <div className="flex flex-col lg:flex-row lg:gap-3 w-full lg:w-fit rounded-t-xl lg:rounded-t-none overflow-hidden">
            <Button
              title="sps-website-builder"
              onClick={() => {
                setWidget("sps-website-builder");
              }}
              active={widget === "sps-website-builder"}
            />
            <Button
              title="sps-file-storage"
              onClick={() => {
                setWidget("sps-file-storage");
              }}
              active={widget === "sps-file-storage"}
            />
            <Button
              title="sps-rbac"
              onClick={() => {
                setWidget("sps-rbac");
              }}
              active={widget === "sps-rbac"}
            />
            <Button
              title="startup"
              onClick={() => {
                setWidget("startup");
              }}
              active={widget === "startup"}
            />
          </div>
          <div className="bg-white rounded-b-lg">
            {widget === "sps-website-builder" ? (
              <SpsWebsiteAdminComponent
                {...props}
                isServer={false}
                variant="default"
              />
            ) : null}
            {widget === "sps-file-storage" ? (
              <SpsFileStorageAdminComponent
                {...props}
                isServer={false}
                variant="default"
              />
            ) : null}
            {widget === "startup" ? (
              <StartupAdminComponent
                {...props}
                isServer={false}
                variant="default"
              />
            ) : null}
            {widget === "sps-rbac" ? (
              <SpsRbacAdminComponent
                {...props}
                isServer={false}
                variant="default"
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function Button(props: {
  title: string;
  onClick: () => void;
  active: boolean;
}) {
  return (
    <button
      onClick={() => {
        props.onClick();
      }}
      data-active={props.active}
      className="w-full lg:w-fit bg-white lg:rounded-t-xl overflow-hidden font-bold text-4xl leading-none -tracking-[.08em] group text-muted-foreground"
    >
      <p className="group-data-[active=true]:opacity-100 group-hover:opacity-100 opacity-30 transition duration-300">
        {props.title}
      </p>
    </button>
  );
}
