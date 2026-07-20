import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vinext currently serves local assets directly; keeping Image unoptimized
  // avoids the dev/runtime image proxy while preserving intrinsic sizing.
  images: { unoptimized: true },
};

export default nextConfig;
