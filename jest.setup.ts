import "reflect-metadata";
require("dotenv").config({
  path: (() => {
    return ".env.testing";
  })(),
});
