import { Hono } from "hono";
import { handle } from "hono/vercel";
import { createMiddleware } from "hono/factory";
import { type NextRequest } from "next/server";
import { app as spsHostApp } from "@sps/sps-host/backend/app/root";
import { app as spsWebsiteBuilderApp } from "@sps/sps-website-builder/backend/app/root";
import { app as spsFileStorageApp } from "@sps/sps-file-storage/backend/app/root";
import { app as spsRbacApp } from "@sps/sps-rbac/backend/app/root";
import { app as startupApp } from "@sps/startup/backend/app/root";
import { app as spsBilling } from "@sps/sps-billing/backend/app/root";
import { app as spsBroadcast } from "@sps/sps-broadcast/backend/app/root";
import { app as spsCrm } from "@sps/sps-crm/backend/app/root";
import { app as spsThirdParties } from "@sps/sps-third-parties/backend/app/root";
import { app as spsNotification } from "@sps/sps-notification/backend/app/root";
import { chain as middlewaresChain } from "./middlewares/chain";
import { ExceptionFilter } from "@sps/shared-backend-api";
import { ErrorHandler } from "hono/types";
import { app as heroSectionBlock } from "@sps/sps-website-builder/models/hero-section-block/backend/app/root";
import { app as buttonsArrat } from "@sps/sps-website-builder/models/buttons-array/backend/app/root";
import { app as button } from "@sps/sps-website-builder/models/button/backend/app/root";
import { app as feature } from "@sps/sps-website-builder/models/feature/backend/app/root";
import { app as featuresSectionBlock } from "@sps/sps-website-builder/models/features-section-block/backend/app/root";
import { app as footer } from "@sps/sps-website-builder/models/footer/backend/app/root";
import { app as logotype } from "@sps/sps-website-builder/models/logotype/backend/app/root";
import { app as slide } from "@sps/sps-website-builder/models/slide/backend/app/root";
import { app as slider } from "@sps/sps-website-builder/models/slider/backend/app/root";
import { app as sliderBlock } from "@sps/sps-website-builder/models/slider-block/backend/app/root";
import { app as footerBlock } from "@sps/sps-website-builder/models/footer-block/backend/app/root";
import { app as navbarBlock } from "@sps/sps-website-builder/models/navbar-block/backend/app/root";
import { app as navbar } from "@sps/sps-website-builder/models/navbar/backend/app/root";
import { app as widget } from "@sps/sps-website-builder/models/widget/backend/app/root";
import { app as widgetsToHeroSectionBlocks } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/backend/app/root";

export const dynamic = "force-dynamic";

const app = new Hono<any, any, any>().basePath("/api");

app.onError(new ExceptionFilter().catch as unknown as ErrorHandler<any>);
middlewaresChain(app);

app.use(
  createMiddleware(async (c, next) => {
    const path = c.req.path;
    console.log("Host App Middleware", path);

    await next();
  }),
);

app.route("/sps-host", spsHostApp as any);
app.route("/sps-broadcast", spsBroadcast as any);
app.route("/sps-website-builder", spsWebsiteBuilderApp as any);
app.route("/sps-file-storage", spsFileStorageApp as any);
app.mount("/sps-rbac", spsRbacApp.hono.fetch);
app.route("/sps-billing", spsBilling as any);
app.route("/sps-third-parties", spsThirdParties as any);
app.route("/sps-crm", spsCrm as any);
app.route("/sps-notification", spsNotification as any);
app.route("/startup", startupApp as any);

app.mount(
  "/sps-website-builder/hero-section-blocks",
  heroSectionBlock.hono.fetch,
);
app.mount("/sps-website-builder/buttons-arrays", buttonsArrat.hono.fetch);
app.mount("/sps-website-builder/buttons", button.hono.fetch);
app.mount("/sps-website-builder/features", feature.hono.fetch);
app.mount(
  "/sps-website-builder/features-section-blocks",
  featuresSectionBlock.hono.fetch,
);
app.mount("/sps-website-builder/footers", footer.hono.fetch);

app.mount("/sps-website-builder/logotypes", logotype.hono.fetch);
app.mount("/sps-website-builder/slides", slide.hono.fetch);
app.mount("/sps-website-builder/sliders", slider.hono.fetch);
app.mount("/sps-website-builder/slider-blocks", sliderBlock.hono.fetch);
app.mount("/sps-website-builder/footer-blocks", footerBlock.hono.fetch);
app.mount("/sps-website-builder/navbar-blocks", navbarBlock.hono.fetch);
app.mount("/sps-website-builder/navbars", navbar.hono.fetch);
app.mount("/sps-website-builder/widgets", widget.hono.fetch);
app.mount(
  "/sps-website-builder/widgets-to-hero-section-blocks",
  widgetsToHeroSectionBlocks.hono.fetch,
);

export async function POST(request: NextRequest, params: any) {
  return handle(app)(request, params);
}
export async function GET(request: NextRequest, params: any) {
  return handle(app)(request, params);
}
export async function PATCH(request: NextRequest, params: any) {
  return handle(app)(request, params);
}
export async function DELETE(request: NextRequest, params: any) {
  return handle(app)(request, params);
}
