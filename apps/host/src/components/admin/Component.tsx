"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { IComponentPropsExtended } from "./interface";
import { useSearchParams } from "next/navigation";
import { Component as SpsRbacAuthentication } from "@sps/sps-rbac/models/authentication/frontend/component";
import { AdminComponent as SpsHostAdminComponent } from "@sps/sps-host/frontend/component";
import { AdminComponent as SpsWebsiteBuilderAdminComponent } from "@sps/sps-website-builder/frontend/component";
import { AdminComponent as SpsBillingAdminComponent } from "@sps/sps-billing/frontend/component";

const SpsBroadcast = dynamic(() =>
  import("@sps/sps-broadcast/frontend/root").then((mod) => mod.AdminComponent),
);
const StartupAdminComponent = dynamic(() =>
  import("@sps/startup/frontend/root").then((mod) => mod.AdminComponent),
);
const SpsFileStorageAdminComponent = dynamic(() =>
  import("@sps/sps-file-storage/frontend/root").then(
    (mod) => mod.AdminComponent,
  ),
);
const SpsRbacAdminComponent = dynamic(() =>
  import("@sps/sps-rbac/frontend/root").then((mod) => mod.AdminComponent),
);
const SpsNotificationAdminComponent = dynamic(() =>
  import("@sps/sps-notification/frontend/root").then(
    (mod) => mod.AdminComponent,
  ),
);
const SpsCrmAdminComponent = dynamic(() =>
  import("@sps/sps-crm/frontend/root").then((mod) => mod.AdminComponent),
);
const SpsThirdPartiesAdminComponent = dynamic(() =>
  import("@sps/sps-third-parties/frontend/root").then(
    (mod) => mod.AdminComponent,
  ),
);

export function Component(props: IComponentPropsExtended) {
  const params = useSearchParams();
  const adminQueryParams = params.get("admin");

  const [widget, setWidget] = useState<string>("sps-host");

  if (!adminQueryParams) {
    return null;
  }

  return (
    <SpsRbacAuthentication
      variant="is-authenticatated-wrapper"
      isServer={false}
      hostUrl={props.hostUrl}
    >
      <section data-module="frontend" className="w-full py-2 lg:py-10 bg-input">
        <div className="w-full mx-auto max-w-7xl px-2">
          <div className="p-5">
            <div className="flex flex-col lg:flex-row lg:gap-3 w-full lg:w-fit rounded-t-xl lg:rounded-t-none overflow-hidden">
              <Button
                title="sps-host"
                onClick={() => {
                  setWidget("sps-host");
                }}
                active={widget === "sps-host"}
              />
              <Button
                title="sps-broradcast"
                onClick={() => {
                  setWidget("sps-broradcast");
                }}
                active={widget === "sps-broradcast"}
              />
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
                title="sps-notification"
                onClick={() => {
                  setWidget("sps-notification");
                }}
                active={widget === "sps-notification"}
              />
              <Button
                title="sps-billing"
                onClick={() => {
                  setWidget("sps-billing");
                }}
                active={widget === "sps-billing"}
              />
              <Button
                title="startup"
                onClick={() => {
                  setWidget("startup");
                }}
                active={widget === "startup"}
              />
              <Button
                title="sps-crm"
                onClick={() => {
                  setWidget("sps-crm");
                }}
                active={widget === "sps-crm"}
              />
              <Button
                title="sps-third-parties"
                onClick={() => {
                  setWidget("sps-third-parties");
                }}
                active={widget === "sps-third-parties"}
              />
            </div>
            <div className="bg-white rounded-b-lg">
              {widget === "sps-host" ? (
                <SpsHostAdminComponent
                  {...props}
                  isServer={false}
                  hostUrl={props.hostUrl}
                  variant="default"
                />
              ) : null}
              {widget === "sps-broradcast" ? (
                <SpsBroadcast
                  {...props}
                  isServer={false}
                  hostUrl={props.hostUrl}
                  variant="default"
                />
              ) : null}
              {widget === "sps-website-builder" ? (
                <SpsWebsiteBuilderAdminComponent
                  {...props}
                  isServer={false}
                  hostUrl={props.hostUrl}
                  variant="default"
                />
              ) : null}
              {widget === "sps-file-storage" ? (
                <SpsFileStorageAdminComponent
                  {...props}
                  isServer={false}
                  hostUrl={props.hostUrl}
                  variant="default"
                />
              ) : null}
              {widget === "startup" ? (
                <StartupAdminComponent
                  {...props}
                  isServer={false}
                  hostUrl={props.hostUrl}
                  variant="default"
                />
              ) : null}
              {widget === "sps-rbac" ? (
                <SpsRbacAdminComponent
                  {...props}
                  isServer={false}
                  hostUrl={props.hostUrl}
                  variant="default"
                />
              ) : null}
              {widget === "sps-notification" ? (
                <SpsNotificationAdminComponent
                  {...props}
                  isServer={false}
                  hostUrl={props.hostUrl}
                  variant="default"
                />
              ) : null}
              {widget === "sps-billing" ? (
                <SpsBillingAdminComponent
                  {...props}
                  isServer={false}
                  hostUrl={props.hostUrl}
                  variant="default"
                />
              ) : null}
              {widget === "sps-crm" ? (
                <SpsCrmAdminComponent
                  {...props}
                  isServer={false}
                  hostUrl={props.hostUrl}
                  variant="default"
                />
              ) : null}
              {widget === "sps-third-parties" ? (
                <SpsThirdPartiesAdminComponent
                  {...props}
                  isServer={false}
                  hostUrl={props.hostUrl}
                  variant="default"
                />
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </SpsRbacAuthentication>
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
      className="w-full lg:w-fit bg-white lg:rounded-t-md overflow-hidden font-bold text-xl whitespace-nowrap leading-none -tracking-[.08em] group"
    >
      <p className="group-data-[active=true]:text-primary group-data-[active=false]:text-input group-hover:opacity-100 transition duration-300">
        {props.title}
      </p>
    </button>
  );
}
