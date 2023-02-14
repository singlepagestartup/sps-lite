const axios = require("axios");
const fs = require("fs/promises");
const path = require("path");

const getThemeFromBackend = async (props) => {
  const envFile = process.env.ENV_FILE;
  require("dotenv").config({ path: `.env.${envFile}` });

  const themeData = await axios
    .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/theme`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log("getThemeFromBackend error: ", error.message);
    });

  if (themeData) {
    const data = JSON.stringify(themeData.data, " ", 2);

    await fs.writeFile(path.join(__dirname, "./themes/theme.json"), data);
  }
};

getThemeFromBackend();
