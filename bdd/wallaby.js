module.exports = function (wallaby) {
  return {
    autoDetect: true,
    runMode: "onsave",
    env: {
      type: "node",
    },
    compilers: {
      "**/*.ts?(x)": wallaby.compilers.typeScript({ module: "commonjs" }),
    },
  };
};
