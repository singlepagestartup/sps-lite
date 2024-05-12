"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@sps/shadcn";
import { Component as PageSpsLiteAdminTable } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin-table";
import { Component as LayoutSpsLiteAdminTable } from "@sps/sps-website-builder-models-layout-frontend-component-variants-sps-lite-admin-table";
import { Component as WidgetSpsLiteAdminTable } from "@sps/sps-website-builder-models-widget-frontend-component-variants-sps-lite-admin-table";
import { Component as HeroSectionBlockSpsLiteAdminTable } from "@sps/sps-website-builder-models-hero-section-block-frontend-component-variants-sps-lite-admin-table";
import { Component as NavbarSpsLiteAdminTable } from "@sps/sps-website-builder-models-navbar-frontend-component-variants-sps-lite-admin-table";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page"
      data-variant={props.variant}
      className="w-full"
    >
      <div className="max-w-7xl py-10 w-full mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Content types</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="navbar">
              <TabsList>
                <TabsTrigger value="page">Page</TabsTrigger>
                <TabsTrigger value="navbar">Navbar</TabsTrigger>
                <TabsTrigger value="layout">Layout</TabsTrigger>
                <TabsTrigger value="widget">Widget</TabsTrigger>
                <TabsTrigger value="hero-section-block">
                  Hero Section Block
                </TabsTrigger>
              </TabsList>

              <TabsContent value="page">
                <PageSpsLiteAdminTable isServer={false} variant="admin-table" />
              </TabsContent>
              <TabsContent value="navbar">
                <NavbarSpsLiteAdminTable
                  isServer={false}
                  variant="admin-table"
                />
              </TabsContent>
              <TabsContent value="layout">
                <LayoutSpsLiteAdminTable
                  isServer={false}
                  variant="admin-table"
                />
              </TabsContent>
              <TabsContent value="widget">
                <WidgetSpsLiteAdminTable
                  isServer={false}
                  variant="admin-table"
                />
              </TabsContent>
              <TabsContent value="hero-section-block">
                <HeroSectionBlockSpsLiteAdminTable
                  isServer={false}
                  variant="admin-table"
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
