import axios from "axios";
import * as fs from "fs/promises";
import { createWriteStream } from "fs";
import path from "path";
import { snakeCaseToCamelCase } from "@sps/utils";

let iteration = 0;

const requiredFontVariants = ["Default", "Primary"];
// "" means "normal"
const requiredFontStyles = ["", "Italic"];
const requiredFontWeights = ["Light", "Regular", "Medium", "SemiBold", "Bold"];

function getFileUrl(obj: any, options: any = {}) {
  const { size } = options;
  if (!obj) {
    return null;
  }

  const url = size ? obj.formats?.[size]?.url || obj.url : obj.url;

  const httpsExists = url.match(/^https?:\/\//);

  if (httpsExists) {
    return url;
  }

  const BACKEND_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:1337";

  return `${BACKEND_URL || ""}${url}`;
}

export const getThemeFromBackend = async () => {
  const envFile = process.env.NODE_ENV;
  require("dotenv").config({
    path: path.join(__dirname, "../", `.env.${envFile}`),
  });

  console.log(`🚀 ~ getThemeFromBackend ~ envFile:`, envFile);

  const themeData = await axios
    .get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sps-website-builder/theme?populate[fonts][populate]=%2A`,
    )
    .then((res: any) => {
      return res.data?.data;
    })
    .catch((error: any) => {
      console.log("getThemeFromBackend error: ", error.message);
    });

  if (themeData) {
    const data = JSON.stringify(themeData, " " as any, 2);

    await fs.writeFile(
      path.join(__dirname, "../", "./themes/theme.json"),
      data,
    );

    if (themeData.fonts) {
      const oldExistingFonts = await fs.readdir(
        path.join(__dirname, "../", "./themes/fonts"),
      );

      for (const oldExistingFont of oldExistingFonts) {
        if (
          oldExistingFont !== ".gitkeep" &&
          oldExistingFont !== ".gitignore"
        ) {
          await fs.unlink(
            path.join(__dirname, "../", `./themes/fonts/${oldExistingFont}`),
          );
        }
      }

      for (const font of themeData.fonts) {
        if (font.media) {
          const fontData = font.media;
          const fontVariant =
            font.variant === "default" ? "Default" : "Primary";
          const fontWeight = snakeCaseToCamelCase(
            font.weight.charAt(0).toUpperCase() + font.weight.slice(1),
          );
          const fontStyle = font.style === "normal" ? "" : "Italic";
          const fileName = `${fontVariant}-${fontWeight}${fontStyle}${fontData.ext}`;

          const fontFile = await axios({
            url: getFileUrl(fontData),
            method: "GET",
            responseType: "stream",
          })
            .then(async (response: any) => {
              await response.data.pipe(
                createWriteStream(
                  path.join(__dirname, "../", `./themes/fonts/${fileName}`),
                ),
              );

              /**
               * Without that Next.js doesn't add all fonts
               */
              const existingFonts = await fs.readdir(
                path.join(__dirname, "../", "./themes/fonts"),
              );
            })
            .catch((error: any) => {
              console.log("createWriteStream error: ", error.message);
            });
        }
      }
    }
  } else {
    iteration++;

    if (iteration < 5 && process.env.NODE_ENV === "production") {
      setTimeout(() => {
        getThemeFromBackend();
      }, 5000);
    }
  }

  const existingFonts = await fs.readdir(
    path.join(__dirname, "../", "./themes/fonts"),
  );

  if (!existingFonts.includes("Default-Regular.ttf")) {
    await fs.copyFile(
      path.join(
        __dirname,
        "../",
        "./styles/fonts/Montserrat/Montserrat-Regular.ttf",
      ),
      path.join(__dirname, "../", "./themes/fonts/Default-Regular.ttf"),
    );
  }

  if (!existingFonts.includes("Primary-Regular.ttf")) {
    await fs.copyFile(
      path.join(
        __dirname,
        "../",
        "./styles/fonts/Montserrat/Montserrat-Regular.ttf",
      ),
      path.join(__dirname, "../", "./themes/fonts/Primary-Regular.ttf"),
    );
  }

  for (const requiredFontVariant of requiredFontVariants) {
    for (const requiredFontWeight of requiredFontWeights) {
      for (const requiredFontStyle of requiredFontStyles) {
        if (
          !existingFonts.includes(
            `${requiredFontVariant}-${requiredFontWeight}${requiredFontStyle}.ttf`,
          )
        ) {
          await fs.copyFile(
            path.join(
              __dirname,
              "../",
              `./themes/fonts/${requiredFontVariant}-Regular.ttf`,
            ),
            path.join(
              __dirname,
              "../",
              `./themes/fonts/${requiredFontVariant}-${requiredFontWeight}${requiredFontStyle}.ttf`,
            ),
          );
        }
      }
    }
  }
};

getThemeFromBackend();
