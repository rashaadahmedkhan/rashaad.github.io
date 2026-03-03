import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  basePath: "/rashaad.github.io",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
