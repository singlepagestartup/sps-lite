/**
 * This script starts a local registry for e2e testing purposes.
 * It is meant to be called in jest's globalSetup.
 */
// const { startLocalRegistry } = require("@nx/js/plugins/jest/local-registry");
const { execFileSync } = require("child_process");

async function createRelease() {
  // local registry target to run
  // const localRegistryTarget = "http://localhost:4873";
  // storage folder for the local registry
  // const storage = "./local-registry/storage";

  // global.stopLocalRegistry = await startLocalRegistry({
  //   localRegistryTarget,
  //   storage,
  //   verbose: false,
  // });
  const nx = require.resolve("nx");
  execFileSync(nx, ["run", "sps-billing-backend:nx-release-publish"], {
    stdio: "inherit",
  });
}

(async () => {
  await createRelease();
})();
