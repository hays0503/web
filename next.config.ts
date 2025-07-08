import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
	trailingSlash: true,
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
	async rewrites(){
    return [
      {
        source: "/api/v1/geo/by-ip",
        destination: "http://185.100.67.246:9000/api/v1/geo/by-ip",
      },
	  {
		source:'/api/v1/populates/',
		destination:'http://185.100.67.246:8888/api/v1/populates/'
	  },
	  {
		source: "/api/v2/products_v2/filter_by_ids/",
		destination: "http://185.100.67.246:8888/api/v2/products_v2/filter_by_ids/",
	  }
    ];
  }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
