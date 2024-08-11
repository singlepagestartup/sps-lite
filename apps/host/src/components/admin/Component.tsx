"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { IComponentPropsExtended } from "./interface";
import { useSearchParams } from "next/navigation";
import { Component as SpsRbacAuthentication } from "@sps/sps-rbac/models/authentication/frontend/component";
import { AdminComponent as SpsHost } from "@sps/sps-host/frontend/component";
import { AdminComponent as SpsWebsiteBuilder } from "@sps/sps-website-builder/frontend/component";
import { AdminComponent as SpsBilling } from "@sps/sps-billing/frontend/component";
import { AdminComponent as SpsBroadcast } from "@sps/sps-broadcast/frontend/component";
import { AdminComponent as SpsCrm } from "@sps/sps-crm/frontend/component";
import { AdminComponent as SpsEcommerce } from "@sps/sps-ecommerce/frontend/component";
import { AdminComponent as SpsFileStorage } from "@sps/sps-file-storage/frontend/component";
import { AdminComponent as SpsNotification } from "@sps/sps-notification/frontend/component";
import { AdminComponent as SpsThirdParties } from "@sps/sps-third-parties/frontend/component";
import { AdminComponent as SpsRbac } from "@sps/sps-rbac/frontend/component";
import { AdminComponent as Startup } from "@sps/startup/frontend/component";

export function Component(props: IComponentPropsExtended) {
  const params = useSearchParams();
  const adminQueryParams = params.get("admin");

  const [widget, setWidget] = useState<string>("sps-host");

  if (!adminQueryParams) {
    return null;
  }

  return (
    <SpsRbacAuthentication
      variant="is-authorized-wrapper"
      isServer={false}
      hostUrl={props.hostUrl}
      apiProps={{
        params: {
          action: {
            route: "*",
            method: "*",
            type: "HTTP",
          },
        },
      }}
    >
      <section data-module="frontend" className="w-full py-2 lg:py-10 bg-input">
        <div className="w-full mx-auto max-w-7xl px-2">
          <div className="p-5">
            <div className="flex flex-col lg:flex-row lg:gap-3 w-full lg:w-fit rounded-t-xl lg:rounded-t-none overflow-hidden">
              <Button
                title="host"
                onClick={() => {
                  setWidget("sps-host");
                }}
                active={widget === "sps-host"}
              />
              <Button
                title="broradcast"
                onClick={() => {
                  setWidget("sps-broradcast");
                }}
                active={widget === "sps-broradcast"}
              />
              <Button
                title="website-builder"
                onClick={() => {
                  setWidget("sps-website-builder");
                }}
                active={widget === "sps-website-builder"}
              />
              <Button
                title="file-storage"
                onClick={() => {
                  setWidget("sps-file-storage");
                }}
                active={widget === "sps-file-storage"}
              />
              <Button
                title="rbac"
                onClick={() => {
                  setWidget("sps-rbac");
                }}
                active={widget === "sps-rbac"}
              />
              <Button
                title="notification"
                onClick={() => {
                  setWidget("sps-notification");
                }}
                active={widget === "sps-notification"}
              />
              <Button
                title="billing"
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
                title="crm"
                onClick={() => {
                  setWidget("sps-crm");
                }}
                active={widget === "sps-crm"}
              />
              <Button
                title="ecommerce"
                onClick={() => {
                  setWidget("sps-ecommerce");
                }}
                active={widget === "sps-ecommerce"}
              />
              <Button
                title="third-parties"
                onClick={() => {
                  setWidget("sps-third-parties");
                }}
                active={widget === "sps-third-parties"}
              />
            </div>
            <div className="bg-white rounded-b-lg">
              {widget === "sps-host" ? (
                <SpsHost
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
                <SpsWebsiteBuilder
                  {...props}
                  isServer={false}
                  hostUrl={props.hostUrl}
                  variant="default"
                />
              ) : null}
              {widget === "sps-file-storage" ? (
                <SpsFileStorage
                  {...props}
                  isServer={false}
                  hostUrl={props.hostUrl}
                  variant="default"
                />
              ) : null}
              {widget === "startup" ? (
                <Startup
                  {...props}
                  isServer={false}
                  hostUrl={props.hostUrl}
                  variant="default"
                />
              ) : null}
              {widget === "sps-rbac" ? (
                <SpsRbac
                  {...props}
                  isServer={false}
                  hostUrl={props.hostUrl}
                  variant="default"
                />
              ) : null}
              {widget === "sps-notification" ? (
                <SpsNotification
                  {...props}
                  isServer={false}
                  hostUrl={props.hostUrl}
                  variant="default"
                />
              ) : null}
              {widget === "sps-billing" ? (
                <SpsBilling
                  {...props}
                  isServer={false}
                  hostUrl={props.hostUrl}
                  variant="default"
                />
              ) : null}
              {widget === "sps-crm" ? (
                <SpsCrm
                  {...props}
                  isServer={false}
                  hostUrl={props.hostUrl}
                  variant="default"
                />
              ) : null}
              {widget === "sps-ecommerce" ? (
                <SpsEcommerce
                  {...props}
                  isServer={false}
                  hostUrl={props.hostUrl}
                  variant="default"
                />
              ) : null}
              {widget === "sps-third-parties" ? (
                <SpsThirdParties
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
