import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
	experimental: {
		ppr: "incremental",
    optimizePackageImports: ["@chakra-ui/react"],
	},
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
