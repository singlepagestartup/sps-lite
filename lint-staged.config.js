module.exports = {
  "**/*": "npx prettier . --write --ignore-unknown",
  // "{apps,libs,tools}/**/*.{js,jsx,ts,tsx,feature,json}": [
  //   (files) => {
  //     return ``;
  //   },
  //   // (files) => {
  //   //   return `nx affected:lint --files=${files.join(",")}`;
  //   // },
  // ],
};
