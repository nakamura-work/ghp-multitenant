import type { NextConfig } from "next";

const documentBase = process.env.DOCUMENT_BASE;
const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: documentBase ?? '',
  assetPrefix: documentBase ?? '',
};

export default nextConfig;
