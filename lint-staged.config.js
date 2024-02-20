module.exports = {
  "{apps,libs,tools}/**/*.{js,jsx,ts,tsx}": [
    (files) => {
      return `nx format:write --files=${files.join(",")}`;
    },
    (files) => {
      return `nx affected:lint --files=${files.join(",")}`;
    },
  ],
  "{apps,libs,tools}/**/*.{json}": [
    (files) => {
      return `nx format:write --files=${files.join(",")}`;
    },
  ],
};
