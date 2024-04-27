import { HTTPException } from "hono/http-exception";
import { Hono } from "hono";
import { app as pageApp } from "@sps/sps-website-builder-models-page-backend-app";

export const app = new Hono();

app.route("/pages", pageApp);

app.get("/", async (c) => {
  try {
    return c.json({
      data: "sps-website-builder",
    });
  } catch (error: any) {
    throw new HTTPException(400, {
      message: error.message,
    });
  }
});
