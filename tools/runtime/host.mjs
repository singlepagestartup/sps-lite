import { spawn } from "node:child_process";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

/** Browser SDKs must not detect Node's experimental localStorage during SSR. */
export function hostEnvironment(environment = process.env) {
  return {
    ...environment,
    NODE_OPTIONS: [environment.NODE_OPTIONS, "--no-experimental-webstorage"]
      .filter(Boolean)
      .join(" "),
  };
}

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const mode = process.argv[2];
  if (mode !== "dev" && mode !== "start") {
    console.error("Usage: node tools/runtime/host.mjs dev|start [Nx options]");
    process.exitCode = 1;
  } else {
    const root = fileURLToPath(new URL("../../", import.meta.url));
    const child = spawn(
      process.execPath,
      [
        resolve(root, "node_modules/nx/bin/nx.js"),
        "run",
        `host:next:${mode}`,
        ...process.argv.slice(3),
      ],
      { cwd: root, env: hostEnvironment(), stdio: "inherit" },
    );
    for (const signal of ["SIGINT", "SIGTERM"]) {
      process.once(signal, () => child.kill(signal));
    }
    child.once("error", (error) => {
      console.error(error.message);
      process.exitCode = 1;
    });
    child.once("exit", (code, signal) => {
      process.exitCode = code ?? (signal === "SIGINT" ? 130 : 143);
    });
  }
}
