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
import { Component as FooterSpsLiteAdminTable } from "@sps/sps-website-builder-models-footer-frontend-component-variants-sps-lite-admin-table";
import { Component as LogotypeSpsLiteAdminTable } from "@sps/sps-website-builder-models-logotype-frontend-component-variants-sps-lite-admin-table";
import { Component as ButtonSpsLiteAdminTable } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-admin-table";
import { Component as NavbarBlockSpsLiteAdminTable } from "@sps/sps-website-builder-models-navbar-block-frontend-component-variants-sps-lite-admin-table";
import { Component as FooterBlockSpsLiteAdminTable } from "@sps/sps-website-builder-models-footer-block-frontend-component-variants-sps-lite-admin-table";
import { Component as SliderBlockSpsLiteAdminTable } from "@sps/sps-website-builder-models-slider-block-frontend-component-variants-sps-lite-admin-table";
import { Component as SliderSpsLiteAdminTable } from "@sps/sps-website-builder-models-slider-frontend-component-variants-sps-lite-admin-table";
import { Component as SlideSpsLiteAdminTable } from "@sps/sps-website-builder-models-slide-frontend-component-variants-sps-lite-admin-table";
import { Component as FileSpsLiteAdminTable } from "@sps/sps-file-storage-models-file-frontend-component-variants-sps-lite-admin-table";

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
            <Tabs defaultValue="file">
              <TabsList>
                <TabsTrigger value="page">Page</TabsTrigger>
                <TabsTrigger value="navbar">Navbar</TabsTrigger>
                <TabsTrigger value="footer">Footer</TabsTrigger>
                <TabsTrigger value="logotype">Logotype</TabsTrigger>
                <TabsTrigger value="button">Button</TabsTrigger>
                <TabsTrigger value="layout">Layout</TabsTrigger>
                <TabsTrigger value="file">Files</TabsTrigger>
                <TabsTrigger value="slider">Slider</TabsTrigger>
                <TabsTrigger value="slide">Slide</TabsTrigger>
                <TabsTrigger value="widget">Widget</TabsTrigger>
                <TabsTrigger value="hero-section-block">
                  Hero Section Block
                </TabsTrigger>
                <TabsTrigger value="navbar-block">Navbar Block</TabsTrigger>
                <TabsTrigger value="footer-block">Footer Block</TabsTrigger>
                <TabsTrigger value="slider-block">Slider Block</TabsTrigger>
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
              <TabsContent value="footer">
                <FooterSpsLiteAdminTable
                  isServer={false}
                  variant="admin-table"
                />
              </TabsContent>
              <TabsContent value="logotype">
                <LogotypeSpsLiteAdminTable
                  isServer={false}
                  variant="admin-table"
                />
              </TabsContent>
              <TabsContent value="button">
                <ButtonSpsLiteAdminTable
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
              <TabsContent value="file">
                <FileSpsLiteAdminTable isServer={false} variant="admin-table" />
              </TabsContent>
              <TabsContent value="slider">
                <SliderSpsLiteAdminTable
                  isServer={false}
                  variant="admin-table"
                />
              </TabsContent>
              <TabsContent value="slide">
                <SlideSpsLiteAdminTable
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
              <TabsContent value="navbar-block">
                <NavbarBlockSpsLiteAdminTable
                  isServer={false}
                  variant="admin-table"
                />
              </TabsContent>
              <TabsContent value="footer-block">
                <FooterBlockSpsLiteAdminTable
                  isServer={false}
                  variant="admin-table"
                />
              </TabsContent>
              <TabsContent value="slider-block">
                <SliderBlockSpsLiteAdminTable
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
