const axios = require("axios");
const fs = require("fs/promises");
const { createWriteStream } = require("fs");
const path = require("path");

const getThemeFromBackend = async (props) => {
  const envFile = process.env.ENV_FILE;
  require("dotenv").config({ path: `.env.${envFile}` });

  const themeData = await axios
    .get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/theme?populate[fonts][populate]=%2A`
    )
    .then((res) => {
      return res.data?.data;
    })
    .catch((error) => {
      console.log("getThemeFromBackend error: ", error.message);
    });

  if (themeData) {
    const data = JSON.stringify(themeData, " ", 2);

    await fs.writeFile(path.join(__dirname, "./themes/theme.json"), data);

    if (themeData.fonts) {
      for (const font of themeData.fonts) {
        if (font.media.data) {
          const fontData = font.media.data;
          const fontVariant =
            font.variant === "default" ? "Default" : "Primary";
          const fontWeight = font.weight;
          const fileName = `${fontVariant}-${
            fontWeight.charAt(0).toUpperCase() + fontWeight.slice(1)
          }${fontData.ext}`;

          const fontFile = await axios({
            url: fontData.url,
            method: "GET",
            responseType: "stream",
          }).then(async (response) => {
            await response.data.pipe(
              createWriteStream(
                path.join(__dirname, `./themes/fonts/${fileName}`)
              )
            );
          });
        }
      }
    }
  }
};

getThemeFromBackend();
