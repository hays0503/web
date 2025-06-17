import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
	// compiler: {
	// 	emotion: true,
	// },
	experimental: {
		cssChunking: true,
		webVitalsAttribution: ["CLS", "LCP", "FID", "FCP", "TTFB"],
		viewTransition: true,
		reactCompiler: true,
		ppr: "incremental",
		optimizePackageImports: ["@chakra-ui/react"],
	},
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
