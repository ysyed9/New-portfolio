import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Lock the app root so Next does not pick a parent `package-lock.json` (e.g. in $HOME)
// as the workspace root — that mis-detection can balloon file watching and RAM use.
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
