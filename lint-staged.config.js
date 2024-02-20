module.exports = {
  "**/*.{js,ts,jsx,tsx}": () => {
    return `nx affected:lint`;
  },
};
