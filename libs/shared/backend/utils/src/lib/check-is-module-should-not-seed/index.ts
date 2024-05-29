export function util({ name }: { name: string }): boolean {
  const modules = [
    {
      name: "spsWebsiteBuilder",
      envKey: "SPS_WEBSITE_BUILDER_SEED",
    },
    {
      name: "spsFileStorage",
      envKey: "SPS_FILE_STORAGE_SEED",
    },
    {
      name: "startup",
      envKey: "STARTUP_SEED",
    },
  ];

  const module = modules.find((module) => module.name === name);
  if (!module) {
    return false;
  }

  const envValue = process.env[module?.envKey];
  if (envValue === "false") {
    return true;
  }

  return false;
}
