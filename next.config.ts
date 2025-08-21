import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 enlist:{
  ignoreDuringBuilds: true,
 },
 typescript:{
  ignoreBuildErrors: true,
 }
};

export default nextConfig;
